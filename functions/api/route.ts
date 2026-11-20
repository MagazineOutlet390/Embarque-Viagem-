/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Cloudflare Pages Function: POST /api/route
interface Env {
  GOOGLE_MAPS_API_KEY?: string;
}

interface RouteContext {
  request: Request;
  env?: Env;
}

export const onRequestPost = async (context: RouteContext): Promise<Response> => {
  try {
    const body = (await context.request.json()) as {
      origin?: string;
      destination?: string;
      waypoints?: string[];
    };

    const origin = body?.origin?.trim();
    const destination = body?.destination?.trim();
    const waypoints = Array.isArray(body?.waypoints) ? body.waypoints.filter((w) => typeof w === 'string' && w.trim()) : [];

    if (!origin || !destination) {
      return new Response(
        JSON.stringify({ error: 'Origem e destino são obrigatórios.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = context.env?.GOOGLE_MAPS_API_KEY;

    // If Google Maps API Key is available, invoke Google Maps Routes API v2
    if (apiKey) {
      try {
        const intermediates = waypoints.map((wp) => ({ address: wp }));

        const routesReqBody: any = {
          origin: { address: origin },
          destination: { address: destination },
          travelMode: 'DRIVE',
          routingPreference: 'TRAFFIC_UNAWARE',
          computeAlternativeRoutes: false,
          extraComputations: ['TOLLS'],
        };

        if (intermediates.length > 0) {
          routesReqBody.intermediates = intermediates;
        }

        const res = await fetch('https://routes.googleapis.com/directions/v2:computeRoutes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': apiKey,
            'X-Goog-FieldMask':
              'routes.distanceMeters,routes.duration,routes.description,routes.travelAdvisory.tollInfo',
          },
          body: JSON.stringify(routesReqBody),
        });

        if (res.ok) {
          const data = (await res.json()) as any;
          const route = data?.routes?.[0];
          if (route) {
            const distanceMeters = route.distanceMeters || 0;
            const distanceKm = Math.round(distanceMeters / 1000);

            // Duration format from Google Routes API is like "18400s"
            let durationSeconds = 0;
            if (typeof route.duration === 'string' && route.duration.endsWith('s')) {
              durationSeconds = parseInt(route.duration.slice(0, -1), 10) || 0;
            }
            const durationMinutes = Math.round(durationSeconds / 60);

            // Toll estimate
            let tollEstimate = 0;
            const tollInfo = route.travelAdvisory?.tollInfo;
            if (tollInfo?.estimatedPrice) {
              const price = tollInfo.estimatedPrice[0];
              if (price) {
                const units = parseInt(price.units || '0', 10);
                const nanos = (price.nanos || 0) / 1e9;
                tollEstimate = Math.round((units + nanos) * 100) / 100;
              }
            }

            return new Response(
              JSON.stringify({
                source: 'google_maps_routes',
                distanceKm,
                durationMinutes,
                tollEstimate,
                highway: route.description || 'Google Maps Routes',
              }),
              { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
          }
        }
      } catch (e) {
        // Fallback to local heuristic
      }
    }

    // Fallback response signaling client to use local matrix
    return new Response(
      JSON.stringify({
        source: 'highway_matrix',
        status: 'fallback_to_matrix',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err?.message || 'Erro ao processar rota.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

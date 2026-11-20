/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface RouteWaypoint {
  id: string;
  name: string;
}

export interface RouteCalculationParams {
  origin: string;
  destination: string;
  waypoints?: string[];
  isRoundTrip: boolean;
  fuelType: 'gasoline' | 'ethanol' | 'diesel';
  fuelPrice: number;
  consumptionKmPerLiter: number;
  passengers: number;
  manualToll?: number;
}

export interface RouteCalculationResult {
  distanceKm: number;
  durationMinutes: number;
  durationFormatted: string;
  fuelRequiredLiters: number;
  fuelCost: number;
  tollCost: number;
  totalCost: number;
  costPerPassenger: number;
  isRoundTrip: boolean;
  googleMapsUrl: string;
  source: 'google_maps_routes' | 'highway_matrix';
  tollDetails?: {
    plazaCount: number;
    estimatedPerPlaza: number;
    highway: string;
  };
}

// Curated Brazilian highway distance matrix between major cities & tourist hubs
// Distances are road kilometers and typical driving duration in minutes
interface HighwayConnection {
  from: string;
  to: string;
  km: number;
  minutes: number;
  tollEstimateOneWay: number;
  highway: string;
  tollPlazas: number;
}

const HIGHWAY_DATABASE: HighwayConnection[] = [
  // São Paulo to Santa Catarina & Paraná
  { from: 'São Paulo, SP', to: 'Curitiba, PR', km: 408, minutes: 330, tollEstimateOneWay: 24.80, highway: 'BR-116 (Régis Bittencourt)', tollPlazas: 6 },
  { from: 'São Paulo, SP', to: 'Florianópolis, SC', km: 705, minutes: 540, tollEstimateOneWay: 45.20, highway: 'BR-116 + BR-376 + BR-101', tollPlazas: 8 },
  { from: 'São Paulo, SP', to: 'Balneário Camboriú, SC', km: 625, minutes: 480, tollEstimateOneWay: 38.40, highway: 'BR-116 + BR-101', tollPlazas: 7 },
  { from: 'São Paulo, SP', to: 'Bombinhas, SC', km: 655, minutes: 510, tollEstimateOneWay: 42.00, highway: 'BR-116 + BR-101', tollPlazas: 7 },
  { from: 'São Paulo, SP', to: 'Itapema, SC', km: 640, minutes: 495, tollEstimateOneWay: 38.40, highway: 'BR-116 + BR-101', tollPlazas: 7 },
  { from: 'São Paulo, SP', to: 'Porto Belo, SC', km: 648, minutes: 500, tollEstimateOneWay: 38.40, highway: 'BR-116 + BR-101', tollPlazas: 7 },
  { from: 'São Paulo, SP', to: 'Gramado, RS', km: 1120, minutes: 840, tollEstimateOneWay: 62.50, highway: 'BR-116 + BR-101 + RS-486', tollPlazas: 10 },
  { from: 'São Paulo, SP', to: 'Rio de Janeiro, RJ', km: 435, minutes: 340, tollEstimateOneWay: 76.80, highway: 'BR-116 (Via Dutra)', tollPlazas: 6 },
  { from: 'São Paulo, SP', to: 'Angra dos Reis, RJ', km: 395, minutes: 320, tollEstimateOneWay: 28.50, highway: 'Rod. Ayrton Senna + BR-101 Rio-Santos', tollPlazas: 3 },
  { from: 'São Paulo, SP', to: 'Ubatuba, SP', km: 235, minutes: 195, tollEstimateOneWay: 18.20, highway: 'Rod. Tamoios / Oswaldo Cruz', tollPlazas: 2 },
  { from: 'São Paulo, SP', to: 'Santos, SP', km: 78, minutes: 70, tollEstimateOneWay: 35.80, highway: 'Rod. Imigrantes (SP-160)', tollPlazas: 1 },

  // Curitiba to Santa Catarina
  { from: 'Curitiba, PR', to: 'Florianópolis, SC', km: 305, minutes: 240, tollEstimateOneWay: 22.40, highway: 'BR-376 + BR-101', tollPlazas: 4 },
  { from: 'Curitiba, PR', to: 'Balneário Camboriú, SC', km: 225, minutes: 180, tollEstimateOneWay: 16.80, highway: 'BR-376 + BR-101', tollPlazas: 3 },
  { from: 'Curitiba, PR', to: 'Bombinhas, SC', km: 255, minutes: 210, tollEstimateOneWay: 16.80, highway: 'BR-376 + BR-101', tollPlazas: 3 },
  { from: 'Curitiba, PR', to: 'Itapema, SC', km: 240, minutes: 195, tollEstimateOneWay: 16.80, highway: 'BR-376 + BR-101', tollPlazas: 3 },
  { from: 'Curitiba, PR', to: 'Porto Belo, SC', km: 248, minutes: 200, tollEstimateOneWay: 16.80, highway: 'BR-376 + BR-101', tollPlazas: 3 },
  { from: 'Curitiba, PR', to: 'Gramado, RS', km: 720, minutes: 540, tollEstimateOneWay: 41.20, highway: 'BR-101 + RS-486 (Rota do Sol)', tollPlazas: 6 },

  // Florianópolis internal & to RS
  { from: 'Florianópolis, SC', to: 'Balneário Camboriú, SC', km: 85, minutes: 75, tollEstimateOneWay: 5.60, highway: 'BR-101 Norte', tollPlazas: 1 },
  { from: 'Florianópolis, SC', to: 'Bombinhas, SC', km: 75, minutes: 70, tollEstimateOneWay: 0.00, highway: 'BR-101 + SC-412', tollPlazas: 0 },
  { from: 'Florianópolis, SC', to: 'Porto Alegre, RS', km: 460, minutes: 340, tollEstimateOneWay: 23.50, highway: 'BR-101 Sul + CCR ViaCosteira', tollPlazas: 4 },
  { from: 'Florianópolis, SC', to: 'Gramado, RS', km: 435, minutes: 350, tollEstimateOneWay: 19.80, highway: 'BR-101 Sul + RS-486 (Rota do Sol)', tollPlazas: 3 },

  // Porto Alegre to Serra Gaúcha & SC
  { from: 'Porto Alegre, RS', to: 'Gramado, RS', km: 115, minutes: 110, tollEstimateOneWay: 8.50, highway: 'BR-116 + RS-239 + RS-115', tollPlazas: 1 },
  { from: 'Porto Alegre, RS', to: 'Canela, RS', km: 122, minutes: 118, tollEstimateOneWay: 8.50, highway: 'RS-115 + RS-235', tollPlazas: 1 },
  { from: 'Porto Alegre, RS', to: 'Bombinhas, SC', km: 515, minutes: 390, tollEstimateOneWay: 29.10, highway: 'BR-101 Norte', tollPlazas: 5 },
  { from: 'Porto Alegre, RS', to: 'Balneário Camboriú, SC', km: 535, minutes: 405, tollEstimateOneWay: 29.10, highway: 'BR-101 Norte', tollPlazas: 5 },

  // Rio de Janeiro to coastal hubs
  { from: 'Rio de Janeiro, RJ', to: 'Búzios, RJ', km: 175, minutes: 160, tollEstimateOneWay: 38.60, highway: 'Ponte Rio-Niterói + RJ-124 (ViaLagos)', tollPlazas: 2 },
  { from: 'Rio de Janeiro, RJ', to: 'Angra dos Reis, RJ', km: 155, minutes: 145, tollEstimateOneWay: 14.50, highway: 'BR-101 (Rio-Santos)', tollPlazas: 1 },
  { from: 'Rio de Janeiro, RJ', to: 'Paraty, RJ', km: 245, minutes: 220, tollEstimateOneWay: 14.50, highway: 'BR-101 (Rio-Santos)', tollPlazas: 1 },
  { from: 'Rio de Janeiro, RJ', to: 'Petrópolis, RJ', km: 68, minutes: 70, tollEstimateOneWay: 14.20, highway: 'BR-040 (Concer)', tollPlazas: 1 },
  { from: 'Rio de Janeiro, RJ', to: 'Florianópolis, SC', km: 1140, minutes: 840, tollEstimateOneWay: 122.00, highway: 'Via Dutra + Régis Bittencourt + BR-101', tollPlazas: 14 },

  // Belo Horizonte
  { from: 'Belo Horizonte, MG', to: 'Rio de Janeiro, RJ', km: 440, minutes: 360, tollEstimateOneWay: 58.40, highway: 'BR-040 (Via 040)', tollPlazas: 4 },
  { from: 'Belo Horizonte, MG', to: 'Búzios, RJ', km: 580, minutes: 470, tollEstimateOneWay: 72.00, highway: 'BR-040 + RJ-124', tollPlazas: 5 },
  { from: 'Belo Horizonte, MG', to: 'São Paulo, SP', km: 585, minutes: 450, tollEstimateOneWay: 41.50, highway: 'BR-381 (Fernão Dias)', tollPlazas: 8 },
];

export const POPULAR_ROUTE_PRESETS = [
  {
    title: 'São Paulo ➔ Florianópolis (Litoral Catarinense)',
    origin: 'São Paulo, SP',
    destination: 'Florianópolis, SC',
    highway: 'BR-116 Régis Bittencourt + BR-101',
    description: 'A principal rota rodoviária para o litoral sul, passando por Curitiba e Balneário Camboriú.',
  },
  {
    title: 'Curitiba ➔ Bombinhas (Costa Esmeralda)',
    origin: 'Curitiba, PR',
    destination: 'Bombinhas, SC',
    highway: 'BR-376 + BR-101 Sul',
    description: 'Descida da Serra do Mar direto às águas cristalinas de Bombinhas.',
  },
  {
    title: 'Porto Alegre ➔ Gramado (Serra Gaúcha)',
    origin: 'Porto Alegre, RS',
    destination: 'Gramado, RS',
    highway: 'BR-116 + RS-239 + RS-115',
    description: 'Subida da Serra Gaúcha pela Rota das Hortênsias.',
  },
  {
    title: 'Rio de Janeiro ➔ Búzios (Região dos Lagos)',
    origin: 'Rio de Janeiro, RJ',
    destination: 'Búzios, RJ',
    highway: 'Ponte Rio-Niterói + RJ-124 ViaLagos',
    description: 'Travessia da Baía de Guanabara até a charmosa península de Búzios.',
  },
  {
    title: 'São Paulo ➔ Angra dos Reis (Costa Verde)',
    origin: 'São Paulo, SP',
    destination: 'Angra dos Reis, RJ',
    highway: 'Rod. Ayrton Senna + BR-101 Rio-Santos',
    description: 'Descida da serra e trecho cênico à beira-mar pela Rio-Santos.',
  },
  {
    title: 'Florianópolis ➔ Gramado (Serra & Mar)',
    origin: 'Florianópolis, SC',
    destination: 'Gramado, RS',
    highway: 'BR-101 Sul + RS-486 Rota do Sol',
    description: 'Conexão entre as praias catarinenses e o clima europeu de Gramado e Canela.',
  },
];

// Helper to normalize city names for matching
function normalizeText(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

export function formatDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.round(totalMinutes % 60);
  if (hours === 0) return `${minutes} min`;
  if (minutes === 0) return `${hours} h`;
  return `${hours} h ${minutes} min`;
}

export function buildGoogleMapsUrl(origin: string, destination: string, waypoints: string[] = []): string {
  const base = 'https://www.google.com/maps/dir/?api=1';
  const orig = encodeURIComponent(origin);
  const dest = encodeURIComponent(destination);
  let url = `${base}&origin=${orig}&destination=${dest}&travelmode=driving`;
  if (waypoints.length > 0) {
    const validWaypoints = waypoints.filter((w) => w.trim().length > 0);
    if (validWaypoints.length > 0) {
      url += `&waypoints=${encodeURIComponent(validWaypoints.join('|'))}`;
    }
  }
  return url;
}

// Estimate distance & toll through highway database or fallback formula
export function calculateLocalRoute(
  origin: string,
  destination: string,
  waypoints: string[] = []
): { distanceKm: number; durationMinutes: number; tollEstimate: number; highway: string; tollPlazas: number } {
  const normOrig = normalizeText(origin);
  const normDest = normalizeText(destination);

  // Direct match
  const match = HIGHWAY_DATABASE.find(
    (h) =>
      (normalizeText(h.from).includes(normOrig) || normOrig.includes(normalizeText(h.from))) &&
      (normalizeText(h.to).includes(normDest) || normDest.includes(normalizeText(h.to)))
  ) || HIGHWAY_DATABASE.find(
    (h) =>
      (normalizeText(h.from).includes(normDest) || normDest.includes(normalizeText(h.from))) &&
      (normalizeText(h.to).includes(normOrig) || normOrig.includes(normalizeText(h.to)))
  );

  if (match) {
    let distance = match.km;
    let duration = match.minutes;
    let toll = match.tollEstimateOneWay;
    let plazas = match.tollPlazas;

    // Add distance for each waypoint if present
    if (waypoints.length > 0) {
      distance += waypoints.length * 35; // typical detour
      duration += waypoints.length * 40;
      toll += waypoints.length * 6.50;
      plazas += waypoints.length;
    }

    return {
      distanceKm: distance,
      durationMinutes: duration,
      tollEstimate: toll,
      highway: match.highway,
      tollPlazas: plazas,
    };
  }

  // Fallback heuristic for unlisted Brazilian city pairs
  // Base distance heuristic from string heuristics or default interstate trip
  const defaultDistance = 380;
  const defaultDuration = Math.round((defaultDistance / 75) * 60); // ~75 km/h avg speed with stops
  const defaultToll = Math.round((defaultDistance / 80) * 8.50 * 100) / 100; // avg toll every 80km

  return {
    distanceKm: defaultDistance,
    durationMinutes: defaultDuration,
    tollEstimate: defaultToll,
    highway: 'Malha Rodoviária Federal / Estadual',
    tollPlazas: Math.ceil(defaultDistance / 90),
  };
}

export async function calculateTrip(params: RouteCalculationParams): Promise<RouteCalculationResult> {
  const {
    origin,
    destination,
    waypoints = [],
    isRoundTrip,
    fuelType,
    fuelPrice,
    consumptionKmPerLiter,
    passengers,
    manualToll,
  } = params;

  let distanceKm = 0;
  let durationMinutes = 0;
  let tollEstimate = 0;
  let highwayName = 'Rodovias Brasileiras';
  let tollPlazasCount = 0;
  let calculationSource: 'google_maps_routes' | 'highway_matrix' = 'highway_matrix';

  // 1. Try server-side route calculation proxy
  try {
    const response = await fetch('/api/route', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        origin,
        destination,
        waypoints,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data && typeof data.distanceKm === 'number' && data.distanceKm > 0) {
        distanceKm = data.distanceKm;
        durationMinutes = data.durationMinutes || Math.round((distanceKm / 75) * 60);
        tollEstimate = data.tollEstimate || 0;
        highwayName = data.highway || 'Google Maps Routes';
        tollPlazasCount = data.tollPlazas || Math.ceil(distanceKm / 85);
        calculationSource = data.source === 'google_maps_routes' ? 'google_maps_routes' : 'highway_matrix';
      }
    }
  } catch (e) {
    // Silently proceed to highway matrix
  }

  // 2. If API didn't return distance, compute via local Brazilian Highway Database
  if (!distanceKm || distanceKm <= 0) {
    const localResult = calculateLocalRoute(origin, destination, waypoints);
    distanceKm = localResult.distanceKm;
    durationMinutes = localResult.durationMinutes;
    tollEstimate = localResult.tollEstimate;
    highwayName = localResult.highway;
    tollPlazasCount = localResult.tollPlazas;
    calculationSource = 'highway_matrix';
  }

  // 3. Apply round-trip multiplier
  const multiplier = isRoundTrip ? 2 : 1;
  const totalDistanceKm = Math.round(distanceKm * multiplier);
  const totalDurationMinutes = Math.round(durationMinutes * multiplier);

  // 4. Fuel computations
  const effectiveConsumption = Math.max(consumptionKmPerLiter, 1);
  const fuelRequiredLiters = Math.round((totalDistanceKm / effectiveConsumption) * 10) / 10;
  const fuelCost = Math.round(fuelRequiredLiters * fuelPrice * 100) / 100;

  // 5. Toll computations (use manual override if provided by user, otherwise estimated highway toll)
  let tollCost = 0;
  if (typeof manualToll === 'number' && manualToll >= 0) {
    tollCost = Math.round(manualToll * multiplier * 100) / 100;
  } else {
    tollCost = Math.round(tollEstimate * multiplier * 100) / 100;
  }

  // 6. Total trip cost
  const totalCost = Math.round((fuelCost + tollCost) * 100) / 100;

  // 7. Cost per passenger
  const safePassengers = Math.max(passengers || 1, 1);
  const costPerPassenger = Math.round((totalCost / safePassengers) * 100) / 100;

  // 8. Google Maps navigation link
  const googleMapsUrl = buildGoogleMapsUrl(origin, destination, waypoints);

  return {
    distanceKm: totalDistanceKm,
    durationMinutes: totalDurationMinutes,
    durationFormatted: formatDuration(totalDurationMinutes),
    fuelRequiredLiters,
    fuelCost,
    tollCost,
    totalCost,
    costPerPassenger,
    isRoundTrip,
    googleMapsUrl,
    source: calculationSource,
    tollDetails: {
      plazaCount: tollPlazasCount * multiplier,
      estimatedPerPlaza: tollPlazasCount > 0 ? Math.round((tollCost / (tollPlazasCount * multiplier)) * 100) / 100 : 0,
      highway: highwayName,
    },
  };
}

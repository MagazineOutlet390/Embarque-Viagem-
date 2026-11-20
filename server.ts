/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);

  app.use(express.json());

  // Brevo Newsletter API endpoint
  app.post('/api/newsletter', async (req, res) => {
    try {
      const { name, email, language = 'pt', source = 'website', consentGiven = true } = req.body;

      if (!email || !email.includes('@')) {
        return res.status(400).json({ success: false, message: 'Endereço de e-mail inválido.' });
      }

      const apiKey = process.env.BREVO_API_KEY;

      if (!apiKey) {
        console.warn('[Brevo] BREVO_API_KEY not defined in environment. Simulating registration in dev.');
        return res.status(200).json({
          success: true,
          message: 'Inscrição registrada com sucesso (modo de desenvolvimento).',
          devNotice: 'Adicione BREVO_API_KEY em .env ou nos secrets do Cloudflare Pages para envio em produção.',
        });
      }

      // Live Brevo Contacts v3 API
      const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          attributes: {
            NOME: name || '',
            LANGUAGE: language,
            SOURCE: source,
            CONSENT_LGPD: consentGiven ? 'true' : 'false',
            SIGNUP_DATE: new Date().toISOString(),
          },
          updateEnabled: true,
        }),
      });

      if (brevoRes.ok || brevoRes.status === 201 || brevoRes.status === 204) {
        return res.status(200).json({ success: true, message: 'Inscrição realizada com sucesso!' });
      }

      const errorData: any = await brevoRes.json().catch(() => ({}));

      if (errorData.code === 'duplicate_parameter') {
        return res.status(200).json({
          success: true,
          message: 'Contato já cadastrado em nossa lista editorial. Preferências atualizadas!',
        });
      }

      return res.status(400).json({
        success: false,
        message: errorData.message || 'Erro ao comunicar com a API do Brevo.',
      });
    } catch (err: any) {
      console.error('[Newsletter] Internal error:', err);
      return res.status(500).json({ success: false, message: err?.message || 'Erro interno no servidor.' });
    }
  });

  // Route & Distance API endpoint (Google Maps Routes API proxy with graceful fallback)
  app.post('/api/route', async (req, res) => {
    try {
      const { origin, destination, waypoints = [] } = req.body;

      if (!origin || !destination) {
        return res.status(400).json({ error: 'Origem e destino são obrigatórios.' });
      }

      const apiKey = process.env.GOOGLE_MAPS_API_KEY;

      if (apiKey) {
        try {
          const intermediates = Array.isArray(waypoints)
            ? waypoints.filter((w: any) => typeof w === 'string' && w.trim()).map((address: string) => ({ address }))
            : [];

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

          const gRes = await fetch('https://routes.googleapis.com/directions/v2:computeRoutes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Goog-Api-Key': apiKey,
              'X-Goog-FieldMask':
                'routes.distanceMeters,routes.duration,routes.description,routes.travelAdvisory.tollInfo',
            },
            body: JSON.stringify(routesReqBody),
          });

          if (gRes.ok) {
            const data: any = await gRes.json();
            const route = data?.routes?.[0];
            if (route) {
              const distanceKm = Math.round((route.distanceMeters || 0) / 1000);
              let durationMinutes = 0;
              if (typeof route.duration === 'string' && route.duration.endsWith('s')) {
                durationMinutes = Math.round(parseInt(route.duration.slice(0, -1), 10) / 60);
              }

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

              return res.json({
                source: 'google_maps_routes',
                distanceKm,
                durationMinutes,
                tollEstimate,
                highway: route.description || 'Google Maps Routes',
              });
            }
          }
        } catch (e) {
          console.warn('[Route API] Google Routes call failed, falling back to local matrix:', e);
        }
      }

      // Return fallback signal so client uses verified Brazilian highway matrix
      return res.json({
        source: 'highway_matrix',
        status: 'fallback_to_matrix',
      });
    } catch (err: any) {
      console.error('[Route API] Error:', err);
      return res.status(500).json({ error: err?.message || 'Erro no cálculo da rota.' });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'Embarque Editorial API',
      timestamp: new Date().toISOString(),
      hasBrevoKey: !!process.env.BREVO_API_KEY,
      sanityProjectId: process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || null,
      sanityDataset: process.env.VITE_SANITY_DATASET || process.env.SANITY_DATASET || null,
    });
  });

  // Mount Vite middlewares in development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Embarque] Dev server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start Embarque server:', err);
  process.exit(1);
});

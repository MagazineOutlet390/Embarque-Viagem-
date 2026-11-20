/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Cloudflare Pages Function: /api/newsletter
 * Secure Brevo Contacts API Integration
 */

export async function onRequestPost(context: any) {
  try {
    const { request, env } = context;
    const body = await request.json();

    const { name, email, language = 'pt', source = 'website', consentGiven = true } = body;

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ success: false, message: 'Endereço de e-mail inválido.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = env.BREVO_API_KEY || (process as any).env?.BREVO_API_KEY;

    if (!apiKey) {
      console.warn('[Brevo] BREVO_API_KEY is not defined. Simulating development success response.');
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Inscrição simulada com sucesso (modo de desenvolvimento).',
          devNotice: 'Configure BREVO_API_KEY nas variáveis de ambiente do Cloudflare Pages.',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Call official Brevo Contacts v3 API
    const brevoPayload = {
      email,
      attributes: {
        NOME: name || '',
        LANGUAGE: language,
        SOURCE: source,
        CONSENT_LGPD: consentGiven ? 'true' : 'false',
        SIGNUP_DATE: new Date().toISOString(),
      },
      updateEnabled: true,
    };

    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(brevoPayload),
    });

    if (brevoRes.ok || brevoRes.status === 201 || brevoRes.status === 204) {
      return new Response(
        JSON.stringify({ success: true, message: 'Inscrição realizada com sucesso!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const errorData: any = await brevoRes.json().catch(() => ({}));

    // Handle existing contact gracefully
    if (errorData.code === 'duplicate_parameter') {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Seu e-mail já estava registrado em nossa lista editorial. Preferências atualizadas!',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: errorData.message || 'Erro ao registrar contato no Brevo.',
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, message: error?.message || 'Erro interno do servidor.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

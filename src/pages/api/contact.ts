import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const subject = data.get('subject')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    // 1. Validación simple de campos obligatorios
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Todos los campos son obligatorios.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'El formato del correo electrónico no es válido.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Obtener API key de Resend
    const resendApiKey = import.meta.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('[API Contacto] Error: La variable RESEND_API_KEY no está configurada.');
      return new Response(
        JSON.stringify({ error: 'Error de configuración en el servidor.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 4. Enviar el correo electrónico mediante Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Contacto Portafolio <onboarding@resend.dev>',
        to: 'your_email@example.com', // Correo destino del propietario
        reply_to: email, // Permite responder directamente al remitente desde la bandeja de entrada
        subject: `[Portafolio] ${subject}`,
        html: `
          <div style="background-color: #0f0a0d; padding: 40px 20px; font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #f5f2f4; border-radius: 8px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #1e161c; border: 1px solid #332730; border-top: 4px solid #f43f5e; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
              
              <!-- Header -->
              <div style="padding: 30px 30px 20px 30px; border-bottom: 1px solid #332730;">
                <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: bold; color: #fb7185; text-transform: uppercase; letter-spacing: 2px;">
                  Nuevo Mensaje de Contacto
                </span>
                <h2 style="margin: 10px 0 0 0; font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 800; color: #ffffff; line-height: 1.3;">
                  ¿Hablamos de tu próximo proyecto?
                </h2>
              </div>
              
              <!-- Body Content -->
              <div style="padding: 30px;">
                
                <!-- Info Table -->
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                  <tr>
                    <td style="padding: 8px 0; width: 30%; vertical-align: top;">
                      <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: bold; color: #baaab5; text-transform: uppercase; letter-spacing: 1px;">Nombre</span>
                    </td>
                    <td style="padding: 8px 0; vertical-align: top; color: #ffffff; font-size: 15px; font-weight: 600;">
                      ${name}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; vertical-align: top;">
                      <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: bold; color: #baaab5; text-transform: uppercase; letter-spacing: 1px;">Email</span>
                    </td>
                    <td style="padding: 8px 0; vertical-align: top; font-size: 15px;">
                      <a href="mailto:${email}" style="color: #f43f5e; text-decoration: none; font-weight: 500;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; vertical-align: top;">
                      <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: bold; color: #baaab5; text-transform: uppercase; letter-spacing: 1px;">Asunto</span>
                    </td>
                    <td style="padding: 8px 0; vertical-align: top; color: #ffffff; font-size: 15px;">
                      ${subject}
                    </td>
                  </tr>
                </table>
                
                <!-- Message Box -->
                <div style="background-color: #0f0a0d; border: 1px solid #332730; border-left: 4px solid #f43f5e; border-radius: 8px; padding: 20px;">
                  <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: bold; color: #baaab5; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 10px;">Mensaje</span>
                  <div style="color: #f5f2f4; font-size: 14px; line-height: 1.6; white-space: pre-wrap; font-family: 'Inter', sans-serif;">${message}</div>
                </div>
                
              </div>
              
              <!-- Footer -->
              <div style="background-color: #0f0a0d; padding: 20px 30px; text-align: center; border-top: 1px solid #332730;">
                <p style="margin: 0; font-size: 12px; color: #7b6775; font-family: 'Inter', sans-serif; line-height: 1.5;">
                  Este correo fue enviado automáticamente desde el formulario de contacto de tu portafolio <strong style="color: #baaab5;">Cris.dev</strong>.
                </p>
              </div>
              
            </div>
          </div>
        `,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('[API Contacto] Error de Resend:', responseData);
      return new Response(
        JSON.stringify({ error: 'No se pudo enviar el mensaje a través de Resend.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: '¡Mensaje enviado con éxito!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('[API Contacto] Error inesperado:', error);
    return new Response(
      JSON.stringify({ error: 'Ocurrió un error inesperado al enviar el mensaje.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

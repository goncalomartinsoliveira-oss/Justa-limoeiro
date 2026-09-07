export const config = {
  runtime: 'edge',
};

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  message?: string;
  website?: string; // honeypot field, should stay empty
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  let data: ContactPayload;
  try {
    data = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field in.
  if (data.website) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  const { name, email, phone, checkIn, checkOut, guests, message } = data;

  if (!name || !email) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';

  if (!apiKey || !toEmail) {
    return new Response(JSON.stringify({ error: 'Contact form is not configured yet' }), {
      status: 500,
    });
  }

  const html = `
    <h2>Novo pedido de reserva &mdash; P&aacute;tio Justa Limoeiro</h2>
    <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(phone || '-')}</p>
    <p><strong>Check-in:</strong> ${escapeHtml(checkIn || '-')}</p>
    <p><strong>Check-out:</strong> ${escapeHtml(checkOut || '-')}</p>
    <p><strong>N&uacute;mero de h&oacute;spedes:</strong> ${escapeHtml(guests || '-')}</p>
    <p><strong>Mensagem:</strong><br />${escapeHtml(message || '-').replace(/\n/g, '<br />')}</p>
  `;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Pátio Justa Limoeiro <${fromEmail}>`,
      to: [toEmail],
      reply_to: email,
      subject: `Novo pedido de reserva de ${name}`,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const detail = await resendResponse.text();
    return new Response(JSON.stringify({ error: 'Failed to send email', detail }), {
      status: 502,
    });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}

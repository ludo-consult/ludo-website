import { Resend } from 'resend'

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { nome, email, telefone, mensagem } = await request.json()

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || 'LUDO Site <onboarding@resend.dev>',
      to: 'contato.ludoconsultoria@gmail.com',
      subject: `Novo contato via site - ${nome}`,
      html: `
        <h2>Novo contato via site LUDO</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:700">Nome</td><td style="padding:8px;border:1px solid #ddd">${nome}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:700">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:700">Telefone</td><td style="padding:8px;border:1px solid #ddd">${telefone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:700">Mensagem</td><td style="padding:8px;border:1px solid #ddd">${mensagem}</td></tr>
        </table>
      `,
    })

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ data })
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}

import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "dmpatel2702@gmail.com",
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; background: #0a0a0f; color: #fff; padding: 32px; border-radius: 12px; border: 1px solid #1e293b;">
          <h2 style="color: #06b6d4; margin-top: 0;">New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; width: 80px;">Name</td>
              <td style="padding: 8px 0; color: #f1f5f9; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #1e293b; margin: 20px 0;" />
          <p style="color: #94a3b8; font-size: 13px; margin-bottom: 8px;">Message</p>
          <p style="color: #f1f5f9; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid #1e293b; margin: 20px 0;" />
          <p style="color: #475569; font-size: 12px; margin: 0;">Sent from your portfolio contact form · Reply directly to this email to respond to ${name}</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const {
      name,
      email,
      company,
      service,
      message,
    } = await req.json();

<<<<<<< HEAD
    const data = await resend.emails.send({
      from: "Annotexia <contact@annotexia.com>",
      to: ["contact@annotexia.com"],
=======
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log(process.env.EMAIL_USER," ",process.env.EMAIL_PASS)
    // 🔥 IMPORTANT: VERIFY CONNECTION FIRST
    await transporter.verify();

    await transporter.sendMail({
      from: `"Annotexia" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
>>>>>>> 0d2a76f751b70619a5ab16a9aab3cd8ed2ded496
      replyTo: email,
      subject: `[Annotexia] New ${service} Inquiry`,
      html: `
        <h2>New Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Company:</strong> ${company}</p>

        <p><strong>Service:</strong> ${service}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
      data,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

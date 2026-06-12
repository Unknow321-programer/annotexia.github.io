import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, company, service, message } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔥 IMPORTANT: VERIFY CONNECTION FIRST
    await transporter.verify();

    await transporter.sendMail({
      from: `"Annotexia" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form - ${service}`,
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log("EMAIL ERROR:", error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
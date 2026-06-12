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

    const data = await resend.emails.send({
      from: "Annotexia <contact@annotexia.com>",
      to: ["contact@annotexia.com"],
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

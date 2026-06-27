import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const address = formData.get("address");
    const resume = formData.get("resume");

    if (!resume) {
      return Response.json(
        {
          success: false,
          error: "Resume is required.",
        },
        {
          status: 400,
        }
      );
    }

    const bytes = await resume.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const data = await resend.emails.send({
      from: "Annotexia Careers <contact@annotexia.com>",
      to: ["contact@annotexia.com"],
      subject: `New Job Application - ${firstName} ${lastName}`,

      html: `
        <h2>New Career Application</h2>

        <p><strong>First Name:</strong> ${firstName}</p>

        <p><strong>Last Name:</strong> ${lastName}</p>

        <p><strong>Current Address:</strong></p>

        <p>${address}</p>
      `,

      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
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
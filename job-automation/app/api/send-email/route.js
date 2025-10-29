import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { subject, message } = await req.json();

    const msg = {
      to: process.env.RECEIVER_EMAIL,
      from: process.env.SENDER_EMAIL,
      subject: subject,
      text: message,
    };

    await sgMail.send(msg);

    return new Response(JSON.stringify({ success: true, message: "✅ Email sent!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("SendGrid Error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}

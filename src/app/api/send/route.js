import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables

const resend = new Resend("re_LAQEV6Xb_82C9cisqcnoFXEqzWjPfXDCG");
       
export const POST = async (req) => {
  try {
    const body = await req.json(); // Parse the incoming JSON request
    const { to, subject, text } = body;
    console.log("body data",to, subject, text)
    if (!to || !subject || !text) {
      return new Response(
        JSON.stringify({ success: false, message: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Send the email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Simran  <delivered@resend.dev>',
      to,
      subject,
      text,
    });
   console.log("email response....",emailResponse)
    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
};

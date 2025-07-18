import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/* ----------  CORS Setup  ---------- */
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Change to your domain in production
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

/* ----------  OPTIONS handler for preflight  ---------- */
export function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

/* ----------  POST handler  ---------- */
export async function POST(request) {
  const formData = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const adminEmails = [process.env.ADMIN_EMAIL_1, process.env.ADMIN_EMAIL_2].filter(Boolean);
    if (adminEmails.length === 0) {
      throw new Error('No admin emails configured');
    }

    const formattedDate = formData.date
      ? new Date(formData.date).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'Not specified';

    const mailOptions = {
      from: `"Spa Booking System" <${process.env.EMAIL_USER}>`,
      to: adminEmails.join(', '),
      subject: `New Booking: ${formData.service} - ${formattedDate}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="background-color: #f8f1e9; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; color: #5d4037;">New Appointment Booking</h1>
          </div>

          <div style="padding: 30px; background-color: #ffffff; border-left: 1px solid #eee; border-right: 1px solid #eee;">
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #a1887f;">
              <h2 style="margin-top: 0;">${formData.service}</h2>
              <p style="margin-bottom: 0;"><strong>When:</strong> ${formattedDate} at ${formData.month}:${formData.day}</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h3 style="color: #5d4037; border-bottom: 1px solid #eee; padding-bottom: 8px;">Client Details</h3>
              <div style="display: flex; margin-bottom: 10px;">
                <div style="font-weight: bold; color: #5d4037; width: 120px;">Name:</div>
                <div>${formData.name}</div>
              </div>
              <div style="display: flex; margin-bottom: 10px;">
                <div style="font-weight: bold; color: #5d4037; width: 120px;">Phone:</div>
                <div>${formData.phone}</div>
              </div>
              <div style="display: flex; margin-bottom: 10px;">
                <div style="font-weight: bold; color: #5d4037; width: 120px;">Email:</div>
                <div>${formData.email}</div>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${formData.email}?subject=Confirmation: ${formData.service} Appointment" 
                 style="display: inline-block; padding: 12px 24px; background-color: #8d6e63; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">
                Confirm Appointment
              </a>
            </div>
          </div>

          <div style="padding: 20px; text-align: center; background-color: #f8f1e9; border-radius: 0 0 8px 8px; font-size: 14px; color: #777;">
            <p>This booking was received through your website booking system.</p>
            <p>© ${new Date().getFullYear()} Your Spa Name. All rights reserved.</p>
          </div>
        </div>
      `,
      text: `New Appointment Booking\n\nService: ${formData.service}\nDate: ${formattedDate}\nTime: ${formData.month}:${formData.day}\n\nClient Details:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nPlease contact the client to confirm the appointment.`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500, headers: corsHeaders });
  }
}

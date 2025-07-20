// app/api/book-appointment/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    const adminEmails = [
      process.env.ADMIN_EMAIL_1,
      process.env.ADMIN_EMAIL_2
    ].filter(Boolean);

    if (adminEmails.length === 0) {
      throw new Error('No admin emails configured');
    }

    const formattedDate = formData.date ? new Date(formData.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : 'Not specified';

    const mailOptions = {
      from: `"Spa Booking System" <${process.env.EMAIL_USER}>`,
      to: adminEmails.join(', '),
      subject: `New Booking: ${formData.service} - ${formattedDate}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .header {
                    background-color: #f8f1e9;
                    padding: 30px;
                    text-align: center;
                    border-radius: 8px 8px 0 0;
                }
                .header h1 {
                    color: #5d4037;
                    margin: 0;
                }
                .content {
                    padding: 30px;
                    background-color: #fff;
                    border-left: 1px solid #eee;
                    border-right: 1px solid #eee;
                }
                .details {
                    margin-bottom: 25px;
                }
                .detail-row {
                    display: flex;
                    margin-bottom: 10px;
                }
                .detail-label {
                    font-weight: bold;
                    color: #5d4037;
                    width: 120px;
                }
                .footer {
                    padding: 20px;
                    text-align: center;
                    background-color: #f8f1e9;
                    border-radius: 0 0 8px 8px;
                    font-size: 14px;
                    color: #777;
                }
                .service-highlight {
                    background-color: #f5f5f5;
                    padding: 15px;
                    border-radius: 6px;
                    margin: 20px 0;
                    border-left: 4px solid #a1887f;
                }
                .action-button {
                    display: inline-block;
                    padding: 12px 24px;
                    background-color: #8d6e63;
                    color: white !important;
                    text-decoration: none;
                    border-radius: 4px;
                    font-weight: bold;
                    margin-top: 15px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>New Appointment Booking</h1>
            </div>
            
            <div class="content">
                <div class="service-highlight">
                    <h2 style="margin-top: 0;">${formData.service}</h2>
                    <p style="margin-bottom: 0;">
                        <strong>When:</strong> ${formattedDate} at ${formData.month}:${formData.day}
                    </p>
                </div>
                
                <div class="details">
                    <h3 style="color: #5d4037; border-bottom: 1px solid #eee; padding-bottom: 8px;">Client Details</h3>
                    
                    <div class="detail-row">
                        <div class="detail-label">Name:</div>
                        <div>${formData.name}</div>
                    </div>
                    
                    <div class="detail-row">
                        <div class="detail-label">Phone:</div>
                        <div>${formData.phone}</div>
                    </div>
                    
                    <div class="detail-row">
                        <div class="detail-label">Email:</div>
                        <div>${formData.email}</div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <a href="mailto:${formData.email}?subject=Confirmation: ${formData.service} Appointment" class="action-button">
                        Confirm Appointment
                    </a>
                </div>
            </div>
            
            <div class="footer">
                <p>This booking was received through your website booking system.</p>
                <p>© ${new Date().getFullYear()} Your Spa Name. All rights reserved.</p>
            </div>
        </body>
        </html>
      `,
      text: `New Appointment Booking\n\n
Service: ${formData.service}\n
Date: ${formattedDate}\n
Time: ${formData.month}:${formData.day}\n\n
Client Details:\n
Name: ${formData.name}\n
Phone: ${formData.phone}\n
Email: ${formData.email}\n\n
Please contact the client to confirm the appointment.`
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
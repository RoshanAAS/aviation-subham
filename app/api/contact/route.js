import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const contactData = await request.json();

    // Create transporter (using Gmail)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      }
    });

    // Create email content
    const emailContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px 25px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
          
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="margin: 0; color: #0d9488; font-size: 26px;">📧 New Contact Message</h1>
            <p style="color: #6b7280; margin: 8px 0 0;">Axios Aviation Services</p>
          </div>

          <!-- Message Alert -->
          <div style="background-color: #0d9488; color: white; padding: 15px; border-radius: 8px; margin-bottom: 25px; text-align: center;">
            <h2 style="margin: 0; font-size: 18px;">🔔 Someone wants to connect with you!</h2>
          </div>

          <!-- Contact Information -->
          <div style="margin-bottom: 25px;">
            <h3 style="color: #374151; font-size: 18px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">
              👤 Contact Details
            </h3>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">
              <p style="margin: 8px 0; color: #374151;"><strong>Name:</strong> ${contactData.name}</p>
              <p style="margin: 8px 0; color: #374151;"><strong>Email:</strong> <a href="mailto:${contactData.email}" style="color: #0d9488; text-decoration: none;">${contactData.email}</a></p>
              <p style="margin: 8px 0; color: #374151;"><strong>Subject:</strong> ${contactData.subject}</p>
            </div>
          </div>

          <!-- Message Content -->
          <div style="margin-bottom: 25px;">
            <h3 style="color: #374151; font-size: 18px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">
              💬 Message
            </h3>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #0d9488;">
              <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 16px;">${contactData.message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>

          <!-- Action Required -->
          <div style="background-color: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 8px; margin-bottom: 25px;">
            <h4 style="color: #92400e; margin: 0 0 8px 0; font-size: 16px;">⚡ Action Required</h4>
            <p style="color: #92400e; margin: 0; font-size: 14px;">
              Please respond to this inquiry within 2 hours for optimal customer experience.
            </p>
          </div>

          <!-- Quick Actions -->
          <div style="margin-bottom: 25px;">
            <h3 style="color: #374151; font-size: 18px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">
              🚀 Quick Actions
            </h3>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <a href="mailto:${contactData.email}?subject=Re: ${encodeURIComponent(contactData.subject)}" 
                 style="background-color: #0d9488; color: white; padding: 10px 15px; text-decoration: none; border-radius: 6px; font-size: 14px; display: inline-block;">
                📧 Reply via Email
              </a>
              <a href="tel:+919717229612" 
                 style="background-color: #059669; color: white; padding: 10px 15px; text-decoration: none; border-radius: 6px; font-size: 14px; display: inline-block;">
                📞 Call Customer
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; text-align: center; font-size: 13px; color: #6b7280;">
            <p style="margin: 0;">📅 Message received on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
            <p style="margin: 8px 0 0 0; color: #0d9488; font-weight: bold;">
              Axios Aviation Services - Connecting Your Business to the Sky ✈️
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sanjaysingh@axiosaviation.com',
      subject: `New Contact Message: ${contactData.subject} - From ${contactData.name}`,
      html: emailContent,
      replyTo: contactData.email
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Contact email error:', error);
    return Response.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
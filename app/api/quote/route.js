import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const quoteData = await request.json();

    // Create transporter (using Gmail as example)
    const transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
     port: 465, // or 587
     secure: true, // true for 465, false for 587
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS // Use App Password for Gmail
      }
    });

    // Create email content
    const emailContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px 20px; background-color: #f9fafb;">
      <div style="background-color: white; padding: 30px 25px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
  
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="margin: 0; color: #1e40af; font-size: 26px;">✈️ Quote Request Received</h1>
          <p style="color: #6b7280; margin: 8px 0 0;">Axios Aviation Services</p>
        </div>
  
        <!-- Info Block -->
        <div style="margin-bottom: 20px;">
          <p style="margin: 6px 0;"><strong>Name:</strong> ${quoteData.fullName}</p>
          <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${quoteData.email}" style="color: #1e40af;">${quoteData.email}</a></p>
          <p style="margin: 6px 0;"><strong>Phone:</strong> <a href="tel:${quoteData.phone}" style="color: #1e40af;">${quoteData.phone}</a></p>
          ${quoteData.company ? `<p style="margin: 6px 0;"><strong>Company:</strong> ${quoteData.company}</p>` : ''}
        </div>
  
        <!-- Route -->
        <div style="margin-bottom: 20px;">
          <p style="margin: 6px 0;"><strong>Route:</strong> ${quoteData.origin} ➜ ${quoteData.destination}</p>
        </div>
  
        <!-- Cargo Summary -->
        <div style="margin-bottom: 20px;">
          <p style="margin: 6px 0;"><strong>Service:</strong> ${getServiceName(quoteData.serviceType)}</p>
          <p style="margin: 6px 0;"><strong>Cargo:</strong> ${quoteData.cargoType} • ${quoteData.weight} ${quoteData.weightUnit}</p>
          ${quoteData.dimensions?.length ? `<p style="margin: 6px 0;"><strong>Size:</strong> ${quoteData.dimensions.length}×${quoteData.dimensions.width}×${quoteData.dimensions.height} ${quoteData.dimensionUnit}</p>` : ''}
          ${quoteData.urgency ? `<p style="margin: 6px 0;"><strong>Urgency:</strong> <span style="color: ${getUrgencyColor(quoteData.urgency)};">${getUrgencyName(quoteData.urgency)}</span></p>` : ''}
        </div>
  
        <!-- Notes -->
        ${quoteData.additionalNotes ? `
          <div style="margin-bottom: 20px;">
            <p style="margin: 6px 0;"><strong>Notes:</strong> ${quoteData.additionalNotes}</p>
          </div>
        ` : ''}
  
        <!-- Footer -->
        <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; text-align: center; font-size: 13px; color: #6b7280;">
          Sent: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  `;
  

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sanjaysingh@axiosaviation.com',
      subject: `New Quote Request from ${quoteData.fullName} - ${quoteData.origin} to ${quoteData.destination}`,
      html: emailContent,
      replyTo: quoteData.email
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ 
      success: true, 
      message: 'Quote request sent successfully!' 
    });

  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { success: false, message: 'Failed to send quote request' },
      { status: 500 }
    );
  }
}

// Helper functions
function getServiceName(serviceId) {
  const services = {
    'air-cargo': '📦 Air Cargo Transport',
    'aircraft-charter': '✈️ Aircraft Chartering',
    'defense-logistics': '🛡️ Defense Logistics',
    'cold-chain': '❄️ Cold Chain Logistics',
    'oversized-cargo': '📏 Over-dimensional Cargo',
    'time-critical': '⏰ Time-Critical Delivery'
  };
  return services[serviceId] || serviceId;
}

function getUrgencyName(urgencyId) {
  const urgencies = {
    'standard': 'Standard (5-7 days)',
    'priority': 'Priority (2-4 days)',
    'urgent': 'Urgent (24-48 hours)',
    'emergency': 'Emergency (Same day)'
  };
  return urgencies[urgencyId] || urgencyId;
}

function getUrgencyColor(urgencyId) {
  const colors = {
    'standard': '#059669',
    'priority': '#d97706',
    'urgent': '#ea580c',
    'emergency': '#dc2626'
  };
  return colors[urgencyId] || '#374151';
}
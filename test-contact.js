/**
 * Test Contact Form Email Functionality
 * Run this with: node test-contact.js
 * Make sure your development server is running!
 */

const testContactData = {
  name: "Sarah Johnson",
  email: "sarah.johnson@techcorp.com",
  subject: "Inquiry about Cold Chain Logistics for Pharmaceutical Products",
  message: `Hello Axios Aviation team,

I hope this message finds you well. I am reaching out on behalf of TechCorp Pharmaceuticals regarding our urgent need for reliable cold chain logistics services.

We are looking for:
- Temperature-controlled air cargo (2-8°C) for vaccine shipments
- Route: Mumbai to New York JFK
- Weekly shipments of approximately 200kg
- Real-time temperature monitoring
- Full compliance with pharmaceutical regulations

Our products are extremely temperature-sensitive and require the highest level of care during transport. We have heard excellent things about your cold chain capabilities and would love to discuss a potential partnership.

Could we schedule a call this week to discuss our requirements in detail? Our preferred times are Tuesday or Wednesday afternoon.

Thank you for your time, and I look forward to your response.

Best regards,
Sarah Johnson
Supply Chain Manager
TechCorp Pharmaceuticals
sarah.johnson@techcorp.com
+1-555-0123`
};

async function testContactAPI() {
  try {
    console.log('🧪 Testing Contact Form Email API...\n');
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testContactData),
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ SUCCESS! Contact email sent successfully!');
      console.log('📧 Check your email at: roshan555routh@gmail.com');
      console.log('\n📋 Test message sent:');
      console.log('━'.repeat(50));
      console.log(`👤 Name: ${testContactData.name}`);
      console.log(`📧 Email: ${testContactData.email}`);
      console.log(`📝 Subject: ${testContactData.subject}`);
      console.log(`💬 Message: ${testContactData.message.substring(0, 100)}...`);
      console.log('━'.repeat(50));
      console.log('\n🎯 What to expect in your email:');
      console.log('• Professional header with Axios Aviation branding');
      console.log('• Contact details with clickable email/phone links');
      console.log('• Full message content formatted nicely');
      console.log('• Quick action buttons for easy response');
      console.log('• Timestamp of when message was received');
    } else {
      console.log('❌ FAILED:', result.message);
    }

  } catch (error) {
    console.log('❌ ERROR:', error.message);
    console.log('\n🔧 Make sure:');
    console.log('1. Your development server is running (npm run dev)');
    console.log('2. Your .env.local file is properly configured');
    console.log('3. Your Gmail App Password is correct');
    console.log('4. The /api/contact route is accessible');
  }
}

console.log('🛩️ Axios Aviation - Contact Form Email Test\n');
testContactAPI();
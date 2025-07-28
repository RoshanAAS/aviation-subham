/**
 * Test Email Functionality
 * Run this with: node test-email.js
 * Make sure to set up your .env.local file first!
 */

const testQuoteData = {
  fullName: "John Smith",
  email: "john.smith@example.com",
  phone: "+91 9876543210",
  company: "Global Import Export Ltd.",
  serviceType: "air-cargo",
  cargoType: "Electronics",
  weight: "500",
  weightUnit: "kg",
  dimensions: {
    length: "120",
    width: "80",
    height: "60"
  },
  dimensionUnit: "cm",
  origin: "Mumbai, India",
  destination: "Dubai, UAE",
  urgency: "priority",
  specialRequirements: ["Temperature Controlled", "Insurance Coverage", "Real-time Tracking"],
  additionalNotes: "Handle with extreme care - sensitive electronic equipment for aerospace industry."
};

async function testEmailAPI() {
  try {
    console.log('🧪 Testing Quote Email API...\n');
    
    const response = await fetch('http://localhost:3000/api/quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testQuoteData),
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ SUCCESS! Email sent successfully!');
      console.log('📧 Check your email at: roshan555routh@gmail.com');
      console.log('\n📋 Test data sent:');
      console.log(JSON.stringify(testQuoteData, null, 2));
    } else {
      console.log('❌ FAILED:', result.message);
    }

  } catch (error) {
    console.log('❌ ERROR:', error.message);
    console.log('\n🔧 Make sure:');
    console.log('1. Your development server is running (npm run dev)');
    console.log('2. Your .env.local file is properly configured');
    console.log('3. Your Gmail App Password is correct');
  }
}

testEmailAPI();
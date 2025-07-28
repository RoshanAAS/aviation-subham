# 📧 Email Setup Instructions for Quote Requests & Contact Messages

## 🎯 **What This Does**
Your aviation logistics website now has TWO professional email systems:

1. **Quote Requests** → Sends detailed quote information to `roshan555routh@gmail.com`
2. **Contact Messages** → Sends customer inquiries and messages to `roshan555routh@gmail.com`

Both systems use the same Gmail configuration and provide professional, branded email notifications.

## 🛠️ **Setup Steps**

### **1. Gmail App Password Setup**
Since we're using Gmail for sending emails, you need to create an App Password:

1. **Enable 2-Factor Authentication** on your Gmail account:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Turn on 2-Step Verification if not already enabled

2. **Generate App Password**:
   - Still in Security settings, scroll to "2-Step Verification"
   - Click on "App passwords"
   - Select "Mail" as the app
   - Copy the generated 16-character password

### **2. Update Environment Variables**
Edit the `.env.local` file with your credentials:

```env
# Replace with your actual Gmail credentials
EMAIL_USER=roshan555routh@gmail.com
EMAIL_PASS=your-16-character-app-password-here
```

**⚠️ Important Notes:**
- Use your **App Password**, NOT your regular Gmail password
- Keep the `.env.local` file secure and never commit it to Git
- The `.env.local` file is already in `.gitignore`

### **3. Alternative Email Services**
If you prefer using other email services, update the transporter in `/app/api/quote/route.js`:

#### **For Outlook/Hotmail:**
```javascript
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

#### **For Custom SMTP:**
```javascript
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

## 📋 **Email Features**

### **1. Quote Request Emails**
When someone submits a quote request, you'll get an email with:

- ✅ **Professional HTML Template** with your aviation branding
- ✅ **Complete Contact Information** (name, email, phone, company)
- ✅ **Service Type** with icons
- ✅ **Route Details** (origin → destination)
- ✅ **Cargo Information** (type, weight, dimensions, urgency)
- ✅ **Special Requirements** (if any)
- ✅ **Additional Notes** (if provided)
- ✅ **Timestamp** of submission
- ✅ **Reply-To** set to customer's email for easy response

**Subject Line Format:**
`🛩️ New Quote Request from [Customer Name] - [Origin] to [Destination]`

Example: `🛩️ New Quote Request from John Smith - Mumbai to Dubai`

### **2. Contact Form Emails**
When someone sends a message through the contact form, you'll get an email with:

- ✅ **Professional HTML Template** with aviation branding
- ✅ **Contact Details** (name, email with clickable links)
- ✅ **Message Subject** clearly displayed
- ✅ **Full Message Content** with proper formatting
- ✅ **Action Required Alert** for quick response reminder
- ✅ **Quick Action Buttons** (Reply via Email, Call Customer)
- ✅ **Timestamp** of message submission
- ✅ **Reply-To** set to customer's email

**Subject Line Format:**
`🔔 New Contact Message: [Subject] - From [Customer Name]`

Example: `🔔 New Contact Message: Inquiry about Cold Chain Services - From Sarah Johnson`

## 🚀 **Testing the System**

### **Manual Testing**

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Test Quote Request System:**
   - Click "Request a Quote" on your website
   - Fill out the multi-step quote form
   - Submit and check your email at `roshan555routh@gmail.com`

3. **Test Contact Form System:**
   - Scroll to the "Contact Us" section
   - Fill out the "Send Us a Message" form
   - Submit and check your email at `roshan555routh@gmail.com`

### **Automated Testing**

**Test Quote System:**
```bash
node test-email.js
```

**Test Contact System:**
```bash
node test-contact.js
```

Both test scripts will send sample data to your API routes and verify email delivery.

## 🛡️ **Security Best Practices**

- ✅ Environment variables are used for sensitive data
- ✅ Email validation is performed on the frontend
- ✅ API route has proper error handling
- ✅ No sensitive information is logged
- ✅ Reply-to is set to customer's email for direct communication

## 📞 **Customer Experience**

### **Quote Request Experience**
When customers submit a quote request, they will see:
- 👋 **Welcome toast**: "Welcome! Let's get you a custom quote 🛩️"
- ✅ **Step validation**: "Step 2 completed! ✓"
- 🔄 **Loading state**: "Sending your quote request to our logistics team..."
- ✅ **Success message**: "Quote request sent successfully! We'll contact you within 2 hours..."
- ❌ **Error handling**: Clear instructions if something goes wrong

### **Contact Form Experience**
When customers send a message, they will see:
- ✍️ **Required field indicators**: Red asterisks (*) for mandatory fields
- ✅ **Real-time validation**: Email format checking
- 🔄 **Loading state**: "Sending your message to our team..."
- ✅ **Success message**: "Message sent successfully! We'll respond within 2 hours..."
- ❌ **Error handling**: Contact phone number provided as fallback

## 🎨 **Customization**

You can customize email templates in both API routes:

### **Quote Request Emails** (`/app/api/quote/route.js`):
- Change colors by modifying the style attributes
- Add your company logo
- Modify the email structure
- Add additional quote fields

### **Contact Form Emails** (`/app/api/contact/route.js`):
- Customize the professional layout
- Modify quick action buttons
- Add additional contact fields
- Change email styling and branding

## 🆘 **Troubleshooting**

### **Common Issues:**

1. **"Authentication Failed" Error**
   - Ensure 2-factor authentication is enabled
   - Use App Password, not regular password
   - Double-check EMAIL_USER and EMAIL_PASS in .env.local

2. **Emails Not Arriving**
   - Check your spam/junk folder
   - Verify the recipient email is correct
   - Check server logs for error messages

3. **"Connection Refused" Error**
   - Check your internet connection
   - Verify Gmail SMTP is not blocked by your network
   - Try using port 465 instead of 587

### **API Route Specific Issues:**

1. **Quote API not working** (`/api/quote`):
   - Check browser console for errors
   - Verify quote form data structure
   - Test with `node test-email.js`

2. **Contact API not working** (`/api/contact`):
   - Check browser console for errors
   - Verify contact form data structure
   - Test with `node test-contact.js`

### **For Production Deployment:**
- Set environment variables in your hosting platform (Vercel, Netlify, etc.)
- Consider using a dedicated email service like SendGrid or Mailgun for better deliverability
- Monitor email delivery rates and setup proper SPF/DKIM records

## ✨ **Success!**
Once setup is complete, your aviation logistics website will have **TWO professional email systems**:

1. 🛩️ **Quote Request System** - Captures detailed business opportunities
2. 📧 **Contact Form System** - Handles general inquiries and customer messages

Both systems automatically notify you at `roshan555routh@gmail.com` with beautifully formatted, professional emails! 🛩️📧
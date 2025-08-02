'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Icon } from './index';
import QuoteDialog from './QuoteDialog';

export default function ContactSection() {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Show loading toast
    const loadingToast = toast.loading('Sending your message to our team...');

    try {
      // Send contact message to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Success notification
        toast.success(
          `🎉 Message sent successfully!\n📧 We'll respond to ${formData.email} within 2 hours\n✈️ Thank you for contacting Axios Aviation Services!`,
          {
            duration: 8000,
            style: {
              minWidth: '350px',
            },
          }
        );

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }

    } catch (error) {
      console.error('Contact submission error:', error);
      
      // Error notification
      toast.error(
        `❌ Failed to send message.\n🔄 Please check your connection and try again.\n📞 Or call us directly at +91-9717229612`,
        {
          duration: 8000,
          style: {
            minWidth: '300px',
          },
        }
      );
    } finally {
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    {
      title: "Registered Office",
      address: "A1/340, Janakpuri, New Delhi – 110058",
      icon: "building"
    },
    {
      title: "Branch Office",
      address: "216, Dwarka City Mall Sector-12, Dwarka, New Delhi – 110078",
      icon: "office"
    },
    {
      title: "Phone Numbers",
      details: [
        "Tel: +91-11-28031549 / 28031550",
        "Fax: +91-11-46678140",
        "Mobile (Director – Mr. Sanjay Singh): +91-9717229612 / 9999026012"
      ],
      icon: "phone"
    },
    {
      title: "Email Addresses",
      details: [
        "General Inquiries: info@axiosaviation.com",
        "Operations: ops@axiosaviation.com",
        "Accounts: accounts@axiosaviation.com",
        "Director: sanjaysingh@axiosaviation.com"
      ],
      icon: "mail"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Contact <span className="text-aviation-teal">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to experience premium air cargo and logistics solutions? Reach out to our team today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-aviation-teal/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={item.icon} className="w-6 h-6 text-aviation-teal" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    {item.address && (
                      <p className="text-gray-300">{item.address}</p>
                    )}
                    {item.details && (
                      <ul className="space-y-2 text-gray-300">
                        {item.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-charcoal mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-aviation-teal transition-colors duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-aviation-teal transition-colors duration-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-aviation-teal transition-colors duration-200"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-aviation-teal transition-colors duration-200"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-aviation-teal hover:bg-aviation-teal/90 hover:scale-[1.02]'
                } text-white flex items-center justify-center space-x-2`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Icon name="send" className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map or CTA */}
        <div className="bg-aviation-teal/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Join the leading organizations who trust Axios Aviation for their critical air cargo and logistics needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setIsQuoteDialogOpen(true)}
              className="bg-aviation-teal text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:text-aviation-teal transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center justify-center space-x-3">
                <span>Request a Quote</span>
                <Icon name="arrow-right" className="w-5 h-5" />
              </span>
            </button>
            <button className="bg-white border-2 border-aviation-teal text-aviation-teal px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-aviation-teal hover:text-white transform hover:scale-105 hover:-translate-y-1">
              <span className="flex items-center justify-center space-x-3">
                <Icon name="phone" className="w-5 h-5" />
                <span>Call Us Now</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Quote Dialog */}
      <QuoteDialog 
        isOpen={isQuoteDialogOpen} 
        onClose={() => setIsQuoteDialogOpen(false)} 
      />
    </section>
  );
}
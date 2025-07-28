'use client';

import { useState } from 'react';
import { Icon } from './index';
import QuoteDialog from './QuoteDialog';

export default function ContactSection() {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);
  
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
        "Mobile (Director – Mr. Sanjay Singh): +91-9717229612 / 9909026012"
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-aviation-teal transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-aviation-teal transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-aviation-teal transition-colors duration-200"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-aviation-teal transition-colors duration-200"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-aviation-teal text-white font-semibold py-4 px-6 rounded-lg hover:bg-aviation-teal/90 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message
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
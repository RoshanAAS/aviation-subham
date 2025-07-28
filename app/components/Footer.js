import Image from 'next/image';

export default function Footer() {
  const footerSections = [
    {
      title: "Our Services",
      links: [
        { name: "Aircraft Chartering", href: "#services" },
        { name: "Over-Dimensional Cargo", href: "#services" },
        { name: "Defense-Grade Freight", href: "#services" },
        { name: "Cold Chain Logistics", href: "#services" }
      ]
    },
    {
      title: "Company", 
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Mission", href: "#about" },
        { name: "Our Vision", href: "#about" },
        { name: "Contact", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-100 text-charcoal py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Axios Aviation Logo" 
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-charcoal">Axios Aviation</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your trusted partner for time-critical air cargo and logistics solutions since 1999. Serving defense, aerospace, industrial, and pharmaceutical sectors with precision and reliability.
            </p>
            <div className="mt-6">
              <p className="text-gray-600 text-sm">
                <strong className="text-aviation-teal">Registered Office:</strong><br />
                A1/340, Janakpuri, New Delhi – 110058
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-6 text-aviation-teal text-lg">{section.title}</h4>
              <ul className="space-y-3 text-gray-600">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="hover:text-aviation-teal transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-aviation-teal text-lg">Contact Us</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aviation-teal mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91-11-28031549 / 28031550</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aviation-teal mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@axiosaviation.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aviation-teal mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>216, Dwarka City Mall Sector-12, Dwarka, New Delhi – 110078</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-bold mb-4 text-aviation-teal text-sm">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-10 h-10 bg-aviation-teal/20 rounded-full flex items-center justify-center hover:bg-aviation-teal hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Axios Aviation Services Pvt. Ltd. All rights reserved. IATA, ISO Compliant.</p>
        </div>
      </div>
    </footer>
  );
}
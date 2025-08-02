'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollProgress from './ScrollProgress';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect and scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Scroll spy functionality
      const sections = [];
      navItems.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
          sections.push({
            id: item.id,
            element: element,
            offsetTop: element.offsetTop,
            offsetHeight: element.offsetHeight
          });
        }
      });

      if (sections.length === 0) return;

      const scrollPosition = window.scrollY + 120; // Offset for navbar height
      let currentSection = sections[0].id; // Default to first section

      // Find the current section based on scroll position
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        // Check if we're in this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
        }
        // Special case for last section
        else if (index === sections.length - 1 && scrollPosition >= sectionTop) {
          currentSection = section.id;
        }
      });

      // Update active item only if it changed
      if (currentSection !== activeItem) {
        setActiveItem(currentSection);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check after a short delay to ensure DOM is ready
    const timer = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [activeItem, navItems]);

  // Simple smooth scroll function
  const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      

      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-teal-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Simple Logo Section */}
            <div className="flex items-center cursor-pointer">
              <div className="relative">
                {/* Simple Logo Container - No Background, Larger Size */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  {/* Actual Logo Image */}
                  <Image 
                    src="/logo.png" 
                    alt="Axios Aviation Logo" 
                    width={80} 
                    height={80}
                    className="w-14 h-14 object-contain"
                    priority
                  />
                </div>
              </div>
              
              {/* Brand Text with Specific Color - Reduced Size */}
              <div className="ml-1">
                <h1 className="text-2xl font-bold text-[#20134c]">
                  <span>Axios</span>
                  <span className="ml-1">Aviation</span>
                </h1>
                <p className="text-[10px] text-[#20134c]">
                  Work as reflection of our values
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.replace('#', ''));
                    setActiveItem(item.id);
                  }}
                  className={`relative px-6 py-3 font-medium transition-all duration-500 group transform hover:scale-105 hover:-translate-y-1 ${
                    activeItem === item.id
                      ? 'text-aviation-teal' 
                      : 'text-aviation-teal hover:text-aviation-teal'
                  }`}
                >
                  {/* Text */}
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active/Hover Underline */}
                  <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-aviation-teal transition-all duration-700 ease-out ${
                    activeItem === item.id 
                      ? 'w-8 shadow-lg' 
                      : 'w-0 group-hover:w-8 group-hover:shadow-lg'
                  }`}></div>
                </a>
              ))}
            </div>



            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:rotate-180 hover:shadow-xl ${
                  scrolled 
                    ? 'bg-teal-50 text-aviation-teal hover:bg-teal-100' 
                    : 'bg-white/20 text-aviation-teal hover:bg-white/30'
                }`}
              >
                {/* Hamburger Animation */}
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}></span>
                  <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}></span>
                  <span className={`block w-6 h-0.5 bg-current mt-1 transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-out ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg border-t border-teal-100 shadow-2xl">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.replace('#', ''));
                    setActiveItem(item.id);
                    setIsOpen(false);
                  }}
                  className={`block px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeItem === item.id
                      ? 'text-white bg-aviation-teal shadow-aviation'
                      : 'text-charcoal hover:text-aviation-teal hover:bg-teal-50'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen ? 'slideInFromRight 0.5s ease-out forwards' : ''
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-teal-100">
                <button className="w-full px-6 py-4 bg-aviation-teal hover:bg-aviation-teal/90 text-white rounded-xl font-semibold shadow-aviation transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get Started Today</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
    </>
  );
}
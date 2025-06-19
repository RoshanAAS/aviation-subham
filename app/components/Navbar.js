'use client';

import { useState, useEffect } from 'react';
import ScrollProgress from './ScrollProgress';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');


  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

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
            
            {/* Logo Section with Animation */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                {/* Floating Glow Effect */}
                <div className="absolute inset-0 bg-aviation-gradient rounded-full opacity-20 animate-pulse blur-md"></div>
                
                {/* Logo Icon */}
                <div className="relative w-12 h-12 bg-aviation-gradient rounded-full flex items-center justify-center shadow-aviation transform transition-all duration-700 hover:rotate-12 hover:scale-110 hover:shadow-2xl">
                  <svg className="w-6 h-6 text-white transform transition-all duration-700 hover:scale-125 hover:rotate-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                  
                  {/* Orbiting Ring */}
                  <div className="absolute inset-0 border-2 border-aviation-teal/30 rounded-full animate-spin opacity-60" style={{animationDuration: '8s'}}></div>
                  
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 border border-white/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Brand Text */}
              <div className="ml-4">
                <h1 className={`text-2xl font-bold transition-all duration-500 transform group-hover:scale-105 ${
                  scrolled ? 'text-charcoal' : 'text-aviation-teal'
                }`}>
                  <span className="inline-block transition-all duration-300 group-hover:translate-x-1">Aviation</span>
                  <span className="text-aviation-teal ml-1 relative inline-block transition-all duration-300 group-hover:-translate-x-1">
                    Pro
                    {/* Animated Underline */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-aviation-teal group-hover:w-full transition-all duration-700 ease-out"></div>
                    {/* Floating Dot */}
                    <div className="absolute -top-1 -right-1 w-1 h-1 bg-aviation-teal rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500"></div>
                  </span>
                </h1>
                <p className={`text-xs transition-all duration-500 transform group-hover:translate-x-2 ${
                  scrolled ? 'text-steel-gray' : 'text-aviation-teal/80'
                }`}>
                  Elevate Your Brand
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
                      ? 'text-white bg-aviation-gradient shadow-aviation'
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
                <button className="w-full px-6 py-4 bg-aviation-gradient text-white rounded-xl font-semibold shadow-aviation transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
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
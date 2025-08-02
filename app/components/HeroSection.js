'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Icon } from './index';
import QuoteDialog from './QuoteDialog';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);

  // Aviation carousel slides with stunning content
  const slides = [
    {
      id: 2,
      title: "Reliable Air Cargo and Logistics Solutions",
      subtitle: "Global Logistics",
      description: "Trusted by defence and industrial clients for fast, secure and compliant deliveries worldwide",
      cta: "Request a Quote",
      ctaSecondary: "Learn More",
      bgImage: "hero-2.jpeg",
      gradient: "from-blue-900/80 via-sky-800/70 to-teal-700/60"
    },
    {
      id: 1,
      title: "Reliable Air Cargo and Logistics Solutions",
      subtitle: "Air Cargo Excellence",
      description: "Trusted by defence, aerospace and industrial clients for fast, secure and compliant deliveries worldwide",
      cta: "Request a Quote",
      ctaSecondary: "Our Services",
      bgImage: "hero-1.jpeg",
      gradient: "from-indigo-900/80 via-blue-800/70 to-cyan-700/60"
    },
    {
      id: 3,
      title: "Reliable Air Cargo and Logistics Solutions",
      subtitle: "Defence & Aerospace",
      description: "Trusted by defence, aerospace and industrial clients for fast, secure and compliant deliveries worldwide",
      cta: "Request a Quote",
      ctaSecondary: "Contact Us",
      bgImage: "hero-3.jpeg",
      gradient: "from-slate-900/80 via-blue-800/70 to-teal-700/60"
    },
    {
      id: 4,
      title: "Reliable Air Cargo and Logistics Solutions",
      subtitle: "Industrial Logistics",
      description: "Trusted by defence, aerospace and industrial clients for fast, secure and compliant deliveries worldwide",
      cta: "Request a Quote",
      ctaSecondary: "Our Network",
      bgImage: "hero-4.jpeg",
      gradient: "from-gray-900/80 via-slate-800/70 to-blue-700/60"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="home" className="relative overflow-hidden h-[90vh]">
      {/* Carousel Container */}
      <div className="relative w-full h-[90vh]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image using Next.js Image for better handling */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={`/${slide.bgImage}`}
                alt={slide.subtitle}
                fill
                priority={index === 0}
                sizes="100vw"
                quality={90}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
            
            {/* Enhanced Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
            
            {/* Premium Brand Logo */}
            {/* <div className="absolute top-8 left-8 z-20">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <Icon name="airplane" className="w-6 h-6 text-aviation-teal" />
                <span className="text-white font-semibold text-sm">Axios Aviation</span>
              </div>
            </div> */}
            
            {/* Content - Centered for better visibility */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Enhanced Main Content with better spacing */}
                <div className="space-y-6 animate-fadeInUp">
                  <div className="mb-4">
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider px-4 py-1.5 bg-white/10 inline-block rounded-md border-2 border-white/70 shadow-md backdrop-blur-sm">
                      {slide.subtitle}
                    </h2>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-normal">
                    {slide.title}
                  </h1>
                  
                  <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed tracking-normal font-medium mt-4 mb-6">
                    {slide.description}
                  </p>
                </div>

                {/* Enhanced CTA Buttons with better spacing */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                  <Button 
                    variant="primary" 
                    onClick={() => setIsQuoteDialogOpen(true)}
                    className="bg-aviation-teal hover:bg-aviation-teal/90 text-white px-10 py-5 text-lg font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <span>{slide.cta}</span>
                    <Icon name="arrow" className="w-5 h-5 ml-3" />
                  </Button>
                  
                  <Button 
                    variant="secondary" 
                    className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
                  >
                    <Icon name="shield" className="w-5 h-5 mr-3" />
                    <span>{slide.ctaSecondary}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={prevSlide}
          className="ml-6 p-4 bg-white/10 backdrop-blur-sm hover:bg-aviation-teal/80 rounded-full text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group border border-white/20"
        >
          <Icon name="chevron-left" className="w-7 h-7 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={nextSlide}
          className="mr-6 p-4 bg-white/10 backdrop-blur-sm hover:bg-aviation-teal/80 rounded-full text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group border border-white/20"
        >
          <Icon name="chevron-right" className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-aviation-teal shadow-lg scale-125 border border-white/50'
                : 'bg-white/40 hover:bg-white/60 hover:scale-110 border border-white/30'
            }`}
          />
        ))}
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-black/30">
        <div 
          className="h-full bg-aviation-teal transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>

      {/* Enhanced Floating Stats */}
      <div className="absolute bottom-16 left-8 hidden lg:flex">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-white shadow-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
          <div className="text-3xl font-bold text-aviation-teal">100+</div>
          <div className="text-sm opacity-90 font-medium mt-1">Global Destinations</div>
        </div>
      </div>

      <div className="absolute bottom-16 right-8 hidden lg:flex">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-white shadow-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
          <div className="text-3xl font-bold text-aviation-teal">25+</div>
          <div className="text-sm opacity-90 font-medium mt-1">Years Experience</div>
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
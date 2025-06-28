'use client';

import { useState, useEffect } from 'react';
import { Button, Icon } from './index';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Aviation carousel slides with stunning content
  const slides = [
    {
      id: 2,
      title: "Pilot Your Future",
      subtitle: "Professional Flight Training",
      description: "Master the art of flight with our world-class training programs. From private pilot to commercial aviation - we'll guide your ascent.",
      cta: "View Programs",
      ctaSecondary: "Book Consultation",
      bgImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      gradient: "from-indigo-900/80 via-blue-800/70 to-cyan-700/60"
    },
    {
      id: 1,
      title: "Soar to New Heights",
      subtitle: "Aviation Excellence Awaits",
      description: "Join the elite world of aviation with cutting-edge training and career opportunities that will take your dreams to the skies.",
      cta: "Start Your Journey",
      ctaSecondary: "Explore Careers",
      bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      gradient: "from-blue-900/80 via-sky-800/70 to-teal-700/60"
    },
    {
      id: 3,
      title: "Aviation Careers",
      subtitle: "Your Sky-High Opportunity",
      description: "Discover exciting career paths in aviation. From pilots to engineers, air traffic controllers to aviation managers - find your calling.",
      cta: "Browse Jobs",
      ctaSecondary: "Career Guide",
      bgImage: "https://images.unsplash.com/photo-1728839470502-59edad620f96?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradient: "from-slate-900/80 via-blue-800/70 to-teal-700/60"
    },
    {
      id: 4,
      title: "Advanced Aviation",
      subtitle: "Next-Gen Technology",
      description: "Experience the future of flight with state-of-the-art simulators, modern aircraft, and innovative training methodologies.",
      cta: "See Technology",
      ctaSecondary: "Schedule Tour",
      bgImage: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
    <section id="home" className="relative overflow-hidden h-[85vh]">
      {/* Carousel Container */}
      <div className="relative w-full h-[85vh]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />
            
            {/* Light Gradient Overlay - Only at bottom for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Premium Brand Logo */}
            {/* <div className="absolute top-8 left-8 z-20">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <Icon name="airplane" className="w-6 h-6 text-aviation-teal" />
                <span className="text-white font-semibold text-sm">Axios Aviation</span>
              </div>
            </div> */}
            
            {/* Content - Positioned at bottom */}
            <div className="relative z-10 flex items-end justify-center h-full pb-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Compact Main Content */}
                <div className="space-y-4 animate-fadeInUp">
                  {/* <h2 className="text-sm md:text-base font-semibold text-aviation-teal uppercase tracking-wider">
                    {slide.subtitle}
                  </h2> */}
                  
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {slide.title}
                  </h1>
                  
                  <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                </div>

                {/* Compact CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                  <Button variant="primary" className="bg-aviation-teal hover:bg-aviation-teal/90 text-white px-6 py-3 text-base font-semibold rounded-full transform hover:scale-105 transition-all duration-300">
                    <span>{slide.cta}</span>
                    <Icon name="arrow" className="w-4 h-4 ml-2" />
                  </Button>
                  
                  <Button variant="secondary" className="bg-aviation-teal hover:bg-aviation-teal/90 text-white px-6 py-3 text-base font-semibold rounded-full transform hover:scale-105 transition-all duration-300">
                    <Icon name="play" className="w-4 h-4 mr-2" />
                    <span>{slide.ctaSecondary}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={prevSlide}
          className="ml-4 p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group"
        >
          <Icon name="chevron-left" className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={nextSlide}
          className="mr-4 p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group"
        >
          <Icon name="chevron-right" className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-aviation-teal shadow-lg scale-125'
                : 'bg-white/50 hover:bg-white/70 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-aviation-teal transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>

      {/* Compact Floating Stats */}
      {/* <div className="absolute bottom-24 left-8 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white shadow-xl">
          <div className="text-2xl font-bold text-aviation-teal">500+</div>
          <div className="text-xs opacity-90">Pilots Trained</div>
        </div>
      </div> */}

      <div className="absolute bottom-24 right-8 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white shadow-xl">
          <div className="text-2xl font-bold text-aviation-teal">15+</div>
          <div className="text-xs opacity-90">Years Experience</div>
        </div>
      </div>
    </section>
  );
}
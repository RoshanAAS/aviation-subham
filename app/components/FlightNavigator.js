'use client';

import { useState, useEffect } from 'react';

export default function FlightNavigator() {
  const [isFlying, setIsFlying] = useState(false);
  const [flightPath, setFlightPath] = useState({ startY: 0, endY: 0, progress: 0 });

  useEffect(() => {
    const handleFlightNavigation = (event) => {
      const { targetId, startPosition } = event.detail;
      
      // Get target section position
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      const targetRect = targetElement.getBoundingClientRect();
      const targetY = window.scrollY + targetRect.top;
      
      // Set flight path
      setFlightPath({
        startY: startPosition,
        endY: targetY,
        progress: 0
      });
      
      setIsFlying(true);
      
      // Optional: Play flight sound (you can add this later)
      // const audio = new Audio('/sounds/flight.mp3');
      // audio.volume = 0.3;
      // audio.play().catch(() => {}); // Ignore if audio fails
      
      // Animate the flight
      let startTime = null;
      const duration = 2000; // 2 seconds flight time
      
      const animateFlight = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth flight
        const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        const easedProgress = easeInOutCubic(progress);
        
        setFlightPath(prev => ({ ...prev, progress: easedProgress }));
        
        // Smooth scroll to target
        const currentY = startPosition + (targetY - startPosition) * easedProgress;
        window.scrollTo({ top: currentY, behavior: 'auto' });
        
        if (progress < 1) {
          requestAnimationFrame(animateFlight);
        } else {
          // Flight completed
          setTimeout(() => {
            setIsFlying(false);
            setFlightPath({ startY: 0, endY: 0, progress: 0 });
          }, 500);
        }
      };
      
      requestAnimationFrame(animateFlight);
    };

    window.addEventListener('flightNavigation', handleFlightNavigation);
    return () => window.removeEventListener('flightNavigation', handleFlightNavigation);
  }, []);

  if (!isFlying) return null;

  const { startY, endY, progress } = flightPath;
  const currentY = startY + (endY - startY) * progress;
  const flightDistance = Math.abs(endY - startY);
  const rotation = endY > startY ? 15 : -15; // Tilt based on direction
  
  // Calculate flight curve (parabolic path)
  const curveHeight = Math.min(flightDistance * 0.3, 200);
  const curveOffset = Math.sin(progress * Math.PI) * curveHeight;

  return (
    <>
      {/* Flight Trail */}
      <div 
        className="fixed left-1/2 pointer-events-none z-50 transition-all duration-100"
        style={{
          top: `${currentY - curveOffset}px`,
          transform: `translateX(-50%) rotate(${rotation}deg)`,
        }}
      >
        {/* Plane Icon */}
        <div className="relative">
          {/* Main Plane */}
          <div className="w-8 h-8 text-aviation-teal animate-bounce">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full drop-shadow-lg">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>
          
          {/* Contrail Effect */}
          <div className="absolute top-1/2 -left-12 w-12 h-0.5 bg-gradient-to-r from-aviation-teal/60 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-r from-white/40 to-transparent animate-pulse" style={{animationDelay: '0.2s'}}></div>
          
          {/* Wing Sparkles */}
          <div className="absolute -top-1 -left-1 w-1 h-1 bg-white rounded-full animate-ping opacity-75"></div>
          <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-aviation-teal rounded-full animate-ping opacity-75" style={{animationDelay: '0.3s'}}></div>
          
          {/* Speed Lines */}
          <div className="absolute top-0 -left-6 w-4 h-0.5 bg-aviation-teal/30 animate-pulse"></div>
          <div className="absolute bottom-0 -left-4 w-3 h-0.5 bg-aviation-teal/20 animate-pulse" style={{animationDelay: '0.1s'}}></div>
        </div>
      </div>

      {/* Flight Path Indicator */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40">
        <div 
          className="absolute left-1/2 w-0.5 bg-gradient-to-b from-aviation-teal/20 via-aviation-teal/10 to-transparent transform -translate-x-1/2"
          style={{
            top: `${Math.min(startY, endY)}px`,
            height: `${Math.abs(endY - startY)}px`,
          }}
        >
          {/* Animated Dots Along Path */}
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-aviation-teal rounded-full animate-ping transform -translate-x-1/2"></div>
          <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-aviation-teal/60 rounded-full animate-ping transform -translate-x-1/2" style={{animationDelay: '0.2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-aviation-teal/40 rounded-full animate-ping transform -translate-x-1/2" style={{animationDelay: '0.4s'}}></div>
          <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-aviation-teal/60 rounded-full animate-ping transform -translate-x-1/2" style={{animationDelay: '0.6s'}}></div>
        </div>
      </div>

      {/* Destination Marker */}
      <div 
        className="fixed left-1/2 pointer-events-none z-45 transform -translate-x-1/2"
        style={{ top: `${endY}px` }}
      >
        <div className="w-4 h-4 border-2 border-aviation-teal rounded-full bg-white animate-pulse">
          <div className="w-2 h-2 bg-aviation-teal rounded-full m-0.5 animate-ping"></div>
        </div>
      </div>
    </>
  );
}
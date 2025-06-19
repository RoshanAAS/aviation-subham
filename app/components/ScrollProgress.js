'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/20 z-50">
      <div 
        className="h-full bg-aviation-gradient transition-all duration-300 ease-out relative overflow-hidden"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Animated Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        
        {/* Moving Sparkle */}
        <div className="absolute right-0 top-0 w-2 h-full bg-white/50 animate-pulse transform translate-x-1"></div>
        
        {/* Trailing Particles */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-white rounded-full animate-ping opacity-75"></div>
      </div>
    </div>
  );
}
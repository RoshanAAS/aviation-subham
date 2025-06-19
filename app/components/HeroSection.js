import { Button, Icon } from './index';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-teal-50 to-blue-50 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-aviation-gradient opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-sky-200 rounded-full opacity-20 animate-bounce" style={{animationDuration: '3s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-ping" style={{animationDuration: '4s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-aviation-gradient rounded-full mb-6 shadow-aviation logo-float">
              <Icon name="airplane" className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-charcoal mb-6 animate-fadeInUp">
              Aviation
              <span className="text-aviation-teal"> Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-steel-gray max-w-3xl mx-auto leading-relaxed mb-8">
              Soar to new heights with our premium aviation marketing solutions. 
              We help aviation businesses reach their full potential and dominate the skies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="primary">
              <span>Get Started Today</span>
              <Icon name="arrow" className="w-5 h-5" />
            </Button>
            <Button variant="secondary">
              <Icon name="play" className="w-5 h-5" />
              <span>Watch Demo</span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm text-steel-gray">Trusted by 500+ Aviation Companies</div>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-steel-gray rounded opacity-50"></div>
              <div className="w-8 h-8 bg-steel-gray rounded opacity-50"></div>
              <div className="w-8 h-8 bg-steel-gray rounded opacity-50"></div>
              <div className="w-8 h-8 bg-steel-gray rounded opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
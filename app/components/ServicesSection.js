"use client";

import { Icon } from './index';
import { useState, useEffect, useRef } from 'react';

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200); // Stagger animation
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Air Freight Services",
      subtitle: "Logistics Excellence",
      description: "Axios Aviation is IATA approved cargo agency, having qualified DG and IATA staff. Customer need is the foremost in planning the execution of end to end logistics.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Competitive freight rates",
        "Capability and expertise in moving perishables, time sensitive & urgent shipments",
        "Electronics, serum, apparel, leather goods, light engineering equipments",
        "Value Added Services (Groupage services, Purchase order follow-up, Pre-alert)",
        "Door pick-up / delivery services",
        "Experienced in handling exhibition goods and consulate shipments",
        "Expertise in handling Over Dimensional Cargo and Project movements through Charters"
      ],
      gradient: "from-blue-50 to-teal-50"
    },
    {
      id: 2,
      title: "Supply Chain Management",
      subtitle: "Complete Freight Solutions",
      description: "We are your complete freight management solution. When you choose Axios Aviation to manage your supply chain, you're not just getting a business partner; you're getting an extension of your company.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Dedicated team of experienced associates",
        "Seamless integration into your daily business processes",
        "Complete freight management solution",
        "Extension of your company operations",
        "Professional supply chain optimization",
        "End-to-end logistics planning and execution",
        "Customized solutions for your business needs"
      ],
      gradient: "from-teal-50 to-sky-50"
    },
    {
      id: 3,
      title: "Supplier Management",
      subtitle: "Trusted Network Partners",
      description: "Forget the headache of trying to determine which suppliers and carriers you can trust. With Axios Aviation, you can be sure that your freight is in the best care possible.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Extensive networks of trusted suppliers",
        "Highest standards of service compliance",
        "Complete visibility throughout supply chain",
        "Reliable carrier partnerships",
        "Quality assurance and monitoring",
        "Risk management and mitigation",
        "24/7 tracking and support services"
      ],
      gradient: "from-sky-50 to-blue-50"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-charcoal mb-6">
            Our <span className="text-aviation-teal">Services</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Professional aviation logistics solutions with IATA certification and global expertise
          </p>
        </div>

        {/* Services Cards */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const isVisible = visibleCards.includes(index);
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.id}
                ref={el => cardRefs.current[index] = el}
                className="group relative overflow-hidden rounded-md bg-white"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                  
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 relative overflow-hidden">
                    <div className="aspect-[4/3] lg:aspect-[3/2]">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
                          isVisible 
                            ? 'opacity-100 scale-100 translate-x-0' 
                            : `opacity-0 scale-110 ${isEven ? 'translate-x-20' : '-translate-x-20'}`
                        }`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r from-aviation-teal/20 to-transparent transition-opacity duration-1000 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 p-8 lg:p-12">
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <p className={`text-aviation-teal font-semibold text-lg mb-2 tracking-wide transition-all duration-700 delay-200 ${
                          isVisible 
                            ? 'opacity-100 translate-x-0' 
                            : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`
                        }`}>
                          {service.subtitle}
                        </p>
                        <h3 className={`text-3xl lg:text-4xl font-bold text-charcoal mb-4 transition-all duration-700 delay-300 ${
                          isVisible 
                            ? 'opacity-100 translate-x-0' 
                            : `opacity-0 ${isEven ? '-translate-x-16' : 'translate-x-16'}`
                        }`}>
                          {service.title}
                        </h3>
                        <p className={`text-steel-gray text-lg leading-relaxed mb-6 transition-all duration-700 delay-400 ${
                          isVisible 
                            ? 'opacity-100 translate-x-0' 
                            : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'}`
                        }`}>
                          {service.description}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex} 
                            className={`flex items-start space-x-3 transition-all duration-700 ${
                              isVisible 
                                ? 'opacity-100 translate-x-0' 
                                : `opacity-0 ${isEven ? '-translate-x-8' : 'translate-x-8'}`
                            }`}
                            style={{ 
                              transitionDelay: `${500 + featureIndex * 100}ms` 
                            }}
                          >
                            <div className="flex-shrink-0 w-2 h-2 bg-aviation-teal rounded-full mt-2"></div>
                            <p className="text-steel-gray leading-relaxed">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <button className={`inline-flex items-center px-6 py-3 bg-aviation-teal text-white font-semibold rounded-xl hover:bg-aviation-teal/90 transform hover:scale-105 transition-all duration-700 delay-700 ${
                          isVisible 
                            ? 'opacity-100 translate-x-0' 
                            : `opacity-0 ${isEven ? '-translate-x-6' : 'translate-x-6'}`
                        }`}>
                          Learn More
                          <Icon name="arrow-right" className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-aviation-teal to-sky-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Elevate Your Logistics?</h3>
            <p className="text-xl mb-8 opacity-90">
              Contact Axios Aviation today for customized freight solutions
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-aviation-teal font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Get Quote Now
              <Icon name="arrow-right" className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
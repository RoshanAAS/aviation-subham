"use client";

import { Icon } from './index';
import { useState, useEffect, useRef } from 'react';

import Image from 'next/image';

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
      title: "Air Freight Forwarding",
      subtitle: "Global Logistics Solutions",
      description: "Axios Aviation provides comprehensive air freight forwarding services, ensuring your cargo reaches its destination efficiently and securely.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Competitive freight rates worldwide",
        "Expertise in time-sensitive and urgent shipments",
        "Specialized handling for various cargo types",
        "Value-added services including groupage and pre-alerts",
        "Door-to-door pickup and delivery",
        "Exhibition and consulate shipment handling",
        "Global network of trusted partners"
      ],
      gradient: "from-blue-50 to-teal-50"
    },
    {
      id: 7,
      title: "Permits Services",
      subtitle: "International Flight Operations",
      description: "Axios Aviation provides reliable permit services to support smooth international flight operations.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Landing permits for scheduled and non-scheduled flights",
        "Technical landing permits for refueling or crew rest",
        "Overflying permits across controlled airspaces",
        "Quick coordination with aviation authorities worldwide",
        "Permit support for both cargo and passenger aircraft",
        "24/7 permit processing support",
        "Regulatory compliance assistance"
      ],
      gradient: "from-green-50 to-emerald-50"
    },
    {
      id: 2,
      title: "Air Cargo Chartering and Handling",
      subtitle: "Specialized Cargo Solutions",
      description: "Our air cargo chartering services provide tailored solutions for oversized, time-critical, or specialized shipments that require dedicated aircraft and expert handling.",
      image: "https://images.unsplash.com/photo-1571086291540-b137111fa1c7?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Full and part-charter solutions",
        "Specialized aircraft selection based on cargo requirements",
        "Handling of oversized and project cargo",
        "Time-critical shipment management",
        "Ground handling coordination",
        "Load planning and optimization",
        "24/7 operational support"
      ],
      gradient: "from-teal-50 to-sky-50"
    },
    {
      id: 3,
      title: "Custom Clearance",
      subtitle: "Seamless Border Processing",
      description: "Our customs clearance experts ensure smooth and compliant processing of your international shipments, minimizing delays and avoiding compliance issues.",
      image: "https://images.unsplash.com/photo-1665600292329-abab212a031f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Expert documentation preparation",
        "Customs regulations compliance",
        "Duty and tax calculation",
        "Classification and valuation services",
        "Customs bond processing",
        "Import/export license assistance",
        "Customs audit support"
      ],
      gradient: "from-sky-50 to-blue-50"
    },
    {
      id: 4,
      title: "Transportation",
      subtitle: "Integrated Logistics Network",
      description: "Our comprehensive transportation services ensure your cargo moves seamlessly from origin to destination with reliable tracking and timely delivery.",
      image: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "First and last mile delivery",
        "Intermodal transportation solutions",
        "Temperature-controlled transport",
        "High-value cargo security",
        "GPS tracking and monitoring",
        "Scheduled and on-demand services",
        "Specialized vehicle fleet"
      ],
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      id: 5,
      title: "Dangerous Goods Cargo Acceptance",
      subtitle: "Certified Hazardous Materials Handling",
      description: "We ensure careful handling of dangerous goods by following international safety standards. From proper identification to secure packaging, we focus on every detail to move hazardous cargo safely and responsibly.",
      image: "https://images.unsplash.com/photo-1583911026662-95161686d9a6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Knowledge of Dangerous Goods Regulations (DGR)",
        "Correct classification and identification of goods",
        "Support with safe packaging and accurate labeling",
        "Assistance with required documentation",
        "Emergency response planning guidance",
        "Regular updates on safety rules and compliance practices",
      ],
      gradient: "from-red-50 to-orange-50"
    },
    {
      id: 6,
      title: "Consultancy",
      subtitle: "Expert Aviation Logistics Advice",
      description: "Our consultancy services provide expert guidance on optimizing your supply chain, improving efficiency, and ensuring compliance with aviation logistics regulations.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Supply chain optimization",
        "Logistics process improvement",
        "Regulatory compliance guidance",
        "Cost reduction strategies",
        "Risk assessment and management",
        "Technology implementation advice",
        "Staff training and development"
      ],
      gradient: "from-purple-50 to-indigo-50"
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-charcoal mb-6">
            Our <span className="text-aviation-teal">Services</span>
          </h2>
          {/* <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Comprehensive aviation logistics and cargo services with IATA certification and global expertise
          </p> */}
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
        {/* <div className="text-center mt-20">
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
        </div> */}
      </div>
    </section>
  );
}
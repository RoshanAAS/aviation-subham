"use client"

import { Icon } from './index';
import { useState } from 'react';

import Image from 'next/image';

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState(0);
  
  const portfolioCategories = [
    {
      title: "Defence Logistics",
      description: "We take extra care when handling defence shipments. Our team makes sure everything is packed well, moved safely, and delivered on time with full security.",
      image: "/Images/avaition-2.jpeg",
      icon: "shield"
    },
    // {
    //   title: "Aerospace and Space Equipment",
    //   description: "We manage the safe transport of items used in the aerospace and space industry. Every step is planned properly so that nothing is delayed or damaged.",
    //   image: "/Images/avaition-1.jpeg",
    //   icon: "rocket"
    // },
    {
      title: "Consulates and Government Freight",
      description: "We work with consulates and government offices to move their cargo safely. We handle all the paperwork and make sure deliveries are smooth and timely.",
      image: "/Images/avaition-3.jpeg",
      icon: "building"
    },
    {
      title: "Engineering and Industrial Machinery",
      description: "Transporting heavy and large machines needs smart planning. We make sure everything is loaded, moved, and delivered with full care and proper coordination.",
      image: "/Images/avaition-engineering.jpeg",
      icon: "cog"
    },
    {
      title: "Pharma and Cold Chain Cargo",
      description: "For goods that need to stay cool, we offer cold chain services. We keep the right temperature from start to finish so that nothing gets spoiled or wasted.",
      image: "/Images/avaition-4.jpeg",
      icon: "medical"
    }
  ];

  const stats = [
    {
      number: "1000+",
      label: "Critical Projects Completed",
      bgClass: "bg-aviation-teal/10",
      textClass: "text-aviation-teal",
      numberClass: "text-aviation-teal"
    },
    {
      number: "25+", 
      label: "Years of Industry Experience",
      bgClass: "bg-sky-100",
      textClass: "text-sky-700",
      numberClass: "text-sky-600"
    },
    {
      number: "Global",
      label: "Air Cargo Coverage", 
      bgClass: "bg-aviation-teal/10",
      textClass: "text-aviation-teal",
      numberClass: "text-aviation-teal"
    },
    {
      number: "24/7",
      label: "Support Available",
      bgClass: "bg-sky-100", 
      textClass: "text-sky-700",
      numberClass: "text-sky-600"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 via-white to-aviation-teal/5 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-aviation-teal/10 to-sky-600/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-aviation-teal/10 to-sky-600/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-charcoal mb-6">
            Our <span className="text-aviation-teal">Portfolio</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Key industry sectors where we deliver exceptional logistics solutions
          </p>
        </div>

        {/* Portfolio Categories Navigation */}
        <div className="mb-16">
          {/* Premium Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white/60 backdrop-blur-sm rounded-md p-2 max-w-fit mx-auto shadow-xs border border-gray-100">
            {portfolioCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative px-6 py-3 rounded-md text-sm font-medium transition-all duration-500 transform whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-aviation-teal text-white shadow-xs shadow-aviation-teal/25'
                    : 'text-gray-600 hover:text-aviation-teal hover:bg-white/80'
                }`}
              >
                <span className="relative z-10">{category.title}</span>
                {activeTab === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-aviation-teal to-sky-600 rounded-full shadow-lg animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Premium Content Display */}
          <div className="relative overflow-hidden rounded-md bg-white shadow-xs border border-gray-100/50 h-[500px]">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-aviation-teal/5"></div>
            
            <div className="relative flex flex-col lg:flex-row h-full">
              {/* Image Section with Premium Effects */}
              <div className="w-full lg:w-3/5 relative overflow-hidden h-[300px] lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-aviation-teal/20 via-transparent to-sky-600/10 z-10"></div>
                <Image
                  src={portfolioCategories[activeTab].image}
                  alt={portfolioCategories[activeTab].title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                
                {/* Floating Icon */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20">
                    <Icon name={portfolioCategories[activeTab].icon || "box"} className="w-6 h-6 text-aviation-teal" />
                  </div>
                </div>
              </div>

              {/* Content Section with Premium Layout */}
              <div className="w-full lg:w-2/5 p-6 lg:p-8 flex flex-col justify-center relative h-[250px] lg:h-full">
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-aviation-teal/10 to-sky-600/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-aviation-teal/10 text-aviation-teal text-xs font-semibold mb-4">
                    <div className="w-1.5 h-1.5 bg-aviation-teal rounded-full mr-2 animate-pulse"></div>
                    Portfolio Showcase
                  </div>

                  {/* Title with Premium Typography */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4 leading-tight">
                    {portfolioCategories[activeTab].title}
                  </h3>

                  {/* Description with Better Spacing */}
                  <p className="text-base text-steel-gray mb-6 leading-relaxed line-clamp-3">
                    {portfolioCategories[activeTab].description}
                  </p>

                  {/* Premium CTA Button */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="group inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-aviation-teal to-sky-600 text-white font-medium rounded-xl shadow-lg shadow-aviation-teal/25 hover:shadow-xl hover:shadow-aviation-teal/30 transform hover:scale-105 transition-all duration-300 text-sm">
                      <span>View Case Studies</span>
                      <Icon name="arrow-right" className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <button className="inline-flex items-center px-5 py-2.5 bg-white/80 backdrop-blur-sm text-aviation-teal font-medium rounded-xl border border-aviation-teal/20 hover:border-aviation-teal/40 hover:bg-aviation-teal/5 transform hover:scale-105 transition-all duration-300 text-sm">
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Portfolio Highlights */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-charcoal mb-4">
              Key Portfolio <span className="text-aviation-teal">Highlights</span>
            </h3>
            <p className="text-xl text-steel-gray max-w-2xl mx-auto">
              Proven track record of excellence in aviation logistics
            </p>
          </div>
          
          {/* Premium Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden"
              >
                {/* Card Background with Gradient */}
                <div className={`relative p-8 rounded-2xl ${stat.bgClass} border border-white/50 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 h-[200px] flex flex-col items-center justify-center backdrop-blur-sm`}>
                  
                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-bl-2xl"></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-aviation-teal/20 via-transparent to-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className={`text-5xl font-bold mb-3 ${stat.numberClass} group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className={`${stat.textClass} font-semibold text-base leading-tight`}>
                      {stat.label}
                    </div>
                  </div>

                  {/* Subtle Animation Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-aviation-teal to-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client"

import { Icon } from './index';
import { useState } from 'react';

import Image from 'next/image';

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState(0);
  
  const portfolioCategories = [
    {
      title: "Defence and Military Logistics",
      description: "We take extra care when handling defence shipments. Our team makes sure everything is packed well, moved safely, and delivered on time with full security.",
      image: "/Images/avaition-2.jpeg",
      icon: "shield"
    },
    {
      title: "Aerospace and Space Equipment",
      description: "We manage the safe transport of items used in the aerospace and space industry. Every step is planned properly so that nothing is delayed or damaged.",
      image: "/Images/avaition-1.jpeg",
      icon: "rocket"
    },
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
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-charcoal mb-6">
            Our <span className="text-aviation-teal">Portfolio</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Key industry sectors where we deliver exceptional logistics solutions
          </p>
        </div>

        {/* Portfolio Categories Tabs */}
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10 max-w-5xl mx-auto">
            {portfolioCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 h-[60px] flex items-center justify-center text-center ${
                  activeTab === index
                    ? 'bg-aviation-teal text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Portfolio Content */}
          <div className="bg-white rounded-md shadow-xs overflow-hidden">
            <div className="flex flex-col md:flex-row h-[500px]">
              <div className="w-full md:w-1/2 h-[250px] md:h-full">
                <div className="relative h-full">
                  <Image
                    src={portfolioCategories[activeTab].image}
                    alt={portfolioCategories[activeTab].title}
                    width={600}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-aviation-teal/30 to-transparent"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between h-[250px] md:h-full">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-aviation-teal/10 flex items-center justify-center mr-4">
                      <Icon name={portfolioCategories[activeTab].icon || "box"} className="w-6 h-6 text-aviation-teal" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                      {portfolioCategories[activeTab].title}
                    </h3>
                  </div>
                  <p className="text-lg text-steel-gray mb-8">
                    {portfolioCategories[activeTab].description}
                  </p>
                </div>
                <div>
                  <button className="inline-flex items-center px-6 py-3 bg-aviation-teal text-white font-semibold rounded-xl hover:bg-aviation-teal/90 transform hover:scale-105 transition-all duration-300">
                    View Case Studies
                    <Icon name="arrow-right" className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Highlights */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-charcoal mb-12">
            Key Portfolio <span className="text-aviation-teal">Highlights</span>
          </h3>
          
          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-8 rounded-xl ${stat.bgClass} border border-gray-100 shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 h-[180px] flex flex-col items-center justify-center`}
              >
                <div className={`text-4xl font-bold mb-4 ${stat.numberClass}`}>{stat.number}</div>
                <div className={`${stat.textClass} font-medium text-lg`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
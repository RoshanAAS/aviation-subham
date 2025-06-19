import { Icon } from './index';

export default function ServicesSection() {
  const services = [
    {
      iconName: "lightning",
      title: "Digital Marketing",
      description: "Lightning-fast digital campaigns that match the speed of modern aviation technology",
      bgColor: "bg-teal-600",
      gradientFrom: "from-teal-50",
      gradientTo: "to-sky-50"
    },
    {
      iconName: "shield",
      title: "Brand Strategy",
      description: "Proven strategies with a track record of success among aviation industry leaders",
      bgColor: "bg-sky-500",
      gradientFrom: "from-blue-50",
      gradientTo: "to-teal-50"
    },
    {
      iconName: "users",
      title: "Expert Consulting",
      description: "Aviation specialists who understand your unique challenges and opportunities",
      bgColor: "bg-deep-blue",
      gradientFrom: "from-sky-50",
      gradientTo: "to-blue-50"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-charcoal mb-6">
            Our <span className="text-aviation-teal">Services</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            We combine aviation expertise with cutting-edge marketing strategies to elevate your brand
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group text-center p-10 rounded-2xl bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} shadow-teal transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl`}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 ${service.bgColor} rounded-2xl mb-8 group-hover:bg-aviation-gradient transition-all duration-300 group-hover:rotate-6`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-6 group-hover:text-aviation-teal transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-steel-gray text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
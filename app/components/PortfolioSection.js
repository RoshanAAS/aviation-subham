export default function PortfolioSection() {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      bgClass: "bg-aviation-gradient",
      textClass: "text-teal-100"
    },
    {
      number: "50+", 
      label: "Aviation Clients",
      bgClass: "bg-sky-gradient",
      textClass: "text-sky-100"
    },
    {
      number: "99%",
      label: "Client Satisfaction", 
      bgClass: "bg-aviation-gradient",
      textClass: "text-teal-100"
    },
    {
      number: "24/7",
      label: "Support Available",
      bgClass: "bg-sky-gradient", 
      textClass: "text-sky-100"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-charcoal mb-6">
            Our <span className="text-aviation-teal">Portfolio</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            See how we've helped aviation companies achieve remarkable growth
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-8 rounded-2xl ${stat.bgClass} text-white transform hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className={stat.textClass}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
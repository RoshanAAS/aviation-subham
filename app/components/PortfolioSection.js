export default function PortfolioSection() {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      bgClass: "bg-aviation-teal/10",
      textClass: "text-aviation-teal",
      numberClass: "text-aviation-teal"
    },
    {
      number: "50+", 
      label: "Aviation Clients",
      bgClass: "bg-sky-100",
      textClass: "text-sky-700",
      numberClass: "text-sky-600"
    },
    {
      number: "99%",
      label: "Client Satisfaction", 
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
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-8 rounded-md ${stat.bgClass} border border-gray-100 shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300`}
            >
              <div className={`text-4xl font-bold mb-2 ${stat.numberClass}`}>{stat.number}</div>
              <div className={stat.textClass}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
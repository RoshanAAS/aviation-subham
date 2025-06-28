export default function AboutSection() {
  const features = [
    "10+ Years Aviation Experience",
    "500+ Successful Projects", 
    "Award-Winning Team"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-charcoal mb-8">
              About <span className="text-aviation-teal">Axios Aviation</span>
            </h2>
            <p className="text-xl text-steel-gray mb-8 leading-relaxed">
              With over a decade of experience in aviation marketing, we've helped hundreds of companies 
              soar to new heights. Our team combines deep industry knowledge with cutting-edge marketing 
              strategies to deliver exceptional results.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-aviation-gradient rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-charcoal font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-aviation-gradient rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
            <div className="absolute inset-4 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Commercial Carrier Aircraft" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
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
              About <span className="text-aviation-teal">Aviation Pro</span>
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
            <div className="absolute inset-4 bg-white rounded-2xl flex items-center justify-center">
              <svg className="w-32 h-32 text-aviation-teal" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
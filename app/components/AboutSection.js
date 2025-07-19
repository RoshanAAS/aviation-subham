import Image from 'next/image';

export default function AboutSection() {
  const features = [
    "25+ Years of Industry Experience",
    "1000+ Critical Projects Completed",
    "IATA, DGCA & ISO Compliant",
    "24/7 Global Support"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-charcoal mb-6">
            About <span className="text-aviation-teal">Axios Aviation</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Your trusted partner for time-critical air cargo and logistics solutions since 1999
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-charcoal mb-6">
              Company <span className="text-aviation-teal">Overview</span>
            </h3>
            <div className="space-y-6 text-lg text-charcoal leading-relaxed">
              <p>
                Founded in 1999, Axios Aviation Services Pvt. Ltd. is a trusted name in time-critical air cargo and logistics solutions, serving the defense, aerospace, industrial, and pharmaceutical sectors.
              </p>
              <p>
                With over 25 years of expertise, we specialize in aircraft chartering, over-dimensional cargo, defense-grade freight handling, and cold chain logistics — all executed with unmatched precision and 24/7 reliability.
              </p>
              <p>
                Our operations are fully compliant with IATA, DGCA, and ISO standards, and we are proud to support government agencies, strategic organizations, and time-sensitive missions across the globe.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-aviation-gradient rounded-full flex items-center justify-center flex-shrink-0">
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
              <Image 
                src="/hero-2.jpeg" 
                alt="Air Cargo Operations" 
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-20">
          <div className="bg-gray-50 p-10 rounded-xl shadow-md transform hover:-translate-y-2 transition-all duration-300 border border-gray-200">
            <div className="w-16 h-16 bg-aviation-teal/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-aviation-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">Our Mission</h3>
            <div className="space-y-4 text-charcoal">
              <p>
                At Axios Aviation Services Pvt. Ltd., our mission is to provide fast, secure, and fully compliant air logistics solutions for critical cargo across defense, aerospace, industrial, and pharmaceutical sectors.
              </p>
              <p>
                We are committed to operating with 24/7 responsiveness, meticulous execution, and strict adherence to safety and regulatory standards. Every shipment we move — whether it&apos;s a chartered aircraft, sensitive freight, or over-dimensional project cargo — is treated like a mission that cannot fail.
              </p>
              <p>
                Our goal is to be the logistics partner of choice for clients who need more than just transport — they need trust, timing, and technical precision.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-xl shadow-md transform hover:-translate-y-2 transition-all duration-300 border border-gray-200">
            <div className="w-16 h-16 bg-aviation-teal/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-aviation-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">Our Vision</h3>
            <div className="space-y-4 text-charcoal">
              <p>
                Our vision is to become a global leader in mission-critical air cargo and charter logistics, recognized for our speed, precision, and reliability.
              </p>
              <p>
                We aim to set the benchmark for aviation logistics excellence by consistently delivering high-impact solutions for defense, aerospace, industrial, and humanitarian sectors.
              </p>
              <p>
                By combining our deep industry expertise, 24/7 operational capability, and unwavering client commitment, we envision Axios Aviation as the go-to partner for clients who demand speed without compromise, compliance without question, and service without limits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
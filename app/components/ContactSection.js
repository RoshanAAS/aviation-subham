export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-charcoal">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-white mb-8">
          Ready to <span className="text-aviation-teal">Take Off?</span>
        </h2>
        <p className="text-xl text-medium-gray mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the aviation leaders who trust us with their marketing success. 
          Let's elevate your brand to new heights and dominate the skies together.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="btn-aviation-primary btn-hover-effect transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <span className="flex items-center justify-center space-x-3">
              <span>Start Your Journey</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="bg-transparent border-2 border-aviation-teal text-aviation-teal px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-aviation-teal hover:text-white transform hover:scale-105 hover:-translate-y-2 btn-hover-effect">
            <span className="flex items-center justify-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Us</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
import {
  Navbar,
  HeroSection,
  ServicesSection,
  AboutSection,
  PortfolioSection,
  ContactSection,
  Footer
} from "./components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
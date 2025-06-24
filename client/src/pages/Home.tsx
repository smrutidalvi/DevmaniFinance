import HeroSection from "@/components/home/HeroSection";
import PartnershipBanner from "@/components/home/PartnershipBanner";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MarketInsights from "@/components/home/MarketInsights";
import CallToAction from "@/components/home/CallToAction";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <PartnershipBanner />
      <ServicesSection />
      <WhyChooseUs />
      <MarketInsights />
      <CallToAction />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Home;

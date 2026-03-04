import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import StatsSection from "@/components/StatsSection";
import SundayBanner from "@/components/SundayBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-gray-50 text-foreground font-sans antialiased overflow-x-hidden min-h-screen flex flex-col w-full relative">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FacilitiesSection />
        <StatsSection />
        <SundayBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

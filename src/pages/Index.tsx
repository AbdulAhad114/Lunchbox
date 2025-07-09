
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
// import TestimonialSection from "@/components/TestimonialSection";
import TrustBarSection from "@/components/TrustBarSection";
// import WhatWeDoSection from "@/components/WhatWeDoSection";
// import PhilosophySection from "@/components/PhilosophySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import StatsSection from "@/components/StatsSection";
import BookingForm from "@/components/BookingForm";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* <TestimonialSection /> */}
      <TrustBarSection />
      {/* <WhatWeDoSection />
      <PhilosophySection /> */}
      <WhyChooseUsSection />
      <StatsSection />
      {/* <BookingForm /> */}
      <FinalCTASection />
      <Footer />
      {/* <StickyCallButton /> */}
    </div>
  );
};

export default Index;

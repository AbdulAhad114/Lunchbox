
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <BookingForm />
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default Index;

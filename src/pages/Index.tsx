
import Navigation from "@/components/Navigation";

import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import StatsSection from "@/components/StatsSection";
import BookingForm from "@/components/BookingForm";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import Newhero from "@/components/hero";
import WhatsInTheBox from "@/components/WhatsInTheBox";
import ProductWithKeyPoints from "@/components/ProductWithKeyPoints";
import HomePagePoints from "@/components/HomePagePoints";
import FAQSection from "@/components/FAQSection";
import SVGPathAnimator from "@/components/SVGPathAnimator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Newhero />
      {/* <HomePagePoints /> */}
      <div className="relative z-0 bg-brand-yellow" id="svg-animation-wrapper">
        <SVGPathAnimator />
        <WhatsInTheBox /> 
        <HomePagePoints />
      </div>
      <StatsSection />
      <FAQSection />
      <FinalCTASection />  
      <Footer />
    </div>
  );
};

export default Index;


import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const goToBooking = () => {
    navigate('/lets-talk');
  };
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20">
      
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-lunchbox.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-10 text-center relative z-10">
        <div
          ref={ref}
          className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-4xl md:text-6xl font-apfel font-bold text-white mb-4 
          leading-snug tracking-tight">
            More Online Presence → More Customers → More Reviews → More Revenue
          </h1>
          
          <p className="text-lg md:text-2xl font-beVietnam font-medium text-gray-800 mb-2 
          max-w-3xl text-center mx-auto">
            <span className="bg-gradient-to-r from-primary-blue to-brand-yellow 
            bg-clip-text text-transparent">
              Your restaurant deserves to be seen. We make sure it is — with 
              consistent social media, a clean website, and solid review management.
            </span>
          </p>

          <p className="text-sm md:text-lg font-beVietnam font-light text-white 
          max-w-2xl leading-relaxed text-center mx-auto mb-6">
            Lunchbox is your digital team. Real marketers. Smart AI tools. 
            Weekly results. No stress on your end.
          </p>

          <Button 
            onClick={goToBooking}
            className="bg-gradient-to-r from-primary-blue to-brand-yellow 
            hover:from-primary-blue/90 hover:to-brand-yellow/90 text-white 
            font-beVietnam font-bold text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-7 lg:py-8 rounded-full shadow-2xl hover:shadow-3xl 
            transition-all duration-300 group border-0 hover:-translate-y-1"
          >
            Book a Free Call
            <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </Button>
        </div>
      </div>

      {/* Moved scroll indicator further down */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-12 border-2 border-gray-300 rounded-full flex justify-center animate-pulse">
          <div className="w-2 h-4 bg-gradient-to-b from-primary-blue to-brand-yellow rounded-full mt-2"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;


import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const FinalCTASection = () => {
  const navigate = useNavigate();
  const goToBooking = () => {
    navigate('/lets-talk');
  };
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-primary-blue to-brand-yellow relative overflow-hidden">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-apfel font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-snug px-2">
          Ready to Grow Your Restaurant Online?
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-beVietnam font-medium text-white/90 mb-4 sm:mb-6 max-w-3xl text-center mx-auto px-4">
          Join hundreds of successful restaurants who trust Lunchbox to handle their digital presence.
        </p>
        
        <Button 
          onClick={goToBooking}
          className="bg-white hover:bg-gray-50 text-primary-blue font-bold text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 lg:py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          Book My Free Call
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
        </Button>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FinalCTASection;

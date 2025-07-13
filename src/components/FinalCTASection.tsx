
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTASection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-24 bg-gradient-to-r from-primary-blue to-brand-yellow relative overflow-hidden">
      <div
        ref={ref}
        className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-apfel font-bold text-white mb-4 leading-snug sm:leading-tight">
          Ready to Grow Your Restaurant Online?
        </h2>
        
        <p className="text-lg md:text-2xl font-beVietnam font-medium text-white/90 mb-2 max-w-3xl text-center mx-auto">
          Join hundreds of successful restaurants who trust Lunchbox to handle their digital presence.
        </p>
        
        <Button 
          onClick={scrollToBooking}
          className="bg-white hover:bg-gray-50 text-primary-blue font-bold text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-7 lg:py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
        >
          Book My Free Call
          <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
        </Button>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FinalCTASection;

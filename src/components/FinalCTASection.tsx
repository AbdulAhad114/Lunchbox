
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-r from-primary-blue to-brand-yellow relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-fredoka text-white mb-8 leading-tight">
          Ready to Grow Your Restaurant Online?
        </h2>
        
        <p className="text-xl font-poppins text-white/90 mb-12 max-w-2xl mx-auto">
          Join hundreds of successful restaurants who trust Lunchbox to handle their digital presence.
        </p>
        
        <Button 
          onClick={scrollToBooking}
          className="bg-white hover:bg-gray-50 text-primary-blue font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
        >
          Book My Free Call
          <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={24} />
        </Button>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FinalCTASection;

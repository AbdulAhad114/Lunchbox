
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-yellow/10 to-primary-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary-blue/10 to-brand-yellow/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-fredoka text-gray-900 mb-8 leading-tight tracking-tight">
            We Make Restaurants
            <br />
            <span className="bg-gradient-to-r from-primary-blue to-brand-yellow bg-clip-text text-transparent">
              Look Awesome Online
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-poppins text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Your team is in the kitchen. Our team is online — making sure your customers 
            find, trust, and choose you every single time.
          </p>

          <Button 
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-primary-blue to-brand-yellow hover:from-primary-blue/90 hover:to-brand-yellow/90 text-white font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group border-0"
          >
            Book a Free Call
            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={24} />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-12 border-2 border-gray-300 rounded-full flex justify-center animate-pulse">
          <div className="w-2 h-4 bg-gradient-to-b from-primary-blue to-brand-yellow rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Utensils, Smartphone } from "lucide-react";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-soft-bg to-primary-blue/5 relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute top-32 left-10 animate-float opacity-20">
        <Utensils size={40} className="text-brand-yellow" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce-gentle opacity-20">
        <Star size={32} className="text-primary-blue" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Smartphone size={36} className="text-brand-yellow" />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce-gentle opacity-20" style={{ animationDelay: '2s' }}>
        <Star size={28} className="text-primary-blue" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-fredoka text-gray-800 mb-6 leading-tight">
            We Make Restaurants 
            <span className="text-primary-blue block mt-2">Look Awesome Online</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-poppins text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your team is in the kitchen. Our team is online — making sure your customers 
            <span className="font-semibold text-primary-blue"> find, trust, and choose you.</span>
          </p>

          <Button 
            onClick={scrollToBooking}
            className="bg-brand-yellow hover:bg-brand-yellow/90 text-primary-blue font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Book a Free Call
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </Button>

          <div className="mt-12 flex justify-center items-center space-x-8 text-gray-500">
            <div className="flex items-center">
              <Star className="text-brand-yellow fill-brand-yellow mr-1" size={20} />
              <Star className="text-brand-yellow fill-brand-yellow mr-1" size={20} />
              <Star className="text-brand-yellow fill-brand-yellow mr-1" size={20} />
              <Star className="text-brand-yellow fill-brand-yellow mr-1" size={20} />
              <Star className="text-brand-yellow fill-brand-yellow mr-3" size={20} />
              <span className="font-poppins text-sm">5-star results</span>
            </div>
            <div className="text-sm font-poppins">
              Trusted by <span className="font-semibold text-primary-blue">200+</span> restaurants
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-yellow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

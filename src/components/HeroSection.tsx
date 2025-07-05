
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Utensils, ChefHat, Smartphone } from "lucide-react";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20">
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-yellow/10 to-primary-blue/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary-blue/10 to-brand-yellow/5 rounded-full blur-3xl animate-bounce-gentle"></div>
      
      {/* Restaurant-themed background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Utensils className="absolute top-20 left-20 w-8 h-8 text-primary-blue/10 animate-float" style={{ animationDelay: '0s' }} />
        <ChefHat className="absolute top-40 right-32 w-10 h-10 text-brand-yellow/15 animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <Smartphone className="absolute bottom-32 right-20 w-6 h-6 text-primary-blue/10 animate-float" style={{ animationDelay: '2s' }} />
        <Star className="absolute top-1/3 left-1/4 w-4 h-4 text-brand-yellow/20 animate-pulse" />
        <Star className="absolute bottom-1/4 right-1/3 w-3 h-3 text-primary-blue/15 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-fredoka text-gray-900 mb-8 leading-tight tracking-tight">
            We Make Restaurants
            <br />
            <span className="bg-gradient-to-r from-primary-blue to-brand-yellow bg-clip-text text-transparent">
              Look Awesome Online
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-poppins text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Your team is in the kitchen. Our team is online making sure your customers 
            find, trust, and choose you every single time.
          </p>

          <Button 
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-primary-blue to-brand-yellow hover:from-primary-blue/90 hover:to-brand-yellow/90 text-white font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group border-0 hover:-translate-y-1"
          >
            Book a Free Call
            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={24} />
          </Button>
        </div>
      </div>

      {/* Moved scroll indicator further down */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-12 border-2 border-gray-300 rounded-full flex justify-center animate-pulse">
          <div className="w-2 h-4 bg-gradient-to-b from-primary-blue to-brand-yellow rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const StickyCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        onClick={scrollToBooking}
        className="bg-brand-yellow hover:bg-brand-yellow/90 text-primary-blue font-bold px-4 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-gentle"
      >
        <Phone size={20} className="mr-2" />
        Book Call
      </Button>
    </div>
  );
};

export default StickyCallButton;

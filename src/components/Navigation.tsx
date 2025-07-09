import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/../public/images/lunchbox-logo.png"; // Adjust the path as necessary

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "THE LUNCHBOX WAY", href: "/the-lunchbox-way", type: "route" },
    { name: "PRICING & VALUE", href: "/pricing-and-value", type: "route" },
    { name: "LET'S TALK", href: "/lets-talk", type: "route" },
  ];


  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-6 left-12 right-12 z-50 rounded-lg transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    } ${isMobileMenuOpen ? 'bg-white shadow-lg' : ''}`}> 
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          
          <div className="flex items-center">
            <img
              src={logo}
              alt="Lunchbox Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.type === "scroll") {
                      scrollToSection(item.href);
                    } else if (item.type === "route") {
                      navigate(item.href);
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  // className="text-white hover:text-primary-blue font-poppins font-medium transition-colors duration-300"
                  className={`font-medium transition-colors duration-300
                            ${isScrolled ? "text-black" : "text-white"}
                            hover:text-primary-blue`}
                >
                  {item.name}
                </button>
              ))}

            {/* <Button
              onClick={() => scrollToSection('#booking')}
              className="bg-brand-yellow hover:bg-brand-yellow/90 text-primary-blue font-bold px-6 py-2 rounded-full transition-all duration-300"
            >
              Book Free Call
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-blue transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.type === "scroll") {
                      scrollToSection(item.href);
                    } else if (item.type === "route") {
                      navigate(item.href);
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className="text-gray-700 hover:text-primary-blue font-poppins font-medium transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}

              {/* <Button
                onClick={() => scrollToSection('#booking')}
                className="bg-brand-yellow hover:bg-brand-yellow/90 text-primary-blue font-bold px-6 py-2 rounded-full transition-all duration-300 w-full"
              >
                Book Free Call
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

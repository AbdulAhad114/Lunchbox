import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/../public/images/lunchbox-logo.png"; // Adjust path as needed

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect if current page is homepage
  const isHomePage = location.pathname === "/";

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
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-6 left-4 right-4 z-50 rounded-lg transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              navigate("/");
              setIsMobileMenuOpen(false);
            }}
            aria-label="Go to homepage"
          >
            <img
              src={logo}
              alt="Lunchbox Logo"
              className={`h-16 w-auto`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault(); // prevent full page reload
                  if (item.type === "scroll") {
                    scrollToSection(item.href);
                  } else if (item.type === "route") {
                    navigate(item.href);
                    setIsMobileMenuOpen(false);
                  }
                }}
                className={`font-medium transition-colors duration-300 ${
                  isHomePage && !isScrolled ? "text-white" : "text-black"
                } hover:text-primary-blue`}
              >
                {item.name}
              </a>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-300 ${
                isHomePage && !isScrolled ? "text-white" : "text-gray-700"
              }`}
              aria-label="Toggle mobile menu"
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

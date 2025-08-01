import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { FocusTrap } from "@/components/ui/focus-trap";
import logo from "@/../public/images/lunchbox-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "THE LUNCHBOX WAY", href: "/the-lunchbox-way" },
    { name: "PRICING & VALUE", href: "/pricing-and-value" },
    { name: "LET'S TALK", href: "/lets-talk" },
  ];

  return (
    <>
      <style>{`
        @media (max-width: 375px) {
          nav.lunchbox-nav {
            left: 0 !important;
            right: 0 !important;
            top: 0 !important;
            border-radius: 10px !important;
            padding-left: 8px !important;
            padding-right: 8px !important;
            padding-top: 8px !important;
            padding-bottom: 0 !important;
            min-width: 0 !important;
          }
          .lunchbox-nav-logo img {
            height: 40px !important;
            max-width: 110px !important;
          }
          .lunchbox-mobile-menu {
            left: 0 !important;
            right: 0 !important;
            width: 100vw !important;
            border-radius: 0 0 10px 10px !important;
          }
        }
        @media (max-width: 320px) {
          nav.lunchbox-nav {
            padding-left: 4px !important;
            padding-right: 4px !important;
            padding-top: 4px !important;
          }
          .lunchbox-nav-logo img {
            height: 32px !important;
            max-width: 90px !important;
          }
        }
      `}</style>

      <nav
        className={`lunchbox-nav fixed top-6 left-4 right-4 z-50 rounded-lg transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
        style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 8 }}
      >
        <div className="container mx-auto px-2">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src={logo}
                alt="Lunchbox Logo"
                className="h-16 w-auto"
                style={{ maxWidth: "160px", height: "64px" }}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="font-medium text-black hover:text-primary-blue transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lunchbox-menu-btn text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <FocusTrap active={isMobileMenuOpen}>
              <div className="lunchbox-mobile-menu md:hidden mt-4 pb-4 border-t border-gray-200 bg-white shadow-lg absolute left-0 right-0 w-full rounded-b-lg z-50">
                <div className="flex flex-col space-y-4 pt-4 px-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-700 hover:text-primary-blue font-medium transition-colors duration-300 rounded px-2 py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </FocusTrap>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;

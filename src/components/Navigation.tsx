import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { FocusTrap } from "@/components/ui/focus-trap";
import logo from "@/../public/images/lunchbox-logo.png";

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
            min-width: 0 !important;
            border-radius: 0 0 10px 10px !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 8px !important;
            padding-right: 8px !important;
          }
          .lunchbox-menu-btn {
            margin-right: 0 !important;
            margin-left: 0 !important;
            margin-top: 0 !important;
            z-index: 60 !important;
          }
        }
        @media (max-width: 320px) {
          nav.lunchbox-nav {
            left: 0 !important;
            right: 0 !important;
            top: 0 !important;
            border-radius: 10px !important;
            padding-left: 4px !important;
            padding-right: 4px !important;
            padding-top: 4px !important;
            padding-bottom: 0 !important;
            min-width: 0 !important;
          }
          .lunchbox-nav-logo img {
            height: 32px !important;
            max-width: 90px !important;
          }
          .lunchbox-mobile-menu {
            left: 0 !important;
            right: 0 !important;
            width: 100vw !important;
            min-width: 0 !important;
            border-radius: 0 0 10px 10px !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 4px !important;
            padding-right: 4px !important;
          }
          .lunchbox-menu-btn {
            margin-right: 0 !important;
            margin-left: 0 !important;
            margin-top: 0 !important;
            z-index: 60 !important;
          }
        }
      `}</style>
      <nav
        className={`lunchbox-nav fixed top-6 left-4 right-4 z-50 rounded-lg transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 8,
        }}
      >
        <div className="container mx-auto px-2">
          {/* On mobile <=320px, logo on left, menu button on right */}
          <div className="flex items-center justify-between w-full">
            {/* Logo (always on left) */}
            <div
              className="lunchbox-nav-logo flex items-center cursor-pointer"
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
                style={{
                  maxWidth: "160px",
                  height: "64px",
                }}
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
                  className={`font-medium transition-colors duration-300 text-black hover:text-primary-blue`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            {/* Mobile Menu Button (always on right on mobile) */}
            <div className="md:hidden flex items-center" style={{ minWidth: 0 }}>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lunchbox-menu-btn transition-colors duration-300 text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue`}
                aria-label="Toggle mobile menu"
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  zIndex: 60,
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <FocusTrap active={isMobileMenuOpen}>
              <div 
                className="lunchbox-mobile-menu md:hidden mt-4 pb-4 border-t border-gray-200 bg-white shadow-lg absolute left-0 right-0 w-full rounded-b-lg z-50"
                style={{
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
                role="navigation"
                aria-label="Mobile navigation menu"
              >
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
                      className="text-gray-700 hover:text-primary-blue font-medium transition-colors duration-300 text-left focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded px-2 py-1"
                    >
                      {item.name}
                    </button>
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

import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RIPPLE_COUNT = 10;
const BASE_RADIUS = 200;
const RADIUS_STEP = 100;
const ANIMATION_DURATION = 2;

const Newhero = () => {
  const ripples = Array.from({ length: RIPPLE_COUNT });
  const navigate = useNavigate();
  const goToBooking = () => {
    navigate('/lets-talk');
  };

  return (
    <div
      className="scroll bg-white scroll-smooth overflow-x-hidden" // prevent horizontal scroll globally
      id="the-lunchbox-way"
    >
      {/* Navigation */}
      <Navigation />

      <div className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center">
        {/* SVG Ripple Animation - Centered */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          className="absolute left-1/2 top-1/2 z-0 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          preserveAspectRatio="xMidYMid meet"
        >
          <g>
            {ripples.map((_, i) => (
              <circle
                key={i}
                cx={960}
                cy={540}
                r={BASE_RADIUS + i * RADIUS_STEP}
                stroke="#0434AB" // primary-blue
                strokeWidth="1.5"
                fill="none"
                style={{
                  opacity: 0.18,
                  transformOrigin: "960px 540px",
                  animation: `rippleAnim ${ANIMATION_DURATION}s linear infinite`,
                  animationDelay: `${(ANIMATION_DURATION / RIPPLE_COUNT) * i}s`,
                }}
              />
            ))}
          </g>
          <style>
            {`
              @keyframes rippleAnim {
                0% {
                  opacity: 0.22;
                  transform: scale(0.85);
                }
                70% {
                  opacity: 0.80;
                }
                100% {
                  opacity: 0;
                  transform: scale(1.18);
                }
              }
            `}
          </style>
        </svg>

        {/* Text Content - Centered, Brand Yellow BG, Primary Blue Text */}
        <div className="absolute left-1/2 top-[60%] z-20 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col 
        items-center justify-center px-4 sm:px-8 md:px-16 lg:px-0">
          <div className="px-2 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 max-w-full sm:max-w-2xl md:max-w-4xl w-full flex 
          flex-col items-center">
            <h1
              className="font-apfel font-bold text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight tracking-wider uppercase 
              inline-block px-1 sm:px-2 py-1 rounded text-primary-blue text-center mb-2 sm:mb-3"
              style={{ display: "inline-block" }}
            >
              FUELING RESTAURANT GROWTH, EVERY DAY
            </h1>
            <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-apfel font-bold text-black mb-3 sm:mb-4 
            leading-tight tracking-tight text-center px-2">
              More Online Presence → More Diners → More Reviews → More Growth
            </h2>
            <p className="text-base sm:text-sm md:text-base lg:text-lg font-light text-primary-blue max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl 
            leading-tight text-center mx-auto px-2 sm:px-4 mb-6 sm:mb-6">
              Lunchbox is your digital team. Real marketers. Smart AI tools. Weekly results. No stress on your end.
            </p>
            <Button 
              onClick={goToBooking}
              className="bg-gradient-to-r from-primary-blue to-brand-yellow 
              hover:from-primary-blue/90 hover:to-brand-yellow/90 text-white 
              font-beVietnam font-bold text-base sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 lg:py-7 rounded-full shadow-2xl hover:shadow-3xl 
              transition-all duration-300 group border-0 hover:-translate-y-1 focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
              >
              Book a Free Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </Button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Newhero;

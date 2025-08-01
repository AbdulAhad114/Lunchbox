import React, { useRef, useEffect } from "react";
import SplashCursor from "./SplashCursor";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = React.useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const setCombinedRef = (node: HTMLDivElement | null) => {
    sectionRef.current = node;
    if (ref && "current" in ref) {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleEnter = () => setShowCursor(true);
    const handleLeave = () => setShowCursor(false);

    section.addEventListener("mouseenter", handleEnter);
    section.addEventListener("mouseleave", handleLeave);

    return () => {
      section.removeEventListener("mouseenter", handleEnter);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      ref={setCombinedRef}
      className={`relative w-full h-full pt-8 sm:pt-14 min-h-screen bg-white/30 overflow-hidden px-2 py-6 sm:py-10 md:py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {showCursor && <SplashCursor />}

      {/* Center Floating Box - now above grid, responsive position */}
      <div
        className="relative sm:absolute left-1/2 sm:left-1/2 sm:top-6 md:top-1/2 -translate-x-1/2 sm:-translate-y-1/2
          w-56 sm:w-60 md:w-64 max-w-xs sm:max-w-none h-24 sm:h-20 md:h-24 flex flex-col justify-center items-center
          bg-white font-beVietnam font-bold tracking-tight 
          border-2 border-black rounded-xl shadow-lg z-20"
      >
        <div className="flex items-start space-x-2">
          <span className="text-2xl sm:text-lg md:text-2xl lg:text-3xl text-primary-blue mt-1 leading-none">
            Real
          </span>
          <span className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight font-apfel font-bold text-yellow-400">
            Stats
          </span>
        </div>
        <div className="flex items-start space-x-2 -mt-1">
          <span className="text-2xl sm:text-lg md:text-2xl lg:text-3xl text-primary-blue mt-1 leading-none">
            Real
          </span>
          <span className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight font-apfel font-bold text-yellow-400">
            Talk
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 w-full border-2 border-black rounded-xl bg-white bg-opacity-60 overflow-hidden gap-0">
        {/* === TOP LEFT === */}
        <div className="flex flex-col items-center justify-center text-center sm:items-start sm:justify-start sm:text-left border border-black p-3 sm:p-4 md:p-6">
          <div className="text-2xl sm:text-lg md:text-xl lg:text-2xl font-apfel font-bold leading-snug tracking-tight mb-2 sm:mb-4">
            Social Media = The New Front Door
          </div>
          <div className="relative ml-1 sm:ml-2 md:ml-6 mb-2 sm:mb-4 mt-2 sm:mt-4 p-1 sm:p-2 md:p-3">
            <div className="text-xs sm:text-sm md:text-base font-beVietnam text-black">
              <span className="text-2xl md:text-4xl lg:text-6xl font-apfel font-bold text-yellow-400 block">
                88%
              </span>
              <span className="text-base sm:text-sm md:text-base">
                trust social media and reviews when deciding where to eat
              </span>
            </div>
          </div>
          <div className="relative ml-3 sm:ml-6 md:ml-14 p-1 sm:p-2 md:p-4">
            <div className="ml-1 sm:ml-2 md:ml-10 text-xs sm:text-sm md:text-base font-beVietnam text-black">
              <span className="text-2xl md:text-4xl lg:text-6xl font-apfel font-bold text-yellow-400 block">
                74%
              </span>
              <span className="text-base sm:text-sm md:text-base">
                are more likely to order from restaurants they follow
              </span>
            </div>
          </div>
        </div>

        {/* === TOP RIGHT === */}
        <div className="flex flex-col items-center justify-center text-center sm:items-end sm:justify-start sm:text-right border border-black p-3 sm:p-4 md:p-6">
          <div className="text-2xl sm:text-lg md:text-xl lg:text-2xl font-apfel font-bold leading-snug tracking-tight mb-2 sm:mb-4 text-right">
            Facebook & Instagram Matter
          </div>
          <div className="relative mr-1 sm:mr-8 md:mr-20 lg:mr-44 mb-2 sm:mb-4 mt-2 sm:mt-4 p-1 sm:p-2 md:p-3">
            <div className="text-xs sm:text-sm md:text-base font-beVietnam text-black text-center sm:text-left">
              <span className="text-2xl md:text-4xl lg:text-6xl font-apfel font-bold text-yellow-400 block">
                49%
              </span>
              <span className="text-base sm:text-sm md:text-base">
                use Facebook to search for restaurant info
              </span>
            </div>
          </div>
          <div className="relative ml-3 sm:ml-6 md:ml-14 p-1 sm:p-2 md:p-4">
            <div className="ml-1 sm:ml-2 md:ml-10 text-xs sm:text-sm md:text-base font-beVietnam text-black text-center sm:text-left">
              <span className="text-2xl md:text-4xl lg:text-6xl font-apfel font-bold text-yellow-400 block">
                62%
              </span>
              <span className="text-base sm:text-sm md:text-base">
                of older users engage with restaurants on Facebook
              </span>
            </div>
          </div>
        </div>

        {/* === BOTTOM LEFT === */}
        <div className="flex flex-col items-center justify-center text-center sm:items-start sm:justify-end sm:text-left border border-black p-3 sm:p-4 md:p-6">
          <div className="text-2xl sm:text-lg md:text-xl lg:text-2xl font-apfel font-bold leading-snug tracking-tight mb-2 sm:mb-4">
            Your Website Speed Affects Sales
          </div>
          <div className="relative ml-1 sm:ml-2 md:ml-6 mb-2 sm:mb-4 mt-2 sm:mt-4 p-1 sm:p-2 md:p-3">
            <div>
              <span className="text-2xl md:text-4xl lg:text-6xl font-apfel font-bold text-yellow-400 block">
                1-sec
              </span>
              <span className="text-base sm:text-sm md:text-base">
                faster load time = 2% higher Diners
              </span>
            </div>
          </div>
          <div className="relative ml-3 sm:ml-6 md:ml-14 p-1 sm:p-2 md:p-4">
            <div className="ml-1 sm:ml-2 md:ml-10 text-xs sm:text-sm md:text-base font-beVietnam text-black">
              <span className="text-2xl md:text-4xl lg:text-6xl font-apfel font-bold text-yellow-400 block">
                47%
              </span>
              <span className="text-base sm:text-sm md:text-base">
                expect sites to load in 2 seconds or less
              </span>
            </div>
          </div>
        </div>

        {/* === BOTTOM RIGHT === */}
        <div className="flex flex-col items-center justify-center text-center sm:items-end sm:justify-end sm:text-right border border-black p-3 sm:p-4 md:p-6">
          <div className="text-2xl sm:text-lg md:text-xl lg:text-2xl font-apfel font-bold leading-snug tracking-tight mb-2 sm:mb-4 text-right">
            Online Ordering & Growth Trends
          </div>
          <div className="relative mr-1 sm:mr-4 md:mr-16 lg:mr-32 mb-2 sm:mb-4 mt-2 sm:mt-4 p-1 sm:p-2 md:p-3">
            <div className="text-xs sm:text-sm md:text-base font-beVietnam text-black text-center sm:text-left">
              <span className="text-2xl md:text-4xl lg:text-6xl font-apfel font-bold text-yellow-400 block">
                $86B
              </span>
              <span className="text-base sm:text-sm md:text-base">
                Online ordering projected to hit
              </span>
            </div>
          </div>
          <div className="relative ml-3 sm:ml-6 md:ml-12 p-1 sm:p-2">
            <div className="mr-1 sm:mr-8 md:mr-32 text-xs sm:text-sm md:text-base font-beVietnam text-black text-center sm:text-left">
              <span className="text-2xl md:text-4xl lg:text-6xl font-apfel font-bold text-yellow-400 block">
                37%
              </span>
              <span className="text-base sm:text-sm md:text-base">
                of guests expect loyalty programs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

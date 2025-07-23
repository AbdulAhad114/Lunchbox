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
      className={`relative w-full h-full pt-14 min-h-screen bg-white/30 overflow-hidden px-2 py-10 sm:py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {showCursor && <SplashCursor />}

      {/* Center Floating Box - now above grid, responsive position */}
      <div
        className="absolute top-1 left-1/2 sm:top-6 sm:left-1/2 md:top-1/2 -translate-x-1/2 sm:-translate-y-1/2
          w-full sm:w-56 max-w-xs w-60 sm:max-w-none h-30 flex flex-col justify-center items-center cursor-pointer
          bg-white font-beVietnam font-bold tracking-tight 
          border-2 border-black rounded-xl shadow-lg z-20 mb-2 sm:mb-0 mx-auto"
      >
        <div className="flex items-start space-x-2">
          <span className="text-lg sm:text-2xl md:text-3xl text-primary-blue mt-1 leading-none">
            Real
          </span>
          <span className="text-2xl sm:text-4xl md:text-5xl leading-tight font-apfel font-bold text-yellow-400">
            Stats
          </span>
        </div>
        <div className="flex items-start space-x-2 -mt-1">
          <span className="text-lg sm:text-2xl md:text-3xl text-primary-blue mt-1 leading-none">
            Real
          </span>
          <span className="text-2xl sm:text-4xl md:text-5xl leading-tight font-apfel font-bold text-yellow-400">
            Talk
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 w-full border-2 border-black rounded-xl bg-white bg-opacity-60 overflow-hidden">
        {/* === TOP LEFT === */}
        <div className="flex flex-col justify-start items-start border sm:border border-black p-4">
          <div className="text-lg sm:text-xl md:text-2xl font-apfel font-bold leading-snug tracking-tight">
            Social Media = The New Front Door
          </div>
          <div className="relative ml-2 sm:ml-6 mb-4 mt-4 p-2 sm:p-3">
            <div className="text-xs sm:text-sm md:text-base font-beVietnam text-black">
              <span className="text-2xl sm:text-4xl md:text-6xl font-apfel font-bold text-yellow-400">
                88%
              </span>
              <br />
              trust social media and reviews when deciding where to eat
            </div>
          </div>
          <div className="relative ml-6 sm:ml-14 p-2 sm:p-4">
            <div className="ml-2 sm:ml-10 text-xs sm:text-sm md:text-base font-beVietnam text-black">
              <span className="text-2xl sm:text-4xl md:text-6xl font-apfel font-bold text-yellow-400">
                74%
              </span>
              <br />
              are more likely to order from restaurants they follow
            </div>
          </div>
        </div>

        {/* === TOP RIGHT === */}
        <div className="flex flex-col justify-start items-end border border-black p-4">
          <div className="text-lg sm:text-xl md:text-2xl font-apfel font-bold leading-snug tracking-tight">
            Facebook & Instagram Matter
          </div>
          <div className="relative md:mr-44 sm:mr-20 mb-4 mt-4 p-2 sm:p-3">
            <div className="text-xs sm:text-sm md:text-base font-beVietnam text-black">
              <span className="text-2xl sm:text-4xl md:text-6xl font-apfel font-bold text-yellow-400">
                49%
              </span>
              <br />
              use Facebook to search for restaurant info
            </div>
          </div>
          <div className="relative ml-6 sm:ml-14 p-2 sm:p-4">
            <div className="ml-2 sm:ml-10 text-xs sm:text-sm md:text-base font-beVietnam text-black">
              <span className="text-2xl sm:text-4xl md:text-6xl font-apfel font-bold text-yellow-400">
                62%
              </span>
              <br />
              of older users engage with restaurants on Facebook
            </div>
          </div>
        </div>

        {/* === BOTTOM LEFT === */}
        <div className="flex flex-col justify-end items-start border border-black p-4">
          <div className="text-lg sm:text-xl md:text-2xl font-apfel font-bold leading-snug tracking-tight">
            Your Website Speed Affects Sales
          </div>
          <div className="relative ml-2 sm:ml-6 mb-4 mt-4 p-2 sm:p-3">
            <div className="text-xs sm:text-sm md:text-base font-beVietnam text-black">
              <span className="text-2xl sm:text-4xl md:text-6xl font-apfel font-bold text-yellow-400">
                1-sec
              </span>
              <br />
              faster load time = 2% higher Diners
            </div>
          </div>
          <div className="relative ml-6 sm:ml-14 p-2 sm:p-4">
            <div className="ml-2 sm:ml-10 text-xs sm:text-sm md:text-base font-beVietnam text-black">
              <span className="text-2xl sm:text-4xl md:text-6xl font-apfel font-bold text-yellow-400">
                47%
              </span>
              <br />
              expect sites to load in 2 seconds or less
            </div>
          </div>
        </div>

        {/* === BOTTOM RIGHT === */}
        <div className="flex flex-col justify-end items-end border border-black p-4">
          <div className="text-lg sm:text-xl md:text-2xl font-apfel font-bold leading-snug tracking-tight">
            Online Ordering & Growth Trends
          </div>
          <div className="relative md:mr-70 mb-4 mt-4 p-2 sm:p-3">
            <div className="text-xs sm:text-sm md:text-base font-beVietnam text-black">
              <span className="text-2xl sm:text-4xl md:text-6xl font-apfel font-bold text-yellow-400">
                $86B
              </span>
              <br />
              Online ordering projected to hit
            </div>
          </div>
          <div className="relative ml-6 sm:mr-26 p-2 sm:p-2">
            <div className="md:mr-32 text-xs sm:text-sm md:text-base font-beVietnam text-black">
              <span className="text-2xl sm:text-4xl md:text-6xl font-apfel font-bold text-yellow-400">
                37%
              </span>
              <br />
              of guests expect loyalty programs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

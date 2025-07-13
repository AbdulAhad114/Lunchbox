import React, { useRef, useEffect } from "react";
import SplashCursor from "./SplashCursor";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function StatsSection() {
  
  const sectionRef = useRef<HTMLDivElement>(null);

  // Only show SplashCursor when mouse is inside the section
  const [showCursor, setShowCursor] = React.useState(false);

  const { ref, isVisible } = useScrollAnimation();

  // Combine refs so both mouse events and scroll animation work
  const setCombinedRef = (node: HTMLDivElement | null) => {
    sectionRef.current = node;
    if (ref && 'current' in ref) {
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
      className={`relative w-full h-screen bg-white overflow-hidden px-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Splash Cursor Background */}
      {showCursor && <SplashCursor />}

      {/* Center box without animated border */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-52 h-20 flex justify-center items-center cursor-pointer
          bg-white text-black text-sm md:text-lg font-beVietnam font-bold leading-snug tracking-tight uppercase border-2 border-black rounded-xl shadow-lg z-20"
      >
        <span>BY THE NUMBERS</span>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 w-full h-full border-2 border-black rounded-xl bg-white bg-opacity-60 overflow-hidden">
        {/* Top Left */}
        <div className="flex flex-col justify-top items-start border-b-2 border-r-2 border-black p-8">
          <div className="text-2xl md:text-6xl font-apfel font-bold leading-snug tracking-tight">350+</div>
          <div className="text-sm md:text-lg font-beVietnam font-light">Partners</div>
        </div>
        {/* Top Right */}
        <div className="flex flex-col justify-top items-end border-b-2 border-black p-8">
          <div className="text-2xl md:text-6xl font-apfel font-bold leading-snug tracking-tight">900,000+</div>
          <div className="text-sm md:text-lg font-beVietnam font-light">People impacted</div>
        </div>
        {/* Bottom Left */}
        <div className="flex flex-col justify-end items-start border-r-2 border-black p-8">
          <div className="text-2xl md:text-6xl font-apfel font-bold leading-snug tracking-tight">90%</div>
          <div className="text-sm md:text-lg font-beVietnam font-light">Partner Retention</div>
        </div>
        {/* Bottom Right */}
        <div className="flex flex-col justify-end items-end p-8">
          <div className="text-2xl md:text-6xl font-apfel font-bold leading-snug tracking-tight">19,000+</div>
          <div className="text-sm md:text-lg font-beVietnam font-light">Hours in the business</div>
        </div>
      </div>

      
    </section>
  );
}

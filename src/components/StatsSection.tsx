import React, { useRef, useEffect } from "react";
import SplashCursor from "./SplashCursor";

export default function StatsSection() {
  
  const sectionRef = useRef<HTMLDivElement>(null);

  // Only show SplashCursor when mouse is inside the section
  const [showCursor, setShowCursor] = React.useState(false);

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
    <section ref={sectionRef} className="relative w-full h-screen bg-white overflow-hidden px-2">
      {/* Splash Cursor Background */}
      {showCursor && <SplashCursor />}

      {/* Center box without animated border */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-52 h-20 flex justify-center items-center cursor-pointer
          bg-white text-black text-xl font-apfel font-bold uppercase tracking-wide
          border-2 border-black rounded-xl shadow-lg z-20"
      >
        <span>BY THE NUMBERS</span>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 w-full h-full border-2 border-black rounded-xl bg-white bg-opacity-60 overflow-hidden">
        {/* Top Left */}
        <div className="flex flex-col justify-top items-start border-b-2 border-r-2 border-black p-8">
          <div className="text-4xl font-bold">350+</div>
          <div className="font-semibold text-lg">Partners</div>
        </div>
        {/* Top Right */}
        <div className="flex flex-col justify-top items-end border-b-2 border-black p-8">
          <div className="text-4xl font-bold">900,000+</div>
          <div className="font-semibold text-lg">People impacted</div>
        </div>
        {/* Bottom Left */}
        <div className="flex flex-col justify-end items-start border-r-2 border-black p-8">
          <div className="text-4xl font-bold">90%</div>
          <div className="font-semibold text-lg">Partner Retention</div>
        </div>
        {/* Bottom Right */}
        <div className="flex flex-col justify-end items-end p-8">
          <div className="text-4xl font-bold">19,000+</div>
          <div className="font-semibold text-lg">Hours in the business</div>
        </div>
      </div>

      
    </section>
  );
}

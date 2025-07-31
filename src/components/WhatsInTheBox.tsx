import { useRef, useEffect, useState } from "react";

export default function WhatsInTheBox() {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    if (!headerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="whats-in-the-box"
      ref={headerRef}
      className={`text-center z-10 pt-20 mb-[-25px] md:mb-[-80px] z-10 border-t border-primary-blue-500`}
    >
      <h2
        className={`text-4xl md:text-6xl font-apfel font-bold text-primary-blue mb-2 leading-snug tracking-tight transition-all duration-1000 ${
          headerVisible ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-10"
        }`}
      >
        What's in the Box?
      </h2>

      <h2
        className={`text-lg md:text-2xl font-bold text-gray-900 mb-2 leading-snug bg-gradient-to-r from-primary-blue to-brand-yellow bg-clip-text text-transparent transition-all duration-1000 px-4 md:px-0 ${
          headerVisible ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-10"
        }`}
      >
        We Handle the Online. <span>You Handle the Kitchen.</span>
      </h2>

      <p
        className={`text-sm md:text-lg font-beVietnam font-light text-black-600 max-w-2xl leading-relaxed text-center mx-auto mb-6 px-4 transition-all duration-1000 ${
          headerVisible ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-10"
        }`}
      >
        We don't just help, we handle it. You’ll never need to worry about posting again. Your Google reviews are expertly 
        managed. Your website is built to attract and convert orders. Your brand stays active, polished, and visible 
        every single week.
      </p>
    </div>
  );
}

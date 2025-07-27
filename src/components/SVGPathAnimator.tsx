import { useEffect, useRef } from "react";

export default function SVGPathAnimator() {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength.toString();
    path.style.strokeDashoffset = pathLength.toString();

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startOffset = windowHeight * 0.3;
      const endOffset = rect.height; // make it responsive to container height

      const distanceScrolled = windowHeight - rect.top;

      const progress = Math.min(Math.max((distanceScrolled - startOffset) / (endOffset - startOffset), 0), 1);

      path.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
    >
      <svg
        viewBox="0 0 996 490"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          ref={pathRef}
          d="M-7.99995 2C112 2 114 167.638 226 210.447C338 253.256 440.151 118.581 510 87.3888C746 -18 904.538 212.781 956.5 164.94C1008.46 117.099 1002.85 -17.1722 939.179 70.5511C875.514 158.274 852 178 908 210.447C964 242.895 214.769 486 98.4745 486C-17.8204 486 -54.7135 388.222 -8 356"
          stroke="#0339A6"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    </div>
  );
}

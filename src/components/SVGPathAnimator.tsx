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

      // Begin animation when top of container enters the viewport
      const startOffset = windowHeight * 0.4;
      const endOffset = windowHeight * 1.2;

      const distanceScrolled = windowHeight - rect.top;

      const progress = Math.min(Math.max((distanceScrolled - startOffset) / (endOffset - startOffset), 0), 1);

      path.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
      <svg
        width="1000"
        height="518"
        viewBox="0 0 1000 518"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <path
          ref={pathRef}
          d="M-30 0C-30 0 22.5428 145.445 172 200.267C321.457 255.088 508 256.118 616 210.352C820 123.906 926 263.661 968 210.352C1010 157.044 1004 10.0854 954 105.176C904 200.267 805.511 16.3435 830 191.59C854.489 366.837 450 510 356 510C262 510 246.242 446.523 284 410.619C473.88 230.062 1218 453.842 1218 453.842"
          stroke="#26439B"
          strokeWidth="16"
          fill="none"
        />
      </svg>
    </div>
  );
}

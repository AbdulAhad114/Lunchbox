// components/FAQPathAnimator.tsx
"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FAQPathAnimator() {
  const ref = useRef(null);

  // Hook into scroll for path animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate stroke-dashoffset from full length to 0
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        ref={ref}
        width="1000"
        height="554"
        viewBox="0 0 1000 554"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <motion.path
          d="M1218 0C1218 0 1153 145.445 968.09 200.267C968.09 200.267 892 222 829.526 180C767.051 138 904 118 892 84C880 50 642 146 792 48C942 -50 788 152.597 702 242.298C616 332 491.902 235.397 418.782 210.352C166.397 123.906 103.256 263.661 51.2948 210.352C-0.66674 157.044 6.75638 10.0854 68.6154 105.176C130.474 200.267 184.322 16.3435 154.026 191.59C123.729 366.837 624.154 510 740.449 510C856.744 510 876.239 446.523 829.526 410.619C594.61 230.062 -290 546 -290 546"
          stroke="#26439B"
          strokeWidth={16}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2500"
          strokeDashoffset="2500"
          style={{
            pathLength,
          }}
        />
      </svg>
    </div>
  );
}

import { useEffect, useRef } from "react";
import { AnimationPlaybackControls, animate, useScroll } from "framer-motion";

function DominoAnimation() {
  const animControls = useRef<AnimationPlaybackControls>();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Get scroll progress relative to the animation section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (yProgress) => {
      if (!animControls.current) return;
      // Clamp yProgress between 0 and 1
      const progress = Math.max(0, Math.min(1, yProgress));
      animControls.current.time = progress * animControls.current.duration;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    animControls.current = animate([
      [".ball", { left: 52 }, { ease: "easeOut", duration: 0.25 }],
      [".ball", { left: 70 }, { ease: "easeOut", duration: 0.7, at: 0.251 }],
      [".domino-1", { rotate: 24 }, { duration: 0.25, ease: "easeIn", at: 0.25 }],

      [".domino-1", { rotate: 45 }, { duration: 0.25, ease: "easeIn", at: 0.5 }],
      [
        ".domino-2",
        { rotate: 24 },
        { duration: 0.25, ease: "easeIn", at: 0.501 }
      ],

      [".domino-3", { rotate: 24 }, { duration: 0.25, ease: "easeIn", at: 0.75 }],
      [
        ".domino-2",
        { rotate: 45 },
        { duration: 0.25, ease: "easeIn", at: 0.751 }
      ],
      [
        ".domino-1",
        { rotate: 58 },
        { duration: 0.25, ease: "easeIn", at: 0.751 }
      ],

      [".domino-4", { rotate: 90 }, { duration: 0.25, ease: "easeIn", at: 1.0 }],
      [
        ".domino-3",
        { rotate: 69 },
        { duration: 0.25, ease: "easeIn", at: 1.001 }
      ],
      [
        ".domino-2",
        { rotate: 67 },
        { duration: 0.25, ease: "easeIn", at: 1.001 }
      ],
      [
        ".domino-1",
        { rotate: 67 },
        { duration: 0.25, ease: "easeIn", at: 1.001 }
      ]
    ]);
    animControls.current.pause();
  }, []);

  // Height of the pinned section (animation duration)
  // Reduce PIN_HEIGHT to minimize white space after animation
  const PIN_HEIGHT = 3000; // px, adjust as needed for scroll feel

  return (
    <div className="bg-white">
      <style>{`
        /* Desktop styles (default) */
        .canvas {
          position: relative;
          width: 650px;
          height: 200px;
          overflow: hidden;
          margin-top: 32px;
          margin-bottom: 0;
        }

        .ball {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50px;
          background-color: #F2E416;
          left: 0;
          bottom: 0;
        }

        .domino {
          position: absolute;
          bottom: 0;
          width: 40px;
          height: 150px;
          background-color: #0339A6;
          transform-origin: bottom right;
        }

        .domino:nth-child(2) { left: 150px; }
        .domino:nth-child(3) { left: 250px; }
        .domino:nth-child(4) { left: 350px; }
        .domino:nth-child(5) { left: 450px; }

        /* Tablet styles */
        @media (max-width: 768px) {
          .canvas {
            width: 450px;
            height: 160px;
          }

          .ball {
            width: 70px;
            height: 70px;
            border-radius: 35px;
          }

          .domino {
            width: 28px;
            height: 120px;
          }

          .domino:nth-child(2) { left: 110px; }
          .domino:nth-child(3) { left: 180px; }
          .domino:nth-child(4) { left: 250px; }
          .domino:nth-child(5) { left: 320px; }
        }

        /* Mobile styles */
        @media (max-width: 480px) {
          .canvas {
            width: 320px;
            height: 120px;
          }

          .ball {
            width: 50px;
            height: 50px;
            border-radius: 25px;
          }

          .domino {
            width: 20px;
            height: 90px;
          }

          .domino:nth-child(2) { left: 90px; }
          .domino:nth-child(3) { left: 130px; }
          .domino:nth-child(4) { left: 180px; }
          .domino:nth-child(5) { left: 230px; }
        }

        /* Small mobile styles */
        @media (max-width: 320px) {
          .canvas {
            width: 280px;
            height: 100px;
          }

          .ball {
            width: 40px;
            height: 40px;
            border-radius: 20px;
          }

          .domino {
            width: 18px;
            height: 75px;
          }

          .domino:nth-child(2) { left: 85px; }
          .domino:nth-child(3) { left: 115px; }
          .domino:nth-child(4) { left: 160px; }
          .domino:nth-child(5) { left: 205px; }
        }

        .pin-section {
          position: relative;
          height: ${PIN_HEIGHT}px;
        }
        .pin-content {
          position: sticky;
          top: 0;
          z-index: 10;
          background: white;
        }
      `}</style>

      {/* Pinning Section */}
      <div ref={sectionRef} className="pin-section">
        <div className="pin-content flex flex-col items-center justify-center min-h-screen">
          <div className="pt-32 text-center w-full px-4">
            <h3 className="text-sm md:text-lg z-99 font-semibold tracking-wider mb-2" style={{color: '#F2E416'}}>
              THE LUNCHBOX WAY
            </h3>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight" style={{color: '#0339A6'}}>
              One Simple System.<br />Built for Busy Restaurants.
            </h2>
            <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4 leading-relaxed mb-4 md:mb-0" style={{color: '#666'}}>
              We've cut the fluff. You don't need complexity, you need consistency. 
              Here's how we make your digital presence work for you:
            </p>

            {/* Animation Canvas */}
            <div className="canvas mx-auto mt-4 md:mt-0 mb-0">
                <div className="ball"></div>
                <div className="domino domino-1"></div>
                <div className="domino domino-2"></div>
                <div className="domino domino-3"></div>
                <div className="domino domino-4"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Spacer to allow scroll to next section after animation */}
      {/* Reduce or remove the spacer to minimize white space */}
      <div
        style={{
          height: typeof window !== "undefined" && window.innerWidth < 640 ? "20px" : "100px"
        }}
      ></div>
      {/* Next section content can go here */}
    </div>
  );
}

export default DominoAnimation;
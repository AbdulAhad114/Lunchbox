import { useEffect, useRef, useState } from "react";
import { AnimationPlaybackControls, animate, useScroll } from "framer-motion";


const STACK_CONTAINERS = [
  {
    heading: "Sign Up & Onboarding",
    text: "You sign up, we handle the rest.",
  },
  {
    heading: "Start with the Small Box",
    text: "Your digital foundation: website, socials, reviews, all set up and managed.",
  },
  {
    heading: "Plan Your Growth",
    text: "We walk you through timelines for Medium and Large Boxes, suitable for you.",
  },
  {
    heading: "More Diners",
    text: "You run the kitchen. We run your digital. Simple as that.",
  },
  {
    heading: "Monthly Performance Reports",
    text: "We keep you in the loop with simple, no-fluff reports every month, so you always know how your restaurant is growing online.",
  },
  {
    heading: "No Contracts, No Catch",
    text: "Stay because you love the results, not because you’re stuck. You’re free to cancel anytime.",
  },
];

// We'll use a fixed height for each stack container for consistent spacing
// Reduce the height and the vertical gap for less space between containers
const STACK_CONTAINER_HEIGHT = 100; // px, reduced from 110
const STACK_CONTAINER_GAP = 24; // px, reduced from 40
const STACK_CONTAINER_WIDTH = 480; // px, match top container

function DominoAnimation() {
  const animControls = useRef<AnimationPlaybackControls>();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [topContainerTilt, setTopContainerTilt] = useState(-8);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (yProgress) => {
      if (!animControls.current) return;
      const progress = Math.max(0, Math.min(1, yProgress));
      animControls.current.time = progress * animControls.current.duration;

      if (progress > 0.99) {
        setTopContainerTilt(-10);
      } else if (progress > 0.96) {
        setTopContainerTilt(-12);
      } else {
        setTopContainerTilt(-8);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    animControls.current = animate([
      [".domino-1", { rotate: 24 }, { duration: 0.25, ease: "easeIn", at: 0.25 }],
      [".domino-1", { rotate: 45 }, { duration: 0.25, ease: "easeIn", at: 0.5 }],
      [".domino-2", { rotate: 24 }, { duration: 0.25, ease: "easeIn", at: 0.501 }],
      [".domino-3", { rotate: 24 }, { duration: 0.25, ease: "easeIn", at: 0.75 }],
      [".domino-2", { rotate: 45 }, { duration: 0.25, ease: "easeIn", at: 0.751 }],
      [".domino-1", { rotate: 58 }, { duration: 0.25, ease: "easeIn", at: 0.751 }],
      [".domino-4", { rotate: 70 }, { duration: 0.3, ease: "easeIn", at: 0.85 }],
      [".domino-3", { rotate: 69 }, { duration: 0.25, ease: "easeIn", at: 0.851 }],
      [".domino-2", { rotate: 67 }, { duration: 0.25, ease: "easeIn", at: 0.851 }],
      [".domino-1", { rotate: 67 }, { duration: 0.25, ease: "easeIn", at: 0.851 }],
      [".ball", { left: "580px" }, { ease: "easeOut", duration: 0.4, at: 0.9 }],
      [".ball", { left: "1000px" }, { ease: "easeInOut", duration: 0.3, at: 0.95 }],
      [".ball", { bottom: "-300px", left: "700px" }, { ease: "easeIn", duration: 0.8, at: 0.98 }]
    ]);
    animControls.current.pause();
  }, []);

  // Move the stack-section (including topcontainer) further UP
  // and increase the pin-section height to avoid overlap with footer
  const PIN_HEIGHT = 6000; // increased from 5400

  // Move the stack-section and stair-stack up by reducing marginTop and top offset
  const STACK_SECTION_MARGIN_TOP = 160; // px, was 180
  const STAIR_STACK_TOP_OFFSET = 40; // px, was 60

  // The top offset for the first stack-container and top-container
  const STACK_TOP_OFFSET = 160; // px, was 200

  return (
    <div className="bg-white">
      <style>{`
        .canvas {
          position: relative;
          width: 1000px;
          height: 200px;
          overflow: visible;
          margin-top: 32px;
        }

        .ball {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50px;
          background-color: #F2E416;
          left: 460px;
          bottom: 0;
          transition: none;
          z-index: 2;
        }

        .domino {
          position: absolute;
          bottom: 0;
          width: 40px;
          height: 150px;
          background-color: #0339A6;
          transform-origin: bottom right;
        }
        .domino:nth-child(2) { left: 80px; }
        .domino:nth-child(3) { left: 180px; }
        .domino:nth-child(4) { left: 280px; }
        .domino:nth-child(5) { left: 380px; }

        .stack-section {
          position: relative;
          width: 100%;
          min-height: 900px;
          margin-top: ${STACK_SECTION_MARGIN_TOP}px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stair-stack {
          position: relative;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          top: ${STAIR_STACK_TOP_OFFSET}px;
        }
        .stack-container {
          position: absolute;
          width: ${STACK_CONTAINER_WIDTH}px;
          max-width: 90vw;
          background: #fff;
          border: 2px solid #0339A6;
          border-radius: 18px;
          box-shadow: 0 2px 12px rgba(3,57,166,0.07);
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: box-shadow 0.2s, top 0.3s, left 0.3s;
          z-index: 1;
          min-height: ${STACK_CONTAINER_HEIGHT}px;
          box-sizing: border-box;
        }
        .stack-container h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0339A6;
          margin-bottom: 6px;
        }
        .stack-container p {
          font-size: 14px;
          color: #444;
        }

        .stack-top-container {
          position: absolute;
          left: 60%;
          transform-origin: right top;
          transform: rotate(${topContainerTilt}deg);
          width: ${STACK_CONTAINER_WIDTH}px;
          background: #fff;
          border: 2.5px solid #F2E416;
          border-radius: 20px;
          box-shadow: 0 4px 18px rgba(242,228,22,0.13);
          padding: 18px 16px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 5;
          top: ${STACK_TOP_OFFSET - 180}px;
          transition: transform 0.4s cubic-bezier(.4,2,.6,1);
        }
        .stack-top-container h4 {
          font-size: 1.22rem;
          font-weight: 800;
          color: #F2E416;
        }
        .stack-top-container p {
          font-size: 1.05rem;
          color: #0339A6;
        }

        @media (max-width: 900px) {
          .stair-stack, .stack-top-container, .stack-container {
            max-width: 98vw;
            width: 98vw;
          }
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

      <div ref={sectionRef} className="pin-section">
        <div className="pin-content flex flex-col items-center justify-center min-h-screen">
          <div className="pt-32 text-center w-full px-4 h-[200vh]">
            <h3 className="text-sm md:text-lg font-semibold tracking-wider mb-2" style={{ color: '#F2E416' }}>
              THE LUNCHBOX WAY
            </h3>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ color: '#0339A6' }}>
              One Simple System.<br />Built for Busy Restaurants.
            </h2>
            <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4 leading-relaxed mb-4" style={{ color: '#666' }}>
              We've cut the fluff. You don't need complexity, you need consistency.
              Here's how we make your digital presence work for you:
            </p>

            <div className="canvas mx-auto mt-4">
              <div className="ball"></div>
              <div className="domino domino-1"></div>
              <div className="domino domino-2"></div>
              <div className="domino domino-3"></div>
              <div className="domino domino-4"></div>
            </div>

            <div className="stack-section">
              <div
                className="stair-stack"
                style={{
                  // Use the fixed height for each container for consistent spacing
                  // Add the gap between containers to the total height
                  height: 120 + (STACK_CONTAINER_HEIGHT + STACK_CONTAINER_GAP) * STACK_CONTAINERS.length + 100
                }}
              >
                <div
                  className="stack-top-container"
                  style={{
                    transform: `rotate(${topContainerTilt}deg)`
                  }}
                >
                  <h4>Kickoff Call: </h4>
                  <p>We learn about your restaurant and show you how Lunchbox works.</p>
                </div>

                {STACK_CONTAINERS.map((item, idx) => (
                  <div
                    className="stack-container"
                    key={idx}
                    style={{
                      // Use reduced vertical spacing for all containers, and move up
                      top: (STACK_CONTAINER_HEIGHT + STACK_CONTAINER_GAP) * idx + STACK_TOP_OFFSET,
                      right: 110 * idx - 160,
                      zIndex: STACK_CONTAINERS.length - idx,
                    }}
                  >
                    <h4>{item.heading}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Increase the bottom height to avoid overlap with footer */}
      <div style={{ height: typeof window !== "undefined" && window.innerWidth < 640 ? "320px" : "480px" }}></div>
    </div>
  );
}

export default DominoAnimation;

import React, { useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STACK_CONTAINERS = [
  { heading: "Kickoff Call", text: "We learn about your restaurant and show you how Lunchbox works." },
  { heading: "Sign Up & Onboarding", text: "You sign up, we handle the rest." },
  { heading: "Start with the Small Box", text: "Your digital foundation: website, socials, reviews, all set up and managed." },
  { heading: "Plan Your Growth", text: "We walk you through timelines for Medium and Large Boxes, suitable for you." },
  { heading: "More Diners", text: "You run the kitchen. We run your digital. Simple as that." },
  { heading: "Monthly Performance Reports", text: "We keep you in the loop with simple, no-fluff reports every month, so you always know how your restaurant is growing online." },
  { heading: "No Contracts, No Catch", text: "Stay because you love the results, not because you’re stuck. You’re free to cancel anytime." },
];

function ProcessWay() {
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stickySection = stickyRef.current;
    const cards = cardsRef.current;
    const countContainer = countRef.current;
    const totalCards = cards.length;
    const stickyHeight = window.innerHeight * 7;

    const getRadius = () =>
      window.innerWidth < 900 ? window.innerWidth * 7.5 : window.innerWidth * 2.5;

    const arcAngle = Math.PI * 0.4;
    const startAngle = Math.PI / 2 - arcAngle / 2;

    const positionCards = (progress = 0) => {
      const radius = getRadius();
      const totalTravel = 1 + totalCards / 7.5;
      const adjustedProgress = (progress * totalTravel - 1) * 0.75;

      cards.forEach((card, i) => {
        if (!card) return;
        const normalizedProgress = (totalCards - 1 - i) / totalCards;
        const cardProgress = normalizedProgress + adjustedProgress;
        const angle = startAngle + arcAngle * cardProgress;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

        gsap.set(card, {
          x,
          y: -y + radius,
          rotation: -rotation,
          transformOrigin: "center center",
        });
      });
    };

    ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        positionCards(self.progress);
      },
    });

    positionCards(0);
  }, []);

  return (
    <>
      <section className="relative intro w-[100vw] h-[100vh] overflow-hidden">
        <div className="text-center w-full px-4 pt-36 mt-12">
          <h3 className="text-base md:text-lg font-semibold tracking-wider mb-2 text-brand-yellow ">
            THE LUNCHBOX WAY
          </h3>
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-apfel font-bold mb-4 leading-tight text-primary-blue">
            One Simple System.<br />Built for Busy Restaurants.
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4 leading-relaxed mb-4 text-black">
            We've cut the fluff. You don't need complexity, you need consistency.
            Here's how we make your digital presence work for you:
          </p>
        </div>
      </section>
      <section ref={stickyRef} className="relative steps w-[100vw] h-[100vh] overflow-hidden bg-brand-yellow">
        <div className="step-counter absolute flex flex-col m-8">
          <div className="counter-title absolute w-[1200px] h-[150px] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]">
            <h1 className="w-full relative text-[#000] uppercase text-primary-blue font-apfel font-bold text-[150px] leading-[1] tracking-[-0.04em] will-change-transform">
              Steps
            </h1>
          </div>
          <div
            ref={countRef}
            className="count absolute w-[1200px] h-[150px] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] top-[-10px]"
          >
            <div className="count-container relative translate-y-[150px] will-change-transform">
              {STACK_CONTAINERS.map((_, index) => (
                <h3 key={index}>{String(index + 1).padStart(2, "0")}</h3>
              ))}
            </div>
          </div>
        </div>

        <div className="cards absolute top-[27.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[600px] will-change-transform">
          {STACK_CONTAINERS.map((step, index) => (
            <Card
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="
                absolute
                card
                w-[500px]
                h-[550px]
                top-1/2
                left-1/2
                -ml-[250px]
                flex
                flex-col
                will-change-transform
                origin-center
                bg-white
                shadow-lg
                md:w-[475px] md:h-[500px]
              "
            >
              <CardHeader className="p-4 pb-2">
                <CardTitle className="font-apfel font-bold text-4xl md:text-[30px]">
                  {step.heading}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4">
                <p className="text-base">{step.text}</p>
              </CardContent>
              <span
                className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[300px] font-apfel font-bold text-primary-blue pointer-events-none select-none z-0"
              >
                {"0" + (index + 1)}
              </span>


            </Card>
          ))}
          {/* <div className="class-empty opacity-0"></div> */}
          <div className="class-empty opacity-0"></div>
        </div>
      </section>
    </>
  );
}

export default ProcessWay;

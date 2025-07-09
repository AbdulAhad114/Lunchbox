import React, { useEffect } from "react";
import { Smartphone, Star, Monitor, Bot, Utensils, ChefHat } from "lucide-react";
import { motion, useAnimation, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Service data with pattern widths (adjust widths as needed)
const services = [
  {
    icon: Smartphone,
    description: "Weekly posting to Facebook + Instagram",
    patternWidth: "w-56", 
  },
  {
    icon: Star,
    description: "Google review responses & reputation management",
    patternWidth: "w-32",
  },
  {
    icon: Monitor,
    description: "Website built to convert (bookings, reservations, orders)",
    patternWidth: "w-32",
  },
  {
    icon: Bot,
    description: "AI tools that power speed, humans who power results",
    patternWidth: "w-40", // smallest pattern
  },
];

// Gradients for services (using 3rd and 4th gradients as base, darkened for 1st and 2nd)
const baseGradients = [
  "from-primary-blue/95 to-brand-yellow/95", // darker for 1st
  "from-primary-blue/85 to-brand-yellow/85", // darker for 2nd
  "from-primary-blue to-brand-yellow",       // 3rd
  "from-brand-yellow to-primary-blue",       // 4th
];

// Horizontal offsets for staggered overlapping layout
const horizontalOffsets = ["ml-0", "ml-40", "ml-14", "ml-56"];

// Animation variants for fade + slide up with stagger
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const innerItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: easeOut },
  },
};

export default function WhyChooseUsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="relative py-20 bg-white overflow-hidden"
      aria-label="Why Choose Us"
    >

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Utensils className="absolute top-10 left-10 w-8 h-8 text-primary-blue/20 animate-float" style={{ animationDelay: '0s' }} />
        <ChefHat className="absolute top-40 right-32 w-10 h-10 text-brand-yellow/25 animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <Smartphone className="absolute bottom-32 right-20 w-6 h-6 text-primary-blue/20 animate-float" style={{ animationDelay: '2s' }} />
        <ChefHat className="absolute top-1/2 left-32 w-10 h-10 text-brand-yellow/25 animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <Utensils className="absolute bottom-10 left-10 w-8 h-8 text-primary-blue/20 animate-float" style={{ animationDelay: '0.5s' }} />
        <Star className="absolute top-1/3 left-1/4 w-4 h-4 text-brand-yellow/20 animate-pulse" />
        <Utensils className="absolute bottom-1/4 left-1/3 w-8 h-8 text-primary-blue/20 animate-float" style={{ animationDelay: '1s' }} />
        <Star className="absolute bottom-1/4 right-1/3 w-3 h-3 text-primary-blue/25 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fredoka text-gray-900 mb-6 leading-tight">
            We Handle the Online.{" "}
            <span className="bg-gradient-to-r from-primary-blue to-brand-yellow bg-clip-text text-transparent">
              You Handle the Kitchen.
            </span>
          </h2>
          <p className="text-xl font-poppins text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We don't just "help" — we handle it. You'll never need to worry about
            posting again. Your Google reviews? Managed. Your website? Built to
            bring in orders. Your brand? Active, polished, and visible — every
            single week.
          </p>
        </div>  

        {/* Services container with stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col gap-10"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`relative flex items-center max-w-[720px] rounded-full px-8 py-5 overflow-hidden cursor-pointer ${horizontalOffsets[i]}`}
              >
                {/* Gradient bar with full rounding */}
                <div
                  className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${baseGradients[i]} z-10`}
                  style={{ width: `calc(100% - 80px)` }}
                  aria-hidden="true"
                />

                {/* Pattern area on right with transparent background and gray diagonal stripes */}
                <div
                  className={`${service.patternWidth} absolute inset-y-0 right-0 rounded-r-full border-r border-b border-t border-gray-300 z-0`}
                  style={{
                    // right: "22px",
                    background:
                      "repeating-linear-gradient(45deg, rgba(128,128,128,0.15) 0 2px, transparent 2px 8px)",
                  }}
                  aria-hidden="true"
                />

                {/* Icon circle */}
                <motion.div
                  variants={innerItemVariants}
                  initial="hidden"
                  animate={controls}
                  className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md mr-6"
                >
                  <Icon size={28} className="text-black" />
                </motion.div>

                {/* Text with subtle pattern behind */}
                <motion.span
                  variants={innerItemVariants}
                  initial="hidden"
                  animate={controls}
                  className="relative z-10 font-beVietnam text-white text-lg font-medium"
                >
                  {service.description}
                </motion.span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action box */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-blue/10 to-brand-yellow/10 p-8 rounded-3xl max-w-4xl mx-auto border border-primary-blue/20 backdrop-blur-sm relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <p className="text-4xl font-apfel font-semibold text-black mb-4 relative z-10">
              Ready to focus on what you do best?
            </p>
            <p className="text-lg text-gray-700 relative z-10 max-w-xl mx-auto">
              Let us handle your digital presence while you create amazing food
              experiences.{" "}
              <span className="bg-gradient-to-r from-primary-blue to-brand-yellow bg-clip-text text-transparent font-semibold">
                Your customers will find you, trust you, and choose you.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

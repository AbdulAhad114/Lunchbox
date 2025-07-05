
import { useState, useEffect, useRef } from "react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0, stat4: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { key: "stat1", number: 200, label: "Partner Restaurants", suffix: "+" },
    { key: "stat2", number: 15000, label: "Social Posts Managed", suffix: "+" },
    { key: "stat3", number: 3500, label: "Reviews Handled", suffix: "+" },
    { key: "stat4", number: 150, label: "Average Engagement Boost", suffix: "%" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounters = () => {
      stats.forEach((stat) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounts(prev => ({
            ...prev,
            [stat.key]: Math.floor(start)
          }));
        }, 16);
      });
    };

    animateCounters();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden" id="stats">
      {/* Subtle brand elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-brand-yellow/5 to-primary-blue/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-tr from-primary-blue/5 to-brand-yellow/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fredoka text-gray-900 mb-4">
            By the Numbers
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-6xl md:text-7xl font-fredoka bg-gradient-to-r from-primary-blue to-brand-yellow bg-clip-text text-transparent mb-4 transition-transform duration-300 group-hover:scale-110">
                {counts[stat.key as keyof typeof counts]}{stat.suffix}
              </div>
              <div className="text-lg font-poppins text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

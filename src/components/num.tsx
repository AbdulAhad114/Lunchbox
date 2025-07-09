import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [counts, setCounts] = useState({ restaurants: 0, posts: 0, reviews: 0, engagement: 0 });

  const finalCounts = {
    restaurants: 150,
    posts: 2400,
    reviews: 850,
    engagement: 87
  };

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        restaurants: Math.floor(finalCounts.restaurants * progress),
        posts: Math.floor(finalCounts.posts * progress),
        reviews: Math.floor(finalCounts.reviews * progress),
        engagement: Math.floor(finalCounts.engagement * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section 
      ref={ref}
      className={`py-20 bg-gradient-to-br from-primary-blue to-dark-navy text-white relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Subtle brand elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-brand-yellow/5 to-primary-blue/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-tr from-primary-blue/5 to-brand-yellow/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-fredoka text-white mb-6 leading-tight">
            Growing Restaurants <span className="text-brand-yellow">By the Numbers</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="text-5xl md:text-7xl font-fredoka text-brand-yellow mb-4 group-hover:scale-110 transition-transform duration-300">
              {counts.restaurants}+
            </div>
            <div className="text-lg font-baloo text-white/90">Partner Restaurants</div>
          </div>
          
          <div className="text-center group">
            <div className="text-5xl md:text-7xl font-fredoka text-brand-yellow mb-4 group-hover:scale-110 transition-transform duration-300">
              {counts.posts.toLocaleString()}+
            </div>
            <div className="text-lg font-baloo text-white/90">Social Posts Managed</div>
          </div>
          
          <div className="text-center group">
            <div className="text-5xl md:text-7xl font-fredoka text-brand-yellow mb-4 group-hover:scale-110 transition-transform duration-300">
              {counts.reviews}+
            </div>
            <div className="text-lg font-baloo text-white/90">Reviews Handled</div>
          </div>
          
          <div className="text-center group">
            <div className="text-5xl md:text-7xl font-fredoka text-brand-yellow mb-4 group-hover:scale-110 transition-transform duration-300">
              {counts.engagement}%
            </div>
            <div className="text-lg font-baloo text-white/90">Avg. Engagement Boost</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

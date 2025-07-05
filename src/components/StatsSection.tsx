
const StatsSection = () => {
  const stats = [
    { number: "200+", label: "Partner Restaurants" },
    { number: "15,000+", label: "Social Posts Managed" },
    { number: "3,500+", label: "Reviews Handled" },
    { number: "150%", label: "Average Engagement Boost" }
  ];

  return (
    <section className="py-24 bg-white" id="stats">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fredoka text-gray-900 mb-4">
            By the Numbers
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl md:text-7xl font-fredoka bg-gradient-to-r from-primary-blue to-brand-yellow bg-clip-text text-transparent mb-4">
                {stat.number}
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

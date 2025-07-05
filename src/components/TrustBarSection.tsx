
const TrustBarSection = () => {
  const partners = [
    "Joe's Pizza Co",
    "Sunrise Cafe", 
    "Metro Bistro",
    "Corner Deli",
    "Maple Street Grill"
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Light brand elements on one side */}
      <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-brand-yellow/2 to-transparent"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-br from-primary-blue/5 to-brand-yellow/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <p className="text-center text-gray-500 font-poppins mb-8 text-sm uppercase tracking-wide">
          Trusted by Restaurants Across North America
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {partners.map((partner, index) => (
            <div key={index} className="text-lg font-baloo font-semibold text-gray-600 hover:text-primary-blue transition-colors duration-300">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;

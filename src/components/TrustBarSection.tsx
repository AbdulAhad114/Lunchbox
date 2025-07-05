
const TrustBarSection = () => {
  const partners = [
    "Joe's Pizza Co",
    "Sunrise Cafe", 
    "Metro Bistro",
    "Corner Deli",
    "Maple Street Grill"
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 font-poppins mb-8 text-sm uppercase tracking-wide">
          Trusted by Restaurants Across North America
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {partners.map((partner, index) => (
            <div key={index} className="text-lg font-baloo font-semibold text-gray-600">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;


const WhatWeDontDoSection = () => {
  const dontDo = [
    "confusing pricing",
    "one-size-fits-all packages", 
    "ignoring reviews",
    "unoriginal content",
    "locked contracts",
    "generic strategies"
  ];

  return (
    <section className="py-24 bg-dark-navy text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-fredoka text-white mb-16 leading-tight">
            What We <span className="text-brand-yellow">Don't</span> Do
          </h2>
          
          <div className="space-y-6">
            {dontDo.map((item, index) => (
              <div 
                key={index}
                className="text-2xl md:text-3xl font-baloo font-medium text-gray-300 hover:text-white transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDontDoSection;

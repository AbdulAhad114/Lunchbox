
import { X } from "lucide-react";

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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-red-100/30 to-red-200/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tl from-gray-100/40 to-gray-200/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-fredoka text-gray-900 mb-4 leading-tight">
            What We <span className="text-red-500">Don't</span> Do
          </h2>
          
          <p className="text-lg text-gray-600 font-poppins mb-12 max-w-2xl mx-auto">
            We believe in transparency. Here's what you'll never have to worry about with us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {dontDo.map((item, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-gray-700 font-baloo font-medium text-lg capitalize group-hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDontDoSection;

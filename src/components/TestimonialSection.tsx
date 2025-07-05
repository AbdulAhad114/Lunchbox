import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`py-16 bg-white relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Subtle brand pattern elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary-blue/3 to-brand-yellow/3 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tl from-brand-yellow/4 to-primary-blue/4 rounded-full blur-3xl"></div>
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary-blue rounded-full"></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-brand-yellow rounded-full"></div>
        <div className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-baloo font-semibold text-gray-800 mb-8 leading-relaxed">
            "Fantastic team, great communication, and understanding of the product and technology."
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="text-lg font-poppins text-gray-600 mb-2">
              Sarah Mitchell, Owner
            </div>
            <div className="text-primary-blue font-poppins font-medium">
              Bella Vista Italian Kitchen
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

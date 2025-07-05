
const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-blue/5 to-brand-yellow/5">
      <div className="container mx-auto px-6">
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

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Card, CardContent } from "@/components/ui/card";
import { Instagram, MessageSquare, Star, TrendingUp } from "lucide-react";

const PricingAndValue = () => {
  const services = [
    {
      icon: Instagram,
      title: "Weekly Social Media",
      description: "Fresh content & consistent posting that keeps your restaurant top-of-mind"
    },
    {
      icon: Star,
      title: "Google Review Management",
      description: "We monitor, respond, and help you build that 5-star reputation"
    },
    {
      icon: TrendingUp,
      title: "AI-Assisted Strategy",
      description: "Smart insights, human touch — the perfect recipe for growth"
    }
  ];

  return (
    <section className="bg-white" id="services">
        <Navigation />
      <div className="pt-44 pb-12 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-fredoka text-gray-800 mb-6">
            Everything You Need. One Price. No BS.
          </h2>
          
          <div className="bg-gradient-to-r from-primary-blue to-brand-yellow p-8 rounded-3xl shadow-xl inline-block mb-8">
            <p className="text-3xl md:text-4xl font-baloo font-bold text-white">
              $499/month
            </p>
            <p className="text-white font-poppins text-lg mt-2">
              for professional, consistent digital presence management
            </p>
            <p className="text-white/90 font-poppins text-sm mt-1">
              no fluff, no nonsense
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-brand-yellow/30 bg-white hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-brand-yellow/20 to-primary-blue/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={36} className="text-primary-blue" />
                </div>
                <h3 className="text-xl font-baloo font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-poppins leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-baloo text-gray-600 max-w-2xl mx-auto">
            While you're perfecting recipes, we're perfecting your online presence. 
            <span className="text-primary-blue font-semibold"> Simple, effective, and designed just for restaurants.</span>
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PricingAndValue;

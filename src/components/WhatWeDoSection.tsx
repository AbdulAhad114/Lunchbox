
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, MessageSquare, Star, TrendingUp } from "lucide-react";

const WhatWeDoSection = () => {
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
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-fredoka text-gray-800 mb-6">
            You Handle the <span className="text-electric">Stoves.</span>
            <br />
            We'll Handle the <span className="text-boldblue">Screens.</span>
          </h2>
          
          <div className="bg-gradient-to-r from-electric to-boldblue p-8 rounded-3xl shadow-xl inline-block mb-8">
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
              className="group hover:shadow-blue transition-all duration-300 border-2 hover:border-electric/30 bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-electric/20 to-boldblue/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={36} className="text-boldblue" />
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
            <span className="text-boldblue font-semibold"> Simple, effective, and designed just for restaurants.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;


import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, DollarSign, Clock } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Target,
      title: "Restaurant Specialists",
      description: "We specialize in restaurants — not every business under the sun.",
      color: "from-electric/20 to-electric/10"
    },
    {
      icon: Award,
      title: "One Thing, Done Well",
      description: "We do one thing well: online visibility.",
      color: "from-boldblue/20 to-boldblue/10"
    },
    {
      icon: DollarSign,
      title: "Clear Pricing",
      description: "You always know what you're paying for.",
      color: "from-electric/20 to-electric/10"
    },
    {
      icon: Clock,
      title: "No Long Contracts",
      description: "No long contracts. Just great results.",
      color: "from-boldblue/20 to-boldblue/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fredoka text-gray-800 mb-6">
            Why Restaurants <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-xl font-poppins text-gray-600 max-w-3xl mx-auto">
            We're not just another marketing agency. We're your digital partner who actually gets the restaurant industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className={`bg-gradient-to-br ${reason.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon size={28} className="text-boldblue" />
                </div>
                <h3 className="text-lg font-baloo font-semibold text-gray-800 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 font-poppins text-sm flex-grow leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-electric/10 to-boldblue/10 p-8 rounded-3xl max-w-4xl mx-auto border border-electric/20">
            <p className="text-2xl font-baloo font-semibold text-gray-800 mb-4">
              Ready to see your restaurant thrive online?
            </p>
            <p className="text-lg font-poppins text-gray-600">
              Join the restaurants who've already discovered the Lunchbox difference. 
              <span className="text-boldblue font-semibold"> Let's make your digital presence as amazing as your food.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

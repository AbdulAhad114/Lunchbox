
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, DollarSign, Clock } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Target,
      title: "Restaurant Specialists",
      description: "We specialize in restaurants — not every business under the sun.",
      color: "from-brand-yellow/20 to-brand-yellow/10"
    },
    {
      icon: Award,
      title: "One Thing, Done Well",
      description: "We do one thing well: online visibility.",
      color: "from-primary-blue/20 to-primary-blue/10"
    },
    {
      icon: DollarSign,
      title: "Clear Pricing",
      description: "You always know what you're paying for.",
      color: "from-brand-yellow/20 to-brand-yellow/10"
    },
    {
      icon: Clock,
      title: "No Long Contracts",
      description: "No long contracts. Just great results.",
      color: "from-primary-blue/20 to-primary-blue/10"
    }
  ];

  return (
    <section className="py-20 bg-dark-navy text-white" id="why-lunchbox">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fredoka text-white mb-6">
            Why Restaurants <span className="text-brand-yellow">Trust Lunchbox</span>
          </h2>
          <p className="text-xl font-poppins text-gray-300 max-w-3xl mx-auto">
            We're not just another marketing agency. We're your digital partner who actually gets the restaurant industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/10 backdrop-blur-sm hover:-translate-y-2 hover:bg-white/15"
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className={`bg-gradient-to-br ${reason.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon size={28} className="text-primary-blue" />
                </div>
                <h3 className="text-lg font-baloo font-semibold text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-300 font-poppins text-sm flex-grow leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-yellow/20 to-primary-blue/20 p-8 rounded-3xl max-w-4xl mx-auto border border-brand-yellow/30 backdrop-blur-sm">
            <p className="text-2xl font-baloo font-semibold text-white mb-4">
              Ready to see your restaurant thrive online?
            </p>
            <p className="text-lg font-poppins text-gray-300">
              Join the restaurants who've already discovered the Lunchbox difference. 
              <span className="text-brand-yellow font-semibold"> Let's make your digital presence as amazing as your food.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

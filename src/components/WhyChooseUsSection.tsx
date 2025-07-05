
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, DollarSign, Clock } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Target,
      title: "Restaurant Specialists",
      description: "We specialize in restaurants — not every business under the sun.",
      gradient: "from-cyan-400/20 via-blue-500/30 to-purple-600/20",
      iconColor: "text-cyan-400",
      glowColor: "shadow-cyan-400/20"
    },
    {
      icon: Award,
      title: "One Thing, Done Well",
      description: "We do one thing well: online visibility.",
      gradient: "from-purple-400/20 via-pink-500/30 to-red-500/20",
      iconColor: "text-purple-400",
      glowColor: "shadow-purple-400/20"
    },
    {
      icon: DollarSign,
      title: "Clear Pricing",
      description: "You always know what you're paying for.",
      gradient: "from-green-400/20 via-emerald-500/30 to-teal-500/20",
      iconColor: "text-green-400",
      glowColor: "shadow-green-400/20"
    },
    {
      icon: Clock,
      title: "No Long Contracts",
      description: "No long contracts. Just great results.",
      gradient: "from-orange-400/20 via-yellow-500/30 to-amber-500/20",
      iconColor: "text-orange-400",
      glowColor: "shadow-orange-400/20"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="why-lunchbox">
      {/* Background brand elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-yellow/3 to-primary-blue/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary-blue/3 to-brand-yellow/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fredoka text-gray-900 mb-6">
            Why Restaurants <span className="bg-gradient-to-r from-primary-blue to-brand-yellow bg-clip-text text-transparent">Trust Lunchbox</span>
          </h2>
          <p className="text-xl font-poppins text-gray-600 max-w-3xl mx-auto">
            We're not just another marketing agency. We're your digital partner who actually gets the restaurant industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden border-0 bg-gradient-to-br ${reason.gradient} backdrop-blur-lg hover:scale-105 transition-all duration-500 ${reason.glowColor} hover:shadow-2xl`}
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.18)'
              }}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 text-center h-full flex flex-col relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 bg-white/20 backdrop-blur-sm border border-white/30`}>
                  <reason.icon size={32} className={`${reason.iconColor} drop-shadow-lg`} />
                </div>
                <h3 className="text-lg font-baloo font-semibold text-gray-800 mb-4 drop-shadow-sm">
                  {reason.title}
                </h3>
                <p className="text-gray-700 font-poppins text-sm flex-grow leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
              
              {/* Animated background particles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-blue/5 to-brand-yellow/5 p-8 rounded-3xl max-w-4xl mx-auto border border-gray-100 backdrop-blur-sm relative overflow-hidden">
            {/* Subtle animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-pulse"></div>
            
            <p className="text-2xl font-baloo font-semibold text-gray-800 mb-4 relative z-10">
              Ready to see your restaurant thrive online?
            </p>
            <p className="text-lg font-poppins text-gray-600 relative z-10">
              Join the restaurants who've already discovered the Lunchbox difference. 
              <span className="bg-gradient-to-r from-primary-blue to-brand-yellow bg-clip-text text-transparent font-semibold"> Let's make your digital presence as amazing as your food.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

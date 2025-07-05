
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Star, Monitor, Bot } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: Smartphone,
      title: "Weekly Social Media",
      description: "📱 Weekly posting to Facebook + Instagram",
      gradient: "from-primary-blue/10 via-brand-yellow/5 to-primary-blue/5",
      iconBg: "bg-gradient-to-br from-primary-blue to-primary-blue/80",
      iconColor: "text-white",
      borderColor: "border-primary-blue/20"
    },
    {
      icon: Star,
      title: "Review Management",
      description: "⭐ Google review responses & reputation management",
      gradient: "from-brand-yellow/10 via-primary-blue/5 to-brand-yellow/5",
      iconBg: "bg-gradient-to-br from-brand-yellow to-brand-yellow/80",
      iconColor: "text-primary-blue",
      borderColor: "border-brand-yellow/30"
    },
    {
      icon: Monitor,
      title: "Converting Website",
      description: "🖥️ Website built to convert (bookings, reservations, orders)",
      gradient: "from-primary-blue/8 via-brand-yellow/8 to-primary-blue/8",
      iconBg: "bg-gradient-to-br from-primary-blue via-primary-blue/90 to-brand-yellow/20",
      iconColor: "text-white",
      borderColor: "border-primary-blue/25"
    },
    {
      icon: Bot,
      title: "AI + Human Power",
      description: "🤖 AI tools that power speed, humans who power results",
      gradient: "from-brand-yellow/8 via-primary-blue/8 to-brand-yellow/8",
      iconBg: "bg-gradient-to-br from-brand-yellow via-brand-yellow/90 to-primary-blue/20",
      iconColor: "text-primary-blue",
      borderColor: "border-brand-yellow/25"
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-20 bg-white relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`} 
      id="why-lunchbox"
    >
      {/* Background brand elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-brand-yellow/2 to-primary-blue/2 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-primary-blue/2 to-brand-yellow/2 rounded-full blur-3xl"></div>
      
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-primary-blue rounded-full"></div>
        <div className="absolute top-48 right-1/3 w-2 h-2 bg-brand-yellow rounded-full"></div>
        <div className="absolute bottom-40 left-1/2 w-2.5 h-2.5 bg-primary-blue rounded-full"></div>
        <div className="absolute bottom-24 right-1/4 w-1.5 h-1.5 bg-brand-yellow rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fredoka text-gray-900 mb-6 leading-tight">
            We Handle the Online. <span className="bg-gradient-to-r from-primary-blue to-brand-yellow bg-clip-text text-transparent">You Handle the Kitchen.</span>
          </h2>
          <p className="text-xl font-poppins text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We don't just "help" — we handle it. You'll never need to worry about posting again. Your Google reviews? Managed. Your website? Built to bring in orders. Your brand? Active, polished, and visible — every single week.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-xl border-2 ${service.borderColor} hover:border-opacity-40 ${
                isVisible ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 text-center h-full flex flex-col relative z-10">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 ${service.iconBg} shadow-lg`}>
                  <service.icon size={36} className={`${service.iconColor} drop-shadow-sm`} />
                </div>
                
                <h3 className="text-lg font-baloo font-bold text-gray-800 mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-700 font-poppins text-sm flex-grow leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
              
              {/* Subtle corner accents */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-tr from-white/15 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-blue/3 to-brand-yellow/3 p-8 rounded-3xl max-w-4xl mx-auto border border-primary-blue/10 backdrop-blur-sm relative overflow-hidden">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <p className="text-2xl font-baloo font-semibold text-gray-800 mb-4 relative z-10">
              Ready to focus on what you do best?
            </p>
            <p className="text-lg font-poppins text-gray-600 relative z-10">
              Let us handle your digital presence while you create amazing food experiences. 
              <span className="bg-gradient-to-r from-primary-blue to-brand-yellow bg-clip-text text-transparent font-semibold"> Your customers will find you, trust you, and choose you.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

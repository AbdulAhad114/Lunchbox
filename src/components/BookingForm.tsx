
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    restaurantName: '',
    city: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch within 24 hours to schedule your free consultation.",
    });
    // Reset form
    setFormData({
      name: '',
      restaurantName: '',
      city: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-electric/5 to-boldblue/5" id="booking">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-fredoka text-gray-800 mb-6">
            Let's Talk <span className="text-gradient">Restaurant Growth</span>
          </h2>
          <p className="text-xl font-poppins text-gray-600 max-w-2xl mx-auto">
            Ready to transform your digital presence? Book a free consultation and let's discuss how we can help your restaurant shine online.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-electric to-boldblue text-white text-center py-8 rounded-t-lg">
              <CardTitle className="text-2xl font-baloo">
                Book Your Free Strategy Call
              </CardTitle>
              <p className="font-poppins opacity-90">
                No sales pitch, just valuable insights for your restaurant
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-poppins font-medium text-gray-700">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-2 border-gray-200 focus:border-electric rounded-xl py-3 font-poppins"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="restaurantName" className="font-poppins font-medium text-gray-700">
                      Restaurant Name *
                    </Label>
                    <Input
                      id="restaurantName"
                      name="restaurantName"
                      type="text"
                      required
                      value={formData.restaurantName}
                      onChange={handleChange}
                      className="border-2 border-gray-200 focus:border-electric rounded-xl py-3 font-poppins"
                      placeholder="Your restaurant's name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="font-poppins font-medium text-gray-700 flex items-center">
                      <MapPin size={16} className="mr-1 text-boldblue" />
                      City *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="border-2 border-gray-200 focus:border-electric rounded-xl py-3 font-poppins"
                      placeholder="Where are you located?"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-poppins font-medium text-gray-700 flex items-center">
                      <Mail size={16} className="mr-1 text-boldblue" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-2 border-gray-200 focus:border-electric rounded-xl py-3 font-poppins"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-poppins font-medium text-gray-700 flex items-center">
                    <Phone size={16} className="mr-1 text-boldblue" />
                    Phone (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-2 border-gray-200 focus:border-electric rounded-xl py-3 font-poppins"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-poppins font-medium text-gray-700 flex items-center">
                    <MessageCircle size={16} className="mr-1 text-boldblue" />
                    What do you need help with?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border-2 border-gray-200 focus:border-electric rounded-xl font-poppins min-h-[120px]"
                    placeholder="Tell us about your restaurant and what challenges you're facing online..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-electric hover:bg-electric/90 text-black font-bold text-lg py-6 rounded-xl shadow-electric hover:shadow-xl transition-all duration-300 font-baloo"
                >
                  Book My Free Call 🚀
                </Button>

                <p className="text-center text-sm text-gray-500 font-poppins">
                  We typically respond within 2 hours during business hours
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

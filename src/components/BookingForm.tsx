import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FocusTrap } from "@/components/ui/focus-trap";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    restaurantName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "You’re in. We’ll reach out shortly",
    });
    // Reset form
    setFormData({
      name: '',
      restaurantName: '',
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
    <section className="bg-white" id="booking">
      <Navigation />
      <FocusTrap active={true}>
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-40">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-fredoka text-gray-900 mb-2 leading-tight">
              Let's Get You <span className="bg-gradient-to-r from-primary-blue to-brand-yellow 
              bg-clip-text text-transparent">More Orders</span>
            </h2>
            <p className="text-lg sm:text-xl font-poppins text-gray-600 max-w-3xl mx-auto font-light px-4">
              This isn't a sales call. It's a growth session. Tell us what you're 
              struggling with — and we'll show you how Lunchbox can take it off your plate.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 bg-white overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary-blue to-brand-yellow text-white text-center py-8 sm:py-12">
                <CardTitle className="text-2xl sm:text-3xl font-fredoka mb-4">
                  Book Your Free Strategy Call
                </CardTitle>
                <p className="font-poppins text-white/90 text-base sm:text-lg px-4">
                  No sales pitch, just valuable insights for your restaurant
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-12">
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="font-poppins font-medium text-gray-700 text-base sm:text-lg">
                        First Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-2 border-gray-200 focus:border-primary-blue rounded-xl py-3 sm:py-4 text-base sm:text-lg font-poppins"
                        placeholder="Enter your name"
                        aria-describedby="name-error"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="restaurantName" className="font-poppins font-medium text-gray-700 text-base sm:text-lg">
                        Restaurant Name *
                      </Label>
                      <Input
                        id="restaurantName"
                        name="restaurantName"
                        type="text"
                        required
                        value={formData.restaurantName}
                        onChange={handleChange}
                        className="border-2 border-gray-200 focus:border-primary-blue rounded-xl py-3 sm:py-4 text-base sm:text-lg font-poppins"
                        placeholder="Your restaurant's name"
                        aria-describedby="restaurant-error"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="font-poppins font-medium text-gray-700 text-base sm:text-lg flex items-center">
                        <Mail size={18} className="mr-2 text-primary-blue" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-2 border-gray-200 focus:border-primary-blue rounded-xl py-3 sm:py-4 text-base sm:text-lg font-poppins"
                        placeholder="your@email.com"
                        aria-describedby="email-error"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="phone" className="font-poppins font-medium text-gray-700 text-base sm:text-lg flex items-center">
                        <Phone size={18} className="mr-2 text-primary-blue" />
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-2 border-gray-200 focus:border-primary-blue rounded-xl py-3 sm:py-4 text-base sm:text-lg font-poppins"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="font-poppins font-medium text-gray-700 text-base sm:text-lg flex items-center">
                      <MessageCircle size={18} className="mr-2 text-primary-blue" />
                      What's your biggest digital challenge?
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="border-2 border-gray-200 focus:border-primary-blue rounded-xl font-poppins text-base sm:text-lg min-h-[120px] sm:min-h-[140px]"
                      placeholder="Tell us about your restaurant and what challenges you're facing online..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-blue to-brand-yellow hover:from-primary-blue/90 hover:to-brand-yellow/90 text-white font-bold text-lg sm:text-xl py-6 sm:py-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-baloo focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                  >
                    Book My Free Call 🚀
                  </Button>

                  <p className="text-center text-gray-500 font-poppins text-sm sm:text-base">
                    We typically respond within 2 hours during business hours
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </FocusTrap>
      <Footer />
    </section>
  );
};

export default BookingForm;

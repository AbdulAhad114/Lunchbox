
import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-3xl font-fredoka text-electric mb-4">
            Lunchbox
          </h3>
          <p className="font-poppins text-gray-300 mb-8 max-w-2xl mx-auto">
            Digital Marketing for Restaurants | Based in Canada | Serving Restaurants Across North America
          </p>
          
          <div className="flex justify-center items-center space-x-8 mb-8">
            <a
              href="mailto:hello@lunchboxdigital.ca"
              className="flex items-center space-x-2 text-gray-300 hover:text-electric transition-colors duration-300 font-poppins"
            >
              <Mail size={20} />
              <span>hello@lunchboxdigital.ca</span>
            </a>
            <a
              href="https://instagram.com/lunchboxdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-electric transition-colors duration-300 font-poppins"
            >
              <Instagram size={20} />
              <span>@lunchboxdigital</span>
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400 font-poppins">
                © 2024 Lunchbox Digital Marketing. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400 font-poppins">
                <MapPin size={16} />
                <span>Proudly Canadian-owned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

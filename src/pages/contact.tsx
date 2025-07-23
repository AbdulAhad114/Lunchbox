import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

export default function BookingForm() {
  return (
    <>
    <Navigation />
    <div className="min-h-screen flex flex-col justify-center pt-32">
      <div className="w-full bg-white shadow-md flex flex-col md:flex-row px-4 md:px-8 lg:px-16 py-8 md:py-12
       border-t border-gray-400">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col bg-white order-1">
          <div className="border-b border-gray-200 pt-6 h-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-apfel font-bold mb-4">
              Ready to fill more tables and boost your restaurant's visibility?
            </h2>
            <p className="text-lg font-beVietnam text-gray-700 pr-4">
              Partner with us to transform your restaurant's marketing, attract more customers, and increase repeat business with proven strategies tailored for the food industry.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8 bg-gray-100 order-2">
          <form className="space-y-4">
            <h3 className="text-2xl font-apfel font-bold mb-4">Get in touch</h3>
            <input
              type="text"
              placeholder="Full name *"
              className="w-full border-b border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-transparent"
            />
            <input
              type="email"
              placeholder="Email address *"
              className="w-full border-b border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-transparent"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full border-b border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-transparent"
            />
            <textarea
              placeholder="Tell us about your restaurant or your marketing goals"
              rows={3}
              className="w-full border-b border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-transparent"
            />
            <div className="flex items-center">
              <input
                id="privacy"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="ml-2 text-sm">
                I confirm that I have read and accepted the{" "}
                <span className="underline cursor-pointer">privacy policy</span>.
              </label>
            </div>
            {/* Space below checkbox */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="w-full md:w-[calc(100%-2rem)] bg-black text-white py-2 rounded-full font-semibold transition hover:bg-gray-800"
                style={{ maxWidth: "100%" }}
              >
                Book My Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

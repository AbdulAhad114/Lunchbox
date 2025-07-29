import { useState } from "react";
import { plans } from "@/components/plansData";
import ProductWithKeyPoints from "@/components/ProductWithKeyPoints";
import Navigation from "@/components/Navigation";
import SplashCursor from "@/components/SplashCursor";
import Footer from "@/components/Footer";

export default function PricingAbdValue() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="container mx-auto py-12">
      <Navigation />
      {/* <SplashCursor /> */}
      <div className="text-center mt-36">
          <h2 className="text-4xl md:text-6xl font-apfel font-bold text-black mb-6">
            All the Flavour, One Flat Price
          </h2>
          
          <div className="bg-gradient-to-r from-primary-blue to-brand-yellow p-8 rounded-3xl shadow-xl inline-block mb-6">
            <p className="text-4xl md:text-5xl font-apfel font-bold text-white">
              $499/month
            </p>
            <p className="text-white text-lg mt-4">
              We keep your digital presence simmering, fresh posts, fruitful reviews,<br />
              and polished content on a daily.
            </p>
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="cursor-pointer border rounded-lg p-4 text-center hover:shadow-lg transition"
            onClick={() => setSelectedPlan(plan)}
          >
            <img src={plan.cardImg} alt={plan.name} className="mx-auto w-56 h-56 mb-2" />
            <h2 className="text-lg font-semibold">{plan.name}</h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="relative bg-brand-yellow rounded-xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-3 right-4 text-2xl text-gray-800"
            >
              ×
            </button>
            <ProductWithKeyPoints
              imageSrc={selectedPlan.image}
              pointTexts={selectedPlan.keyPoints}
              isInteractive={true}
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

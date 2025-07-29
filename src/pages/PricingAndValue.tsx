import { useState } from "react";
import { plans } from "@/components/plansData";
import ProductWithKeyPoints from "@/components/ProductWithKeyPoints";
import Navigation from "@/components/Navigation";
import SplashCursor from "@/components/SplashCursor";
import Footer from "@/components/Footer";

export default function PricingAbdValue() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="container mx-auto pt-12">
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
            <p className="text-white text-lg mt-4 text-center">
              <span className="hidden md:inline">
                We keep your digital presence simmering, fresh posts,
                <br />
                fruitful reviews, and polished content on a daily.
              </span>
              <span className="inline md:hidden">
                We keep your digital presence simmering, fresh posts, fruitful reviews,
                and polished content on a daily.
              </span>
            </p>
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10 pb-12">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="cursor-pointer border rounded-lg p-4 text-center hover:shadow-lg transition"
            onClick={() => setSelectedPlan(plan)}
          >
            <img
              src={plan.cardImg}
              alt={plan.name}
              className="mx-auto w-32 h-32 md:w-56 md:h-56 mb-4"
            />
            <h2 className="text-lg font-semibold">{plan.name}</h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="relative bg-brand-yellow rounded-xl w-full max-w-3xl max-h-[90vh] overflow-hidden mx-4 md:mx-0">
            <button
              type="button"
              tabIndex={0}
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPlan(null);
              }}
              className="absolute top-3 right-4 text-2xl text-gray-800 z-10 bg-transparent border-none cursor-pointer focus:outline-none"
              style={{ background: "none", border: "none" }}
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

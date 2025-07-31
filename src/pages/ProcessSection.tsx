import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DominoAnimation from "@/components/DominoAnimation";
import ProcessWay from "@/components/ProcessWay";


const ProcessSection = () => {

  return (
    <div>
      <Navigation />
      <div className="pt-32 text-center w-full px-4 pb-32 mt-12 hidden sm:block">
        <h3 className="text-sm md:text-lg font-semibold tracking-wider mb-2" style={{ color: '#F2E416' }}>
          THE LUNCHBOX WAY
        </h3>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ color: '#0339A6' }}>
          One Simple System.<br />Built for Busy Restaurants.
        </h2>
        <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4 leading-relaxed mb-4" style={{ color: '#666' }}>
          We've cut the fluff. You don't need complexity, you need consistency.
          Here's how we make your digital presence work for you:
        </p>
      </div>
      {/* <DominoAnimation />  */}
      <ProcessWay />
      <Footer />
    </div>
  );
};

export default ProcessSection;

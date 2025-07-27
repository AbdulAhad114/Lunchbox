import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import lunchWay from "@/assets/images/lunchbox-way.png";
import LunchboxWay from "@/components/LunchboxWay";
import DominoAnimation from "@/components/DominoAnimation";


const ProcessSection = () => {
  return (
    <div>
      <Navigation />
      <div className="mt-12"></div>
      <DominoAnimation /> 
      <LunchboxWay />
      <Footer />
    </div>
  );
};

export default ProcessSection;

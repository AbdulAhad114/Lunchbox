import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import lunchboxWay from "@/assets/images/lunchbox-way.png";


const ProcessSection = () => {
  return (
    <div>
      <Navigation />
      {/* Text Content */}
      <div
        className="relative left-0 w-full text-center z-20 px-4 md:px-0 h-[100vh] flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundColor: "#26439B",
          backgroundImage: `url(${lunchboxWay})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      >
        {/* Added px-4 padding on small screens to prevent overflow */}
        <div className="text-brand-yellow font-medium text-[1.8vw] tracking-wide">
          THE LUNCHBOX WAY
        </div>
        <div
          className="font-fredoka text-black font-extrabold text-[3vw] tracking-wider uppercase inline-block px-2 py-1 rounded"
          style={{ display: "inline-block" }}
        >
          One Simple System. Built for Busy Restaurants.
        </div>
        <p className="text-sm md:text-lg font-light text-brand-yellow max-w-2xl leading-relaxed text-center mx-auto px-4">
          We’ve cut the fluff. You don’t need complexity — you need consistency. Here’s how we make your digital presence work for you:
        </p>
      </div>
      <div className="border-t border-zinc-700 bg-white">
        {/* Desktop & Tablet */}
        <div className="hidden md:flex w-full justify-between md:px-6 lg:px-20 items-start max-w-[1280px] mx-auto">
          {/* Left column: Headings */}
          <div className="flex flex-col animate-in md:pt-20 lg:pt-32 md:gap-20 lg:gap-32 fade-in zoom-in duration-300 w-full max-w-[40%] font-fredoka">
            <h2 className="basement-bold font-extrabold tracking-[0.02em] lg:text-4xl md:text-xl leading-[120%] text-black uppercase min-h-[216px] lg:min-h-[72px]">
              Book a Call
            </h2>
            <h2 className="basement-bold font-extrabold tracking-[0.02em] lg:text-4xl md:text-xl leading-[100%] text-black uppercase min-h-[216px] lg:min-h-[72px]">
              We Launch
            </h2>
            <h2 className="basement-bold font-extrabold tracking-[0.02em] lg:text-4xl md:text-xl leading-[120%] text-black uppercase min-h-[216px] lg:min-h-[72px]">
              You Focus on Food
            </h2>
            <h2 className="basement-bold font-extrabold tracking-[0.02em] lg:text-4xl md:text-xl leading-[120%] text-black uppercase">
              We Report
            </h2>
          </div>
          {/* Right column: Paragraphs */}
          <div className="w-full max-w-[50%]">
            <div className="flex flex-col md:pt-20 lg:pt-32 md:gap-20 lg:gap-32 border-l border-zinc-700 md:pl-6 lg:pl-20">
              <p className="font-light lg:text-3xl md:text-base leading-[150%] text-black">
                We get to know your restaurant and your challenges.
              </p>
              <p className="font-light lg:text-3xl md:text-base leading-[150%] text-black">
                Socials, reviews, and website all go live under our care.
              </p>
              <p className="font-light lg:text-3xl md:text-base leading-[150%] text-black">
                We run your presence. You run your restaurant.
              </p>
              <p className="font-light lg:text-3xl md:text-base leading-[150%] text-black mb-20">
                You’ll see what we’re doing and how it’s growing your traffic.
              </p>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex flex-col w-full pt-12 items-center mx-auto gap-12 px-8 font-fredoka max-w-[400px]">
          <div className="flex flex-col gap-4 animate-in fade-in zoom-in max-w-[324px] duration-300 w-full">
            <h2 className="basement-bold text-center font-extrabold tracking-[-0.02em] leading-[120%] text-black uppercase">
              Book a Call
            </h2>
            <p className="text-center font-normal lg:text-3xl md:text-base leading-[150%] text-black">
              We get to know your restaurant and your challenges.
            </p>
          </div>
          <div className="flex flex-col gap-4 animate-in fade-in zoom-in max-w-[324px] duration-300 w-full">
            <h2 className="basement-bold text-center font-extrabold tracking-[-0.02em] leading-[120%] text-black uppercase">
              We Launch
            </h2>
            <p className="text-center font-normal lg:text-3xl md:text-base leading-[150%] text-black">
              Socials, reviews, and website all go live under our care.
            </p>
          </div>
          <div className="flex flex-col gap-4 animate-in fade-in zoom-in max-w-[324px] duration-300 w-full">
            <h2 className="basement-bold text-center font-extrabold tracking-[-0.02em] leading-[120%] text-black uppercase">
              You Focus on Food
            </h2>
            <p className="font-poppins text-center font-normal lg:text-3xl md:text-base leading-[150%] text-black">
              We run your presence. You run your restaurant.
            </p>
          </div>
          <div className="flex flex-col gap-4 animate-in fade-in zoom-in max-w-[324px] duration-300 w-full">
            <h2 className="basement-bold text-center font-extrabold tracking-[-0.02em] leading-[120%] text-black uppercase">
              We Report
            </h2>
            <p className="font-poppins text-center font-normal lg:text-3xl md:text-base leading-[150%] text-black mb-20">
              You’ll see what we’re doing and how it’s growing your traffic.
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProcessSection;

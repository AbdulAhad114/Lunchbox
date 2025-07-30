import React, { useRef, useState, useEffect } from "react";
import defaultLogo from "@/assets/images/Small-box.png";

export const keyPointTemplate = [
  {
    id: 1,
    heading: "Google Reputation Management",
    text: "Turn negative reviews into brand wins, we monitor, respond, and improve your online image to build trust that leads to more bookings.",
    style: { top: "20%", left: "2%" },
    arrowPos: { top: "20%", left: "33%", rotate: "-63deg" },
    tabletStyle: { top: "2%", left: "-5%" },
    tabletArrowPos: { top: "24%", left: "30%", rotate: "-44deg" },
    mobileStyle: { top: "2%", left: "-12%" },
    mobileArrowPos: { top: "29%", left: "38%", rotate: "150deg" },
  },
  {
    id: 2,
    heading: "Website Building & Growth",
    subheading: "Turning clicks into customers",
    text: "Drive real foot traffic and online orders with hyper-targeted ad compaigns, smart growth tactics and curated content.",
    style: { top: "8%", right: "14%" },
    arrowPos: { top: "40%", right: "33%", rotate: "20deg" },
    tabletStyle: { top: "20%", right: "3%" },
    tabletArrowPos: { top: "30%", right: "28%", rotate: "25deg" },
    mobileStyle: { bottom: "1%", right: "0%" },
    mobileArrowPos: { bottom: "24%", right: "34%", rotate: "56deg" }
    // mobileArrowPos: { top: "34%", right: "23%", rotate: "-0deg" },
  },
  {
    id: 3,
    heading: "FB & IG Posting",
    text: "From drool-worthy visuals to witty captions, we make your food the star of every feed.",
    style: { bottom: "10%", left: "2%" },
    arrowPos: { bottom: "16%", left: "33%", rotate: "110deg" },
    tabletStyle: { bottom: "2%", left: "-5%" },
    tabletArrowPos: { bottom: "24%", left: "28%", rotate: "105deg" },
    mobileStyle: { bottom: "9%", left: "-14%" },
    mobileArrowPos: { bottom: "32%", left: "28%", rotate: "-88deg" },
  },
  // {
  //   id: 4,
  //   heading: "AI + Humans",
  //   text: "AI-powered tools, Speed at scale, Results by real experts",
  //   style: { bottom: "18%", right: "8%" },
  //   arrowPos: { bottom: "10%", right: "34%", rotate: "22deg" },
  //   tabletStyle: { bottom: "7%", right: "2%" },
  //   tabletArrowPos: { bottom: "15%", right: "30%", rotate: "52deg" },
  //   mobileStyle: { bottom: "9%", right: "0%" },
  //   mobileArrowPos: { bottom: "18%", right: "24%", rotate: "56deg" },
  // },
];

export default function HomePagePoints(props) {
  const { imageSrc = defaultLogo } = props;
  const ref = useRef(null);
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize("mobile");
      else if (width < 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getStyles = (point) => {
    switch (screenSize) {
      case "mobile":
        return {
          pointStyle: point.mobileStyle,
          arrowStyle: point.mobileArrowPos,
        };
      case "tablet":
        return {
          pointStyle: point.tabletStyle,
          arrowStyle: point.tabletArrowPos,
        };
      default:
        return {
          pointStyle: point.style,
          arrowStyle: point.arrowPos,
        };
    }
  };

  const getContainerClasses = () => {
    switch (screenSize) {
      case "mobile":
        return "min-h-[350px] sm:min-h-[400px] px-2 py-4";
      case "tablet":
        return "min-h-[450px] md:min-h-[500px] px-4 py-6";
      default:
        return "min-h-[500px] lg:min-h-[600px] h-full py-8";
    }
  };

  const getImageClasses = () => {
    switch (screenSize) {
      case "mobile":
        return "w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem]";
      case "tablet":
        return "w-[12rem] h-[12rem] md:w-[16rem] md:h-[16rem]";
      default:
        return "w-[16rem] h-[16rem] lg:w-[20rem] lg:h-[20rem] xl:w-[24rem] xl:h-[24rem]";
    }
  };

  const getTextClasses = () => {
    switch (screenSize) {
      case "mobile":
        return "text-xs sm:text-sm max-w-[180px] sm:max-w-[220px] p-1 sm:p-1.5";
      case "tablet":
        return "text-sm md:text-base max-w-[220px] md:max-w-[260px] p-1.5 md:p-2";
      default:
        return "text-base lg:text-lg max-w-[300px] lg:max-w-[400px] p-2 lg:p-3";
    }
  };

  const getArrowClasses = () => {
    switch (screenSize) {
      case "mobile":
        return "w-6 h-8 sm:w-8 sm:h-12";
      case "tablet":
        return "w-10 h-12 md:w-12 md:h-16";
      default:
        return "w-16 h-20 lg:w-20 lg:h-24";
    }
  };

  return (
    <div ref={ref} id="home-page-points" className={`relative bg-brand-yellow w-full mx-auto ${getContainerClasses()}`}>
      
      <img
        src={imageSrc}
        alt="Product"
        className={`absolute top-1/2 left-1/2 h-auto -translate-x-1/2 -translate-y-1/2 rounded-lg ${getImageClasses()}`}
        style={{ zIndex: 20 }}
      />

      {keyPointTemplate.map((point) => {
        const { pointStyle } = getStyles(point);
        return (
          <div
            key={point.id}
            className={`absolute pl-8 sm:pl-12 md:pl-14 z-20 font-beVietnamPro text-primary-blue font-semibold text-right ${getTextClasses()}`}
            style={pointStyle}
          >
            <div className="font-bold mb-1 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{point.heading}</div>
            <div className="font-bold mb-1 text-xs sm:text-sm md:text-base lg:text-lg">{point.subheading}</div>
            <div className="text-black text-xs sm:text-sm md:text-base">
              {point.text}
            </div>
          </div>
        );
      })}

      {keyPointTemplate.map((point, i) => {
        const { arrowStyle } = getStyles(point);
        return (
          <img
            key={"arrow" + point.id}
            src="/images/arrow.png"
            alt="arrow"
            className={`absolute ${getArrowClasses()}`}
            style={{
              ...arrowStyle,
              transform: `rotate(${arrowStyle.rotate})`,
              opacity: 1,
            }}
          />
        );
      })}
    </div>
  );
}

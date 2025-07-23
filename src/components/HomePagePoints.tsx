import React, { useRef, useState, useEffect } from "react";
import defaultLogo from "@/../public/images/lunchbox-logo.png";

export const keyPointTemplate = [
  {
    id: 1,
    heading: "Social Posts",
    text: "Weekly Facebook posts, Weekly Instagram posts, No effort needed from you",
    style: { top: "28%", left: "2%" },
    arrowPos: { top: "20%", left: "33%", rotate: "-63deg" },
    tabletStyle: { top: "11%", left: "-5%" },
    tabletArrowPos: { top: "24%", left: "30%", rotate: "-44deg" },
    mobileStyle: { top: "12%", left: "-12%" },
    mobileArrowPos: { top: "28%", left: "22%", rotate: "140deg" },
  },
  {
    id: 2,
    heading: "Reputation",
    text: "Google review responses, Reputation management, Real-time alerts",
    style: { top: "18%", right: "14%" },
    arrowPos: { top: "22%", right: "33%", rotate: "20deg" },
    tabletStyle: { top: "20%", right: "3%" },
    tabletArrowPos: { top: "30%", right: "28%", rotate: "25deg" },
    mobileStyle: { top: "17%", right: "2%" },
    mobileArrowPos: { top: "34%", right: "23%", rotate: "-0deg" },
  },
  {
    id: 3,
    heading: "Smart Website",
    text: "Optimized for bookings, Mobile-friendly design, Custom integrations",
    style: { bottom: "10%", left: "6%" },
    arrowPos: { bottom: "16%", left: "33%", rotate: "110deg" },
    tabletStyle: { bottom: "10%", left: "-5%" },
    tabletArrowPos: { bottom: "22%", left: "28%", rotate: "105deg" },
    mobileStyle: { bottom: "9%", left: "-14%" },
    mobileArrowPos: { bottom: "24%", left: "22%", rotate: "-90deg" },
  },
  {
    id: 4,
    heading: "AI + Humans",
    text: "AI-powered tools, Speed at scale, Results by real experts",
    style: { bottom: "18%", right: "8%" },
    arrowPos: { bottom: "10%", right: "34%", rotate: "22deg" },
    tabletStyle: { bottom: "7%", right: "2%" },
    tabletArrowPos: { bottom: "15%", right: "30%", rotate: "52deg" },
    mobileStyle: { bottom: "9%", right: "0%" },
    mobileArrowPos: { bottom: "18%", right: "24%", rotate: "56deg" },
  },
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
        return "min-h-[400px] px-2";
      case "tablet":
        return "min-h-[500px] px-4";
      default:
        return "min-h-[500px] h-full";
    }
  };

  const getImageClasses = () => {
    switch (screenSize) {
      case "mobile":
        return "w-[12rem] h-[12rem]";
      case "tablet":
        return "w-[16rem] h-[16rem]";
      default:
        return "w-[20rem] h-[20rem]";
    }
  };

  const getTextClasses = () => {
    switch (screenSize) {
      case "mobile":
        return "text-xs max-w-[240px] p-2";
      case "tablet":
        return "text-sm max-w-[280px] p-2.5";
      default:
        return "text-2sm max-w-[400px] font-bold";
    }
  };

  const getArrowClasses = () => {
    switch (screenSize) {
      case "mobile":
        return "w-8 h-12";
      case "tablet":
        return "w-12 h-16";
      default:
        return "w-20 h-24";
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
            className={`absolute pl-14 z-20 font-beVietnamPro text-primary-blue font-semibold text-right ${getTextClasses()}`}
            style={pointStyle}
          >
            {/* <div className="font-bold mb-1 text-3xl">{point.heading}</div> */}
            <div className="text-black">
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

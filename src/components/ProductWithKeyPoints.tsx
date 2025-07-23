// File: components/ProductWithKeyPoints.tsx
import React, { useEffect, useRef, useState } from "react";
import defaultLogo from "@/../public/images/lunchbox-logo.png";

// Base key point structure with style positions only (template)
export const keyPointTemplate = [
  {
    id: 1,
    heading: "",
    text: "",
    style: { top: "10%", left: "-24%" },
    arrowPos: { top: "20%", left: "27%", rotate: "-38deg" },
    tabletStyle: { top: "23%", left: "-25%" },
    tabletArrowPos: { top: "24%", left: "15%", rotate: "-47deg" },
    mobileStyle: { top: "20%", left: "0%" },
    mobileArrowPos: { top: "30%", left: "11%", rotate: "-115deg" },
  },
  {
    id: 2,
    heading: "",
    text: "",
    style: { top: "12%", right: "-10%" },
    arrowPos: { top: "22%", right: "12%", rotate: "20deg" },
    tabletStyle: { top: "20%", right: "-22%" },
    tabletArrowPos: { top: "24%", right: "17%", rotate: "-85deg" },
    mobileStyle: { top: "18%", right: "5%" },
    mobileArrowPos: { top: "30%", right: "15%", rotate: "-20deg" },
  },
  {
    id: 3,
    heading: "",
    text: "",
    style: { bottom: "0%", left: "-23%" },
    arrowPos: { bottom: "16%", left: "10%", rotate: "110deg" },
    tabletStyle: { bottom: "15%", left: "-25%" },
    tabletArrowPos: { bottom: "18%", left: "15%", rotate: "35deg" },
    mobileStyle: { bottom: "10%", left: "0%" },
    mobileArrowPos: { bottom: "24%", left: "12%", rotate: "-98deg" },
  },
  {
    id: 4,
    heading: "",
    text: "",
    style: { bottom: "8%", right: "-10%" },
    arrowPos: { bottom: "20%", right: "18%", rotate: "54deg" },
    tabletStyle: { bottom: "10%", right: "-22%" },
    tabletArrowPos: { bottom: "17%", right: "16%", rotate: "42deg" },
    mobileStyle: { bottom: "14%", right: "0%" },
    mobileArrowPos: { bottom: "24%", right: "10%", rotate: "-25deg" },
  },
];

export default function ProductWithKeyPoints({
  imageSrc = defaultLogo,
  pointTexts,
  isInteractive = false,
}: {
  imageSrc?: string;
  pointTexts?: { heading: string; text: string }[];
  isInteractive?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [screenSize, setScreenSize] = useState("desktop");
  const [visibleArrows, setVisibleArrows] = useState(0);

  const keyPoints = pointTexts
    ? keyPointTemplate.map((point, i) => ({ ...point, heading: pointTexts[i]?.heading || "", text: pointTexts[i]?.text || "" }))
    : keyPointTemplate;

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

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          keyPoints.forEach((_, i) => {
            setTimeout(() => setVisibleArrows((prev) => Math.max(prev, i + 1)), i * 400);
          });
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
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
        return "min-h-[600px] max-w-[380px] px-2";
      case "tablet":
        return "min-h-[500px] max-w-[500px] px-4";
      default:
        return "min-h-[500px] max-w-[600px] h-full";
    }
  };

  const getImageClasses = () => {
    switch (screenSize) {
      case "mobile":
      case "tablet":
        return "w-[16rem] h-[16rem]";
      default:
        return "w-[20rem] h-[20rem]";
    }
  };

  const getTextClasses = () => {
    switch (screenSize) {
      case "mobile":
        return "text-xs max-w-[140px] p-2";
      case "tablet":
        return "text-sm max-w-[200px] p-2.5";
      default:
        return "text-lg max-w-[300px] p-3";
    }
  };

  const getArrowClasses = () => {
    switch (screenSize) {
      case "mobile":
        return "w-8 h-12";
      case "tablet":
        return "w-12 h-16";
      default:
        return "w-16 h-24";
    }
  };

  return (
    <div ref={ref} className={`relative w-full mx-auto ${getContainerClasses()}`}>
      <img
        src={imageSrc}
        alt="Product"
        className={`absolute top-1/2 left-1/2 h-auto -translate-x-1/2 -translate-y-1/2 rounded-lg ${getImageClasses()}`}
        style={{ zIndex: 1 }}
      />

      {keyPoints.map((point) => {
        const { pointStyle } = getStyles(point);
        return (
          <div
            key={point.id}
            className={`absolute pl-16 font-beVietnamPro font-semibold text-right ${getTextClasses()}`}
            style={pointStyle}
          >
            <div className="font-bold mb-1">{point.heading}</div>
            {/* <div className="text-xs font-light">{point.text}</div> */}
            <div className="text-xs font-light">
              {point.text.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="mb-2">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        );
      })}

      {keyPoints.map((point, i) => {
        const { arrowStyle } = getStyles(point);
        return visibleArrows > i ? (
          <img
            key={"arrow" + point.id}
            src="/images/arrow.png"
            alt="arrow"
            className={`absolute transition-opacity duration-500 ${getArrowClasses()}`}
            style={{
              ...arrowStyle,
              transform: `rotate(${arrowStyle.rotate})`,
              opacity: 1,
            }}
          />
        ) : null;
      })}
    </div>
  );
}

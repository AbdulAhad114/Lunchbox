import SmallImg from "@/assets/images/Small-box.png";
import StarterImg from "@/assets/images/starter-kit.png";
import medboxImg from "@/assets/images/Medium-box.png";
import largeboxImg from "@/assets/images/large-box.png";
import GrowthImg from "@/assets/images/growth-special.png";
import ProImg from "@/assets/images/full-spread.png";

export const plans = [
  {
    id: "starter",
    name: "Small Box as Starter",
    cardImg: SmallImg,
    image: StarterImg,
    keyPoints: [
      { heading: "Visibility", text: "1 post/week + intro site" },
      { heading: "Monitoring", text: "Basic reviews + alerts" },
      { heading: "Automation", text: "Light AI workflows" },
      { heading: "Automation", text: "Light AI workflows" },
    ],
  },
  {
    id: "growth",
    name: "Medium Box as Growth Special",
    cardImg: medboxImg,
    image: GrowthImg,
    keyPoints: [
      { heading: "Video Content Creation", text: "Short-form video ideas + scripts\n\nLight training/support for your team(voiceover, acting, etc.)\n\nBuilt to boost engagement and humanize your brand" },
      { heading: "POS Data Insights", text: "Know what's selling, what's not" },
      { heading: "Email Marketing", text: "Built a list, send promos, drive repeat visits" },
      { heading: "Paid Ads (FB & IG)", text: "Targated compaigns to boost sales" },
    ],
  },
  {
    id: "pro",
    name: "Large Box as Full Spread",
    cardImg: largeboxImg,
    image: ProImg,
    keyPoints: [
      { heading: "Delivery App Ingestion", text: "Get set up on DoorDash & Uber Eats the smart way" },
      { heading: "Direct Online Ordering", text: "Accept orders right from your website" },
      { heading: "Loyalty Program Setup", text: "Reward regulars, drive repeat visits, grow retention" },
      { heading: "Revenue Channel Expansion", text: "Open new ways to sell, serve, and grow" },
    ],
  },
];

import {
  Earth,
  Recycle,
  Globe,
  Users,
  TrendingUp,
  Leaf,
  ShieldCheck,
} from "lucide-react";

/** Stats displayed in the hero section */
export const ABOUT_STATS = [
  { value: "100%", label: "Biodegradable" },
  { value: "5+", label: "Product Lines" },
  { value: "15+", label: "Countries Served" },
  { value: "0%", label: "Plastic Used" },
];

/** Vision & Mission content */
export const VISION = {
  headline:
    "To become a globally trusted manufacturer of sustainable food packaging solutions by replacing single-use plastic with environmentally responsible biodegradable products.",
  body: "Our vision is to contribute to a cleaner planet by promoting eco-friendly alternatives that support a circular economy and reduce plastic pollution worldwide.",
};

export const MISSION = {
  headline:
    "To manufacture high-quality biodegradable tableware from renewable sugarcane bagasse and provide sustainable packaging solutions for restaurants, food service businesses, and global distributors.",
  body: "We aim to deliver products that combine environmental responsibility, durability, and modern design, helping businesses transition toward sustainable operations.",
};

/** Strategic goals */
export const GOALS = [
  {
    title: "Environmental Responsibility",
    desc: "Promote eco-friendly alternatives to plastic and reduce environmental impact.",
    icon: <Earth className="w-5 h-5" />,
  },
  {
    title: "Product Innovation",
    desc: "Continuously develop high-quality sustainable tableware for modern food service.",
    icon: <Recycle className="w-5 h-5" />,
  },
  {
    title: "Global Market Expansion",
    desc: "Build strong partnerships with international distributors globally.",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "Customer Satisfaction",
    desc: "Provide reliable supply, consistent product quality, and excellent service.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Sustainable Growth",
    desc: "Grow manufacturing capacity while maintaining responsible production practices.",
    icon: <TrendingUp className="w-5 h-5" />,
  },
];

/** Core commitments */
export const COMMITMENTS = [
  {
    title: "Sustainable Materials",
    desc: "We utilize renewable sugarcane bagasse to produce biodegradable tableware that supports environmental sustainability.",
    icon: <Leaf className="w-6 h-6" />,
  },
  {
    title: "Responsible Manufacturing",
    desc: "Our production processes focus on efficiency, quality, and minimizing environmental impact.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Global Vision",
    desc: "We strive to become a trusted supplier of eco-friendly packaging solutions for businesses around the world.",
    icon: <Globe className="w-6 h-6" />,
  },
];

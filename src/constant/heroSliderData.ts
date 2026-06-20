import {
  FaRobot, FaCode, FaMicrochip, FaNetworkWired, FaCubes,
  FaLaptopCode, FaMobileAlt, FaCloud, FaShieldAlt, FaDatabase,
  FaBolt, FaUserCog, FaBrain, FaProjectDiagram, FaServer, FaGlobe,
} from "react-icons/fa";
import { IconType } from "react-icons";

export type ServiceItem = { icon: IconType; title: string };

export type FloatingImage = {
  src: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  width?: number;
  height?: number;
};

export type HeroSlide = {
  title: string;
  desc: string;
  centerIcon: IconType;
  services: ServiceItem[];
  floatingImages?: FloatingImage[];
};

export const ORBIT_THEME = {
  iconColor: "text-blue-400",
  iconBg: "bg-white/10 border-blue-400/30",
  titleColor: "text-white",
  descColor: "text-blue-100/70",
  orbitRing: "border-blue-400/30",
  dotColor: "#818cf8",
  centerBg: "bg-white/10",
  centerRing: "#818cf8",
};

export const HERO_SLIDER_DATA: HeroSlide[] = [
  {
    title: "AI Solutions",
    desc: "Build intelligent AI systems that automate workflows, improve decision making, and unlock new possibilities across your business.",
    centerIcon: FaRobot,
    floatingImages: [
      { src: "/image/float/ai1.png", top: "10%", right: "2%", width: 110, height: 110 },
      { src: "/image/float/ai2.png", bottom: "15%", right: "4%", width: 130, height: 130 },
    ],
    services: [
      { icon: FaRobot, title: "AI Engine" },
      { icon: FaBrain, title: "Deep Learning" },
      { icon: FaBolt, title: "Automation" },
      { icon: FaDatabase, title: "Data Processing" },
      { icon: FaShieldAlt, title: "Secure AI" },
    ],
  },
  {
    title: "Web Development",
    desc: "Modern, scalable web solutions crafted with cutting-edge technologies for high performance, stunning UX, and seamless user experiences.",
    centerIcon: FaCode,
    floatingImages: [
      { src: "/image/float/web1.png", top: "8%", right: "0%", width: 140, height: 110 },
      { src: "/image/float/web2.png", bottom: "12%", right: "3%", width: 120, height: 120 },
    ],
    services: [
      { icon: FaCode, title: "Frontend" },
      { icon: FaServer, title: "Backend" },
      { icon: FaGlobe, title: "Web Apps" },
      { icon: FaShieldAlt, title: "Security" },
      { icon: FaBolt, title: "Performance" },
    ],
  },
  {
    title: "Machine Learning",
    desc: "Systems that learn from data, recognize patterns, and continuously improve — delivering smarter automation and predictive intelligence for your business.",
    centerIcon: FaBrain,
    floatingImages: [
      { src: "/image/float/ml1.png", top: "12%", right: "1%", width: 120, height: 120 },
      { src: "/image/float/ml2.png", bottom: "10%", right: "5%", width: 130, height: 130 },
    ],
    services: [
      { icon: FaBrain, title: "Model Training" },
      { icon: FaDatabase, title: "Big Data" },
      { icon: FaProjectDiagram, title: "Prediction Models" },
      { icon: FaRobot, title: "Automation AI" },
      { icon: FaUserCog, title: "Optimization" },
    ],
  },
  {
    title: "Internet of Things (IoT)",
    desc: "Connect smart devices, collect real-time data, and automate real-world systems — bridging the physical and digital world seamlessly.",
    centerIcon: FaMicrochip,
    floatingImages: [
      { src: "/image/float/iot1.png", top: "10%", right: "2%", width: 110, height: 110 },
      { src: "/image/float/iot2.png", bottom: "14%", right: "4%", width: 125, height: 125 },
    ],
    services: [
      { icon: FaMicrochip, title: "Smart Devices" },
      { icon: FaNetworkWired, title: "Connectivity" },
      { icon: FaCloud, title: "Cloud Sync" },
      { icon: FaDatabase, title: "Data Collection" },
      { icon: FaBolt, title: "Automation" },
    ],
  },
  {
    title: "Blockchain",
    desc: "Decentralized, tamper-proof systems for secure transactions, transparent records, and trustless data integrity across your entire network.",
    centerIcon: FaCubes,
    floatingImages: [
      { src: "/image/float/blockchain1.png", top: "8%", right: "1%", width: 120, height: 120 },
      { src: "/image/float/blockchain2.png", bottom: "12%", right: "3%", width: 130, height: 130 },
    ],
    services: [
      { icon: FaCubes, title: "Distributed Ledger" },
      { icon: FaShieldAlt, title: "Security" },
      { icon: FaProjectDiagram, title: "Smart Contracts" },
      { icon: FaDatabase, title: "Data Integrity" },
      { icon: FaBolt, title: "Transparency" },
    ],
  },
  {
    title: "Customized Software",
    desc: "Tailor-made software solutions built around your unique business processes — flexible, scalable, and designed to grow with your organization.",
    centerIcon: FaLaptopCode,
    floatingImages: [
      { src: "/image/float/software1.png", top: "10%", right: "2%", width: 115, height: 115 },
      { src: "/image/float/software2.png", bottom: "13%", right: "4%", width: 125, height: 125 },
    ],
    services: [
      { icon: FaLaptopCode, title: "Custom Apps" },
      { icon: FaUserCog, title: "Business Logic" },
      { icon: FaServer, title: "System Design" },
      { icon: FaCode, title: "Development" },
      { icon: FaShieldAlt, title: "Security" },
    ],
  },
  {
    title: "Mobile Applications",
    desc: "High-performance native and cross-platform mobile apps for Android and iOS — delivering fast, beautiful, and intuitive experiences on every device.",
    centerIcon: FaMobileAlt,
    floatingImages: [
      { src: "/image/float/mobile1.png", top: "8%", right: "1%", width: 110, height: 130 },
      { src: "/image/float/mobile2.png", bottom: "12%", right: "4%", width: 110, height: 130 },
    ],
    services: [
      { icon: FaMobileAlt, title: "Android Apps" },
      { icon: FaMobileAlt, title: "iOS Apps" },
      { icon: FaBolt, title: "Fast UI" },
      { icon: FaCloud, title: "Cloud Sync" },
      { icon: FaShieldAlt, title: "Secure Apps" },
    ],
  },
  {
    title: "Web Applications",
    desc: "Scalable, cloud-ready web platforms built with modern frameworks — delivering powerful features, real-time performance, and enterprise-grade reliability.",
    centerIcon: FaGlobe,
    floatingImages: [
      { src: "/image/float/webapp1.png", top: "10%", right: "2%", width: 120, height: 120 },
      { src: "/image/float/webapp2.png", bottom: "14%", right: "4%", width: 130, height: 120 },
    ],
    services: [
      { icon: FaGlobe, title: "SaaS Platforms" },
      { icon: FaCode, title: "React / Next.js" },
      { icon: FaServer, title: "API Systems" },
      { icon: FaDatabase, title: "Database" },
      { icon: FaBolt, title: "Optimization" },
    ],
  },
];
"use client";
import { ServiceSliderTypes } from "@/types";
import {
  Cpu,
  BrainCircuit,
  Unplug,
  Link as LinkIcon,
  Code2,
  Smartphone,
  Globe
} from "lucide-react";

export const SERVICES_COLORS = [
  'orangered',
  'dodgerblue',
  'seagreen',
  'crimson',
  'purple',
  'deeppink',
  'goldenrod',
];

export const SERVICES_DATA: ServiceSliderTypes[] = [
  {
    title: "AI Solutions",
    desc: "Empowering businesses with intelligent automation and data-driven insights using cutting-edge AI technologies.",
    icon: <BrainCircuit style={{ color: SERVICES_COLORS[0] }} className="xl:w-12 xl:h-12 h-8 w-8" />,
  },
  {
    title: "Machine Learning",
    desc: "Developing predictive models and algorithms that learn from your data to optimize complex decision-making processes.",
    icon: <Cpu style={{ color: SERVICES_COLORS[1] }} className="xl:w-12 xl:h-12 h-8 w-8 " />,
  },
  {
    title: "Internet of Things (IoT)",
    desc: "Connecting devices and sensors to create a seamless ecosystem for real-time monitoring and smart automation.",
    icon: <Unplug style={{ color: SERVICES_COLORS[2] }} className="xl:w-12 xl:h-12 h-8 w-8 " />,
  },
  {
    title: "Blockchain",
    desc: "Building secure, decentralized, and transparent ledger solutions for finance, supply chain, and digital identity.",
    icon: <LinkIcon style={{ color: SERVICES_COLORS[3] }} className="xl:w-12 xl:h-12 h-8 w-8 " />,
  },
  {
    title: "Customized Software",
    desc: "Tailor-made software solutions designed specifically to meet your unique business requirements and workflows.",
    icon: <Code2 style={{ color: SERVICES_COLORS[4] }} className="xl:w-12 xl:h-12 h-8 w-8 " />,
  },
  {
    title: "Mobile Apps",
    desc: "Crafting high-performance iOS and Android applications with intuitive UI/UX for a superior mobile experience.",
    icon: <Smartphone style={{ color: SERVICES_COLORS[5] }} className="xl:w-12 xl:h-12 h-8 w-8 " />,
  },
  {
    title: "Web Development",
    desc: "Creating responsive, scalable, and modern web applications using the latest frameworks and cloud technologies.",
    icon: <Globe style={{ color: SERVICES_COLORS[6] }} className="xl:w-12 xl:h-12 h-8 w-8 " />,
  },
];
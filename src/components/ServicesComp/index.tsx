"use client";

import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/pagination";

import CustomButton from "../common/CustomButton";
import { SERVICES_DATA } from "@/constant/servicesData";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ServiceSlider = dynamic(() => import("./ServiceSlider"), {
  ssr: false,
});

export default function ServicesComp() {
 useGSAP(() => {
  gsap.set(".animate-fade", {
    opacity: 0,
    x: -100,
  });

  gsap.to(".animate-fade", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".animate-fade",
      start: "top 60%",
      once: true,
    },
  });
});
  return (
    <section className="hero-shape overflow-hidden font-sans">
      <div className="section-inner container mx-auto px-3 xl:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="animate-fade max-w-2xl xl:max-w-3xl">
            <span className="text-cyan-400 md:text-base text-sm font-medium mb-4 block italic">
              Empowering your digital transformation with next-gen tech
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight">
              Innovative technology solutions to scale your business and
              redefine efficiency
            </h2>
          </div>

          <CustomButton
            title="Explore All Services"
            className="md:w-auto w-full bg-white/10 hover:bg-cyan-500 text-white border border-white/10 backdrop-blur-xl"
          />
        </div>

        <div className="[&_.swiper-slide>div]:bg-gradient-to-br [&_.swiper-slide>div]:from-[#172033]/95 [&_.swiper-slide>div]:via-[#101827]/95 [&_.swiper-slide>div]:to-[#070b14]/95 [&_.swiper-slide>div]:border [&_.swiper-slide>div]:border-white/10 [&_.swiper-slide>div]:backdrop-blur-2xl [&_.swiper-slide>div]:shadow-[0_20px_60px_rgba(0,0,0,0.35)] [&_.swiper-slide>div]:transition-all [&_.swiper-slide>div]:duration-500 [&_.swiper-slide>div:hover]:border-cyan-400/30 [&_.swiper-slide>div:hover]:shadow-[0_25px_80px_rgba(34,211,238,0.16)]">
          <ServiceSlider data={SERVICES_DATA} />
        </div>

        <div className="mt-16 lg:text-base md:text-xs text-sm md:text-center flex flex-col md:flex-row justify-center items-center md:gap-1 gap-2">
          <p className="text-slate-300 max-w-lg">
            Get custom solutions for your business that help you leverage AI and
            Automation for the processes.
          </p>

          <CustomButton
            title="Talk to an expert!"
            variant="link"
            className="p-0! h-auto! lg:text-base md:text-xs text-sm text-cyan-400 hover:text-white hover:no-underline"
          />
        </div>
      </div>
    </section>
  );
}
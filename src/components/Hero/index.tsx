/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

import { HERO_SLIDER_DATA, ORBIT_THEME } from "@/constant/heroSliderData";
import AIOrbit from "../AIOrbit/AIOrbit";

export default function HeroSlider() {
  const container = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = HERO_SLIDER_DATA.length;

  return (
    <section
      ref={container}
      className="hero-shape relative w-full overflow-hidden font-sans bg-transparent"
      style={{ height: "calc(100vh - 125px)" }}
    >
      {/* Main Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="absolute inset-0 z-10 h-full"
      >
        {HERO_SLIDER_DATA.map((slide, i) => (
          <SwiperSlide key={i} className="h-full">
            <div className="h-full flex flex-col">
              <div className="flex-1 container mx-auto px-8 xl:px-16">
                <div className="grid h-full items-center grid-cols-2 gap-4">
                  {/* Left Content */}
                  <div className="flex flex-col justify-center py-8">
                    {/* Top Indicator */}
                    <div className="mb-5 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                        <span className="text-[10px] font-mono text-blue-400 font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="h-px w-12 bg-linear-to-r from-blue-500 to-transparent" />

                      <span className="text-[10px] font-mono text-white/30 tracking-widest">
                        / {String(totalSlides).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <AnimatePresence mode="wait">
                      <motion.h1
                        key={`title-${i}`}
                        className="mb-4 font-black tracking-tight text-white leading-none"
                        style={{
                          fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                      >
                        {slide.title}
                      </motion.h1>
                    </AnimatePresence>

                    {/* Small Line */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-0.5 w-16 bg-linear-to-r from-blue-500 to-cyan-400" />
                      <div className="h-0.5 w-4 bg-white/20" />
                    </div>

                    {/* Description */}
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`desc-${i}`}
                        className="text-base xl:text-lg text-blue-100/60 leading-relaxed max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.1,
                        }}
                      >
                        {slide.desc}
                      </motion.p>
                    </AnimatePresence>

                    {/* Buttons */}
                    <motion.div
                      className="mt-8 flex items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                      }}
                    >
                      <button className="px-7 py-3 bg-linear-to-r from-blue-600 to-blue-500 text-white text-sm font-bold rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-900/50 border border-blue-400/30">
                        Get Started
                      </button>

                      <button className="px-7 py-3 border border-white/15 text-white/70 text-sm font-semibold rounded-xl hover:border-blue-400/50 hover:text-blue-300 hover:bg-white/5 transition-all duration-300">
                        Learn More →
                      </button>
                    </motion.div>

                    {/* Service Icons */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`icons-${i}`}
                        className="mt-10 flex items-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3,
                        }}
                      >
                        {slide.services.map((s, si) => {
                          const Icon = s.icon;

                          return (
                            <motion.div
                              key={si}
                              className="flex flex-col items-center gap-2 group cursor-pointer"
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.3 + si * 0.07,
                              }}
                              whileHover={{ y: -3 }}
                            >
                              <div className="w-12 h-12 rounded-2xl border border-blue-400/20 bg-blue-500/10 flex items-center justify-center group-hover:border-blue-400/50 group-hover:bg-blue-500/20 transition-all">
                                <Icon className="text-xl text-blue-400 group-hover:text-cyan-300 transition-colors" />
                              </div>

                              <span className="text-[9px] text-white/40 font-semibold tracking-wide text-center uppercase group-hover:text-white/70 transition-colors whitespace-nowrap">
                                {s.title}
                              </span>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right Side */}
                  <div className="relative flex items-center justify-center h-full mr-30">
                    <div className="relative shrink-0">
                      <AIOrbit
                        services={slide.services}
                        resetKey={activeIndex}
                        theme={ORBIT_THEME}
                        centerIcon={slide.centerIcon}
                      />
                    </div>

                    {/* Floating Cards */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        className="flex flex-col gap-3 ml-30 shrink-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                      >
                        {slide.services.map((service, si) => {
                          const Icon = service.icon;

                          return (
                            <motion.div
                              key={si}
                              initial={{ opacity: 0, x: 40 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: si * 0.1,
                                duration: 0.4,
                              }}
                              className="group flex items-center gap-3 bg-transparent backdrop-blur border border-white/8 rounded-2xl px-4 py-3 hover:border-blue-400/40 hover:bg-blue-500/5 transition-all cursor-pointer w-44"
                              style={{
                                boxShadow:
                                  "inset 0 1px 0 rgba(255,255,255,0.05)",
                              }}
                            >
                              <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/30 transition-all">
                                <Icon className="text-xs text-blue-300" />
                              </div>

                              <div className="flex-1 min-w-0">
                                <span className="text-[11px] font-bold text-white/80 block truncate group-hover:text-white transition-colors">
                                  {service.title}
                                </span>

                                <div className="w-full h-px bg-white/5 rounded-full mt-1.5">
                                  <motion.div
                                    className="h-full bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{
                                      width: `${55 + si * 9}%`,
                                    }}
                                    transition={{
                                      delay: 0.7 + si * 0.1,
                                      duration: 0.9,
                                    }}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Futuristic Bottom Border */}
      {/* Tech style stepped straight bottom border */}
      {/* Bottom Pagination + Border Box */}
      <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
        {/* pagination box */}
        <div className="absolute bottom-[18px] left-0 pointer-events-auto">
          <div className="flex items-center gap-3 rounded-tr-2xl border-t-2 border-r-2 border-blue-400/35 bg-[#0b1735]/70 px-8 py-5 text-xs font-mono tracking-widest backdrop-blur-md w-[274px] ml-40">
            {HERO_SLIDER_DATA.map((_, i) => (
              <span
                key={i}
                className={`cursor-pointer transition-all ${
                  activeIndex === i
                    ? "text-blue-400 font-bold"
                    : "text-white/20 hover:text-white/50 w-5  -ml-1"
                }`}
                onClick={() => {
                  const swiperEl = container.current?.querySelector(
                    ".swiper",
                  ) as any;
                  swiperEl?.swiper?.slideToLoop(i);
                }}
              >
                {String(i + 1).padStart(2, "0")}.
              </span>
            ))}

            <div className="ml-3 h-px w-20 bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-linear-to-r from-blue-400 to-cyan-400"
                animate={{
                  width: `${((activeIndex + 1) / totalSlides) * 100}%`,
                }}
                transition={{ duration: 0.7 }}
              />
            </div>
          </div>
        </div>

        {/* bottom border starts after pagination width */}
        <div className="w-280 absolute bottom-[18px] left-[434px] right-0 h-px bg-linear-to-r from-cyan-400 via-blue-500/70 to-blue-500/20 shadow-[0_0_10px_rgba(34,211,238,0.55)]" />

     
      </div>
    </section>
  );
}

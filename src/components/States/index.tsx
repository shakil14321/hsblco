"use client";
import { STATS_DATA } from "@/constant/statsData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger register kora proyojon
import { useRef } from "react";

// GSAP Plugins register korun
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const States = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // General staggered entry for everything
      gsap.from(".stat-item, .main-experience", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".stats-wrapper",
          start: "top 80%",
        },
      });

      // Counter Animation Logic
      const counters = document.querySelectorAll(".counter-value");

      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target") || "0");
        const suffix = counter.getAttribute("data-suffix") || "";
        const isDecimal = counter.getAttribute("data-decimal") === "true";

        const obj = { value: 0 };

        gsap.to(obj, {
          value: target,
          duration: 2.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
          },
          onUpdate: () => {
            counter.textContent = isDecimal
              ? obj.value.toFixed(1) + suffix
              : Math.floor(obj.value).toLocaleString() + suffix;
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="">
      <div className="relative z-10  stats-wrapper py-24 container mx-auto px-6 lg:px-20 text-center">
        <span className="text-secondary mb-4 block italic font-medium tracking-wide">
          Measurable Impact, Global Reach
        </span>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
            Driving Digital Transformation with High-Performance Tech
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-20 text-lg">
            Our multi-layered security and monitoring systems ensure that your
            IoT networks, Blockchain transactions, and AI models operate with
            unmatched precision and integrity.
          </p>
        </div>

        <div className="grid grid-cols-12 items-end gap-8">
          {/* Main Experience Counter */}
          <div className="col-span-12 lg:col-span-3 group main-experience text-left lg:text-center -mt-15 lg:mb-0">
            <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-2">
              <h2
                className="counter-value text-[150px] md:text-[200px] lg:text-[225px] font-extrabold text-secondary leading-none"
                data-target={new Date().getFullYear() - 2013}
                data-suffix=""
                data-decimal="false"
              >
                0
              </h2>
              <span className="text-primary text-6xl md:text-8xl lg:text-9xl font-bold">
                +
              </span>
            </div>
            <p className="text-sm font-bold text-white mb-2 uppercase tracking-wide">
              Years of Experience
            </p>
            <p className="text-xs text-slate-500">
              Delivering excellence since day one
            </p>
          </div>

          {/* Stats Data Loop */}
          <div className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t lg:border-t-0 lg:border-l border-gray-100 pt-12 lg:pt-0 lg:pl-12">
            {STATS_DATA.map((stat, idx) => {
              const numValue = parseFloat(stat.value.replace(/[^0-9.]/g, ""));
              const suffix = stat.value.replace(/[0-9.]/g, "");
              const hasDecimal = stat.value.includes(".");

              return (
                <div key={idx} className="stat-item group">
                  <div
                    className="counter-value text-6xl lg:text-7xl font-bold text-secondary tracking-tighter mb-4 inline-block"
                    data-target={numValue}
                    data-suffix={suffix}
                    data-decimal={hasDecimal}
                  >
                    0{suffix}
                  </div>
                  <p className="text-gray-500 text-sm max-w-50 mx-auto leading-relaxed group-hover:text-primary transition-colors uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <div className="w-10 h-1.5 bg-primary/20 mx-auto mt-6 rounded-full group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default States;

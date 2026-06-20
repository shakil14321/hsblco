"use client";

import { useRef } from "react";
import services from "@/constant/aiSolution";
import { motion } from "framer-motion";


export default function AISolutions() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_45%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* ================= HEADER ================= */}
        <motion.div
         initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-4">
            AI Powered Services
          </motion.span>

          <motion.h2 className="text-4xl md:text-5xl xl:text-5xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto">
            Intelligent Digital Solutions For Modern Businesses
          </motion.h2>

          <motion.p className="text-slate-400 text-lg leading-8 max-w-3xl mx-auto mt-6">
            We build enterprise-grade AI, automation, and digital transformation
            solutions designed for speed, scalability, and future innovation.
          </motion.p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service , _index) => (
           <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: _index * 0.15,
                ease: "easeOut",
              }}
              className=" group relative mb-10 rounded-3xl border border-slate-800 bg-slate-900/20 p-8"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{
                    backgroundColor: `${service.color}20`,
                    border: `1px solid ${service.color}40`,
                  }}
                >
                  {service.icon}
                </div>

                <span
                  className="font-semibold text-sm uppercase tracking-wider"
                  style={{ color: service.color }}
                >
                  {service.name}
                </span>
              </div>
              <div
                className="w-16 h-1 rounded-full mb-6"
                style={{ backgroundColor: service.color }}
              />
              <p className="text-slate-300 leading-8 text-base">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: service.color }}
                  />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                </div>

                <button
                  className="text-2xl transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: service.color }}
                >
                  →
                </button>
              </div>
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top left, ${service.color}, transparent 60%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

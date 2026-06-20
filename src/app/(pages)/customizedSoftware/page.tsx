"use client";

import customizedSoftware from "@/constant/customizedSoftware";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <section className="bg-[#020b1c] min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center max-w-5xl mx-auto mb-10 mt-14"
        >
          <span className="text-cyan-400 font-bold tracking-[0.35em] uppercase text-sm">
            Customized Software
          </span>

          <h2 className="mt-6 text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Powerful Custom Software Solutions For Modern Businesses
          </h2>

          <p className="mt-8 text-xl text-slate-400 leading-9 max-w-4xl mx-auto">
            We develop scalable custom software, ERP platforms, management
            systems, and business automation solutions tailored to improve
            productivity, streamline operations, and accelerate digital
            transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customizedSoftware.map((software, _index) => (
            <motion.div
              key={software.id}
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
                    backgroundColor: `${software.color}20`,
                    border: `1px solid ${software.color}40`,
                  }}
                >
                  {software.icon}
                </div>

                <span
                  className="font-semibold text-sm uppercase tracking-wider"
                  style={{ color: software.color }}
                >
                  {software.name}
                </span>
              </div>
              <div
                className="w-16 h-1 rounded-full mb-6"
                style={{ backgroundColor: software.color }}
              />
              <p className="text-slate-300 leading-8 text-base">
                {software.description}
              </p>
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: software.color }}
                  />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                </div>

                <button
                  className="text-2xl transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: software.color }}
                >
                  →
                </button>
              </div>
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top left, ${software.color}, transparent 60%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

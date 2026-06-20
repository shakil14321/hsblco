"use client";

import mobileapps from "@/constant/mobileapps";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <section className="bg-[#020b1c] min-h-screen py-20 px-4">
      <div className=" relative max-w-7xl mx-auto mt-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <span className="text-cyan-400 font-bold tracking-[0.35em] uppercase text-sm">
            Web Application
          </span>

          <h2 className="mt-6 text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Modern Web Applications For Digital Businesses
          </h2>

          <p className="mt-8 text-xl text-slate-400 leading-9 max-w-4xl mx-auto">
            We build scalable web applications, SaaS platforms, e-commerce
            systems, booking solutions, payment gateways, and digital portals
            tailored for modern businesses.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mobileapps.map((app, _index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
             
              transition={{
                duration: 1,
                delay: _index * 0.08,
                
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#071426] p-6 transition-colors duration-300 hover:border-cyan-400/40"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-3xl"
                  style={{
                    backgroundColor: `${app.color}20`,
                    border: `1px solid ${app.color}40`,
                  }}
                >
                  {app.iconName}
                </div>

                <div className="flex-1">
                  <span
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: app.color }}
                  >
                    {app.name}
                  </span>
                </div>
              </div>

              {/* Accent Line */}
              <div
                className="w-16 h-1 rounded-full mb-6"
                style={{ backgroundColor: app.color }}
              />

              {/* Description */}
              <p className="text-slate-400 leading-8 text-base">
                {app.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: app.color }}
                  />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                </div>

                <button
                  className="text-2xl transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: app.color }}
                >
                  →
                </button>
              </div>

              {/* Glow Effect */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top left, ${app.color}, transparent 60%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

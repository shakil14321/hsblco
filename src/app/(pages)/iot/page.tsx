"use client";

import { motion } from "framer-motion";
import IoT from "@/constant/iot";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function IoTSolutions() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_45%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold">
            Internet Of Things
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-white leading-tight">
            Smart IoT Based Digital Solutions
          </h2>

          <p className="mt-5 text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-8">
            Powerful IoT systems designed for automation, communication,
            security, voting management, and smart business operations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {IoT.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariant}
              whileHover={{
                y: -6,
                scale: 1.015,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className={`
                group
                relative
                min-h-[220px]
                overflow-hidden
                rounded-[26px]
                border border-white/10
                bg-[#07111f]/95
                p-6
                backdrop-blur-xl
                shadow-[0_16px_55px_rgba(0,0,0,0.30)]
                hover:border-cyan-400/40
                hover:shadow-[0_22px_70px_rgba(34,211,238,0.16)]
                transition-all
                duration-500
                ease-out
                ${
                  item.id === 5
                    ? "md:col-span-2 md:max-w-130 md:mx-auto w-full"
                    : ""
                }
              `}
            >
              <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl opacity-45 transition duration-700 group-hover:opacity-75" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_48%)]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 flex items-start gap-4">
                  <div
                    className="
                      flex h-14 w-14 shrink-0 items-center justify-center
                      rounded-2xl
                      border border-cyan-300/20
                      bg-cyan-400/10
                      text-cyan-300
                      shadow-[0_10px_30px_rgba(34,211,238,0.14)]
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:bg-cyan-400/15
                      [&_svg]:h-7
                      [&_svg]:w-7
                    "
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-white text-xl md:text-2xl font-black leading-tight group-hover:text-cyan-300 transition-colors duration-500">
                    {item.name}
                  </h3>
                </div>

                <div className="mb-4 h-1 w-14 rounded-full bg-cyan-400 transition-all duration-500 group-hover:w-24" />

                <p className="text-slate-300 text-sm md:text-base leading-7 flex-1">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                  </div>

                  <span className="text-cyan-300 text-xl transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
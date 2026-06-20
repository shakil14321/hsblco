"use client";

import { machineLearning } from "@/constant/machine";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const MachineLearningPage = () => {
  return (
    <section className=" overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block text-cyan-400 uppercase tracking-[0.45em] text-xs font-black mb-6">
            Machine Learning Services
          </span>

          <h2 className="text-2xl md:text-4xl xl:text-5xl font-black text-white leading-[1.08] tracking-tight max-w-6xl mx-auto">
            Intelligent Machine Learning 
            <br />
             Solutions For Modern Businesses
          </h2>

          <p className="mt-8 text-slate-400 text-base md:text-xl leading-8 max-w-4xl mx-auto">
            We build advanced machine learning systems that help businesses
            automate operations, analyze large-scale data, predict outcomes,
            and accelerate intelligent digital transformation.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={containerVariant}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {machineLearning.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="
                group relative overflow-hidden rounded-[34px]
                border border-white/10 bg-[#081120]/95
                backdrop-blur-2xl p-8
                shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                hover:border-cyan-400/30
                hover:shadow-[0_30px_100px_rgba(34,211,238,0.16)]
                transition-all duration-500 ease-out
              "
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
};

export default MachineLearningPage;
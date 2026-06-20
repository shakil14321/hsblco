"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FAQ_DATA } from "@/constant/faqData";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../common/CustomButton";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 overflow-hidden bg-transparent z-50">
      <div className="relative container mx-auto px-6 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-24 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-10">
              <div className="relative rounded-[40px] faq-clip overflow-hidden aspect-square shadow-2xl border border-gray-100">
                <Image
                  width={1000}
                  height={1000}
                  src="https://plus.unsplash.com/premium_photo-1679870686437-2c3eb1de46d0?q=80&w=1528"
                  alt="Future Tech Infrastructure"
                  className="w-full h-full object-cover"
                />

                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                  className="absolute bottom-10 right-10 bg-white p-8 rounded-3xl faq-clip-2 shadow-2xl max-w-60 border border-gray-50"
                >
                  <h4 className="text-5xl font-black text-secondary mb-2 tracking-tighter">
                    98%
                  </h4>

                  <p className="text-gray-600 text-xs uppercase tracking-widest leading-relaxed mb-4">
                    Deployment Success rate in enterprise systems.
                  </p>

                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100"
                      >
                        <Image
                          width={40}
                          height={40}
                          src={`https://i.pravatar.cc/100?img=${i + 20}`}
                          alt="Global Client"
                        />
                      </div>
                    ))}

                    <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white">
                      +12k
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-primary mb-4 block uppercase tracking-[0.3em] text-xs"
            >
              Frequently Asked Questions
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-4xl lg:text-5xl xl:text-6xl text-white mb-8 leading-tight tracking-tight"
            >
              Decoding the Future of Technology.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-gray-400 text-lg mb-12 leading-relaxed"
            >
              We understand that integrating AI, Blockchain, and IoT can seem
              complex. Our goal is to simplify the transition and help you build
              a resilient digital backbone.
            </motion.p>

            <div className="space-y-4 mb-8">
              {FAQ_DATA.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: 0.15 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="border-b border-gray-100/20 pb-2"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center gap-5 py-5 text-left group"
                  >
                    <span
                      className={`text-lg xl:text-xl transition-all duration-300 ${
                        openIndex === index
                          ? "text-primary"
                          : "text-white group-hover:text-primary"
                      }`}
                    >
                      {item.question}
                    </span>

                    <div
                      className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        openIndex === index
                          ? "bg-secondary text-white rotate-180"
                          : "bg-blue-500 text-white group-hover:bg-blue-600"
                      }`}
                    >
                      {openIndex === index ? (
                        <Minus size={22} />
                      ) : (
                        <Plus size={22} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-400 text-lg leading-relaxed pl-1 max-w-xl pb-6">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <CustomButton
                title="Schedule Tech Consultation"
                className="bg-primary hover:bg-secondary text-white h-16 px-10 rounded-full shadow-lg shadow-primary/20 transition-all"
              />

              <p className="text-gray-400 text-sm font-medium">
                Average response time:{" "}
                <span className="text-white">24 hours</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
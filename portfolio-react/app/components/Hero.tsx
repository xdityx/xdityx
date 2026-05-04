"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { textRevealVariants, buttonHoverVariants } from "@/lib/animations";

export function Hero() {
  const title = "Aditya Acharya";
  const subtitle = "Data Scientist";
  const tagline = "Building ML systems that ship.";

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          variants={textRevealVariants}
          custom={0}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-sm font-medium text-slate-300">
            Open to opportunities
          </span>
        </motion.div>

        {/* Main title */}
        <div className="mb-6 overflow-hidden">
          <motion.h1
            variants={textRevealVariants}
            custom={1}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={textRevealVariants}
            custom={2}
            initial="hidden"
            animate="visible"
            className="text-2xl md:text-4xl font-light text-slate-400"
          >
            <span className="text-blue-400">{subtitle}</span>
          </motion.p>
        </div>

        {/* Tagline */}
        <motion.p
          variants={textRevealVariants}
          custom={3}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          <span className="text-white font-semibold">
            MLOps · Causal Inference · Forecasting
          </span>
          <br />
          {tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={textRevealVariants}
          custom={4}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonHoverVariants}
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              <span>View Projects</span>
              <span>→</span>
            </Link>
          </motion.div>
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonHoverVariants}
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors"
            >
              <span>Get in Touch</span>
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="text-slate-500 text-sm">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center mt-2">
            <motion.div className="w-1 h-3 bg-slate-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/constants";
import {
  containerVariants,
  itemVariants,
  fadeInUpVariants,
  slideInFromLeftVariants,
  slideInFromRightVariants,
} from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A bit about me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <motion.div
            variants={slideInFromLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-slate-300 leading-relaxed"
          >
            <p>
              I'm a <span className="text-white font-semibold">BSc Computer Science graduate</span> who spent a
              year in enterprise IT at TCS, working on production systems and automated workflows before deciding to
              pursue what genuinely excites me — making machines learn from data.
            </p>
            <p>
              Today I'm self-transitioning into data science with a focus on{" "}
              <span className="text-white font-semibold">causal ML and production-grade ML systems</span>. I hold the{" "}
              <span className="text-white font-semibold">Microsoft Certified Azure Data Scientist Associate (DP-100)</span>{" "}
              credential and am actively building a portfolio that goes beyond notebooks into real engineering artefacts.
            </p>
            <p>
              My core interests sit at the intersection of{" "}
              <span className="text-white font-semibold">causal inference, uplift modeling, and MLOps</span> — areas
              where rigorous statistics meets systems that actually ship to production.
            </p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.number}
                variants={itemVariants}
                whileHover={{ y: -8, borderColor: "rgb(59, 130, 246)" }}
                className="p-6 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

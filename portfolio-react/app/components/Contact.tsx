"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  fadeInUpVariants,
  containerVariants,
  itemVariants,
  buttonHoverVariants,
} from "@/lib/animations";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Build Something Together
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg mb-12 leading-relaxed"
          >
            Open to data science roles, freelance projects, and collaborations involving causal ML, MLOps, or
            forecasting.
          </motion.p>

          {/* Email CTA */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonHoverVariants}
            >
              <Link
                href="mailto:adityacharya1104@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors text-lg mb-8"
              >
                <span>✉️</span>
                <span>adityacharya1104@gmail.com</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div variants={itemVariants}>
              <Link
                href="https://github.com/xdityx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white rounded-lg transition-colors font-semibold"
              >
                <span>GitHub</span>
                <span>→</span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="https://linkedin.com/in/aditya-acharya-ds/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white rounded-lg transition-colors font-semibold"
              >
                <span>LinkedIn</span>
                <span>→</span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="https://xdityx.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white rounded-lg transition-colors font-semibold"
              >
                <span>Portfolio</span>
                <span>→</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

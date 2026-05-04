"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/constants";
import {
  containerVariants,
  itemVariants,
  fadeInUpVariants,
} from "@/lib/animations";

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/50 relative overflow-hidden">
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
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Toolkit
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Core competencies and proven expertise
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-slate-700 bg-slate-900/30 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skillGroup.icon}
              </div>

              {/* Category */}
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                {skillGroup.category}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-sm bg-blue-500/10 text-slate-300 border border-blue-500/20 rounded-full group-hover:border-blue-500/50 group-hover:text-blue-300 transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

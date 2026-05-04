"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/constants";
import {
  containerVariants,
  itemVariants,
  fadeInUpVariants,
} from "@/lib/animations";
import { useState } from "react";

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-800/50 relative overflow-hidden"
    >
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
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Things I've Built
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Production-ready ML systems with real business impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative p-8 rounded-xl border transition-all duration-300 cursor-default ${
                project.featured
                  ? "md:col-span-2 lg:col-span-1 border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-slate-900/50"
                  : "border-slate-700 bg-slate-900/30 hover:border-blue-500/50"
              } ${hoveredId === project.id || project.featured ? "border-blue-400/70" : ""}`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-0 right-0 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-bl-xl rounded-tr-xl">
                  Featured
                </div>
              )}

              {/* Top border animation */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-t-xl"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: hoveredId === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-green-500/10 text-green-400 border border-green-500/20 rounded-full"
                      >
                        <span>✓</span>
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    <span>→ GitHub</span>
                  </Link>
                  <Link
                    href={project.links.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                  >
                    <span>→ Case Study</span>
                  </Link>
                  {project.links.demo && (
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors"
                    >
                      <span>→ Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

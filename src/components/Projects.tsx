"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  embedUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Food Delivery App",
    description:
      "A comprehensive food delivery application designed with user experience at its core. Features intuitive navigation, real-time order tracking, and a seamless checkout flow.",
    embedUrl:
      "https://embed.figma.com/design/D5hKNfal4JoyyRflPW2Bbt/Food-Delivery?node-id=11647-1354&embed-host=share",
    tags: ["UX Design", "Mobile App", "Consumer Product"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 px-6 lg:px-12 bg-[#fffff1]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-medium text-[#252523] mb-6"
            style={{ fontFamily: "var(--font-league-spartan)" }}
          >
            Projects
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#999991] font-light mb-12 max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-league-spartan)" }}
          >
            A selection of product work showcasing strategy, design, and execution.
          </motion.p>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
              >
                {/* Project Header */}
                <div className="mb-6">
                  <h3
                    className="text-2xl md:text-3xl font-medium text-[#252523] mb-4"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-lg text-[#252523] font-light max-w-3xl mb-4 leading-relaxed"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm border border-[#999991] rounded-full text-[#999991]"
                        style={{ fontFamily: "var(--font-league-spartan)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Figma Embed Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                  className="iframe-container bg-white"
                >
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={project.embedUrl}
                      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p
              className="text-lg text-[#999991] font-light mb-6"
              style={{ fontFamily: "var(--font-league-spartan)" }}
            >
              Interested in seeing more work or discussing a project?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#252523] text-[#fffff1] rounded-full text-base font-medium transition-all duration-300 hover:bg-[#3a3a38]"
              style={{ fontFamily: "var(--font-league-spartan)" }}
            >
              Get in Touch
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

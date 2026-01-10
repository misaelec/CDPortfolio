"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const skills = [
  "LLM Workflows",
  "Personalization",
  "Matching Systems",
  "APIs",
  "Rapid Iteration",
  "Product Strategy",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 px-6 lg:px-12"
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
            About
          </motion.h2>

          {/* Main Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-[#252523] font-light leading-relaxed max-w-4xl mb-12"
            style={{ fontFamily: "var(--font-league-spartan)" }}
          >
            I lead the strategy and execution of AI-powered, consumer-facing
            products—defining roadmaps, validating with rapid prototypes, and
            turning insights into clear specs. Strong in LLM workflows,
            personalization, matching systems, APIs, and rapid iteration. I work
            hands-on with engineering and design to ship fast, improve funnels,
            and drive real user impact.
          </motion.p>

          {/* Skills Grid */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-base text-[#999991] mb-4 font-light"
              style={{ fontFamily: "var(--font-league-spartan)" }}
            >
              Areas of Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#252523", color: "#fffff1" }}
                  className="px-4 py-2 border border-[#999991] rounded-full text-sm text-[#252523] cursor-default transition-colors duration-300"
                  style={{ fontFamily: "var(--font-league-spartan)" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

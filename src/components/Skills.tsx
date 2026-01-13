"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      "Large Language Models",
      "Conversational AI",
      "Agentic AI",
      "Prompt Engineering",
      "RAG Systems",
      "Virtual Assistants",
    ],
  },
  {
    title: "Product",
    skills: [
      "Product Strategy",
      "Roadmaps",
      "User Research",
      "Rapid Prototyping",
      "MVP Development",
      "Sprint Planning",
    ],
  },
  {
    title: "Technical",
    skills: [
      "REST APIs",
      "Python",
      "JavaScript",
      "Webhooks",
      "Voiceflow",
      "Dialogflow",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Figma",
      "Jira",
      "Notion",
      "n8n",
      "Linear",
      "Confluence",
    ],
  },
];

export default function Skills() {
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
      id="skills"
      ref={ref}
      className="py-10 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-medium text-[#252523] mb-6"
            style={{ fontFamily: "var(--font-league-spartan)" }}
          >
            Skills
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#999991] font-light mb-12 max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-league-spartan)" }}
          >
            The things I reach for most often when solving problems.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
              >
                <h3
                  className="text-sm text-[#999991] mb-4 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-league-spartan)" }}
                >
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-base text-[#252523] font-light"
                      style={{ fontFamily: "var(--font-league-spartan)" }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

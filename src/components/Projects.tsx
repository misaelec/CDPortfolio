"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  embedUrl?: string;
  communityUrl?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Food Delivery App",
    description:
      "A comprehensive food delivery application designed with user experience at its core. Features intuitive navigation, real-time order tracking, and a seamless checkout flow.",
    embedUrl:
      "https://embed.figma.com/design/D5hKNfal4JoyyRflPW2Bbt/Food-Delivery?node-id=11647-1354&embed-host=share&scaling=min-zoom",
    tags: ["UX Design", "Mobile App", "Consumer Product"],
  },
  {
    id: 2,
    title: "Agentic Bot Diagram Kit",
    description:
      "A structured diagramming template for mapping AI agent workflows. Visualize interactions across four key lanes—User, Agent, Internal, and External—to design clear, scalable agentic systems.",
    communityUrl: "https://www.figma.com/community/file/1065000099888405411",
    tags: ["Figma Community", "AI Diagrams", "Workflow Design"],
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
      className="py-10 px-6 lg:px-12 bg-[#fffff1]"
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

                {/* Figma Embed or Community Link */}
                {project.embedUrl ? (
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
                ) : project.communityUrl ? (
                  <motion.a
                    href={project.communityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.01, y: -4 }}
                    className="block rounded-2xl border border-[#999991] bg-white p-8 md:p-12 transition-all duration-300 hover:border-[#252523] hover:shadow-lg"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#252523] flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#fffff1]" viewBox="0 0 38 57" fill="currentColor">
                            <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z"/>
                            <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z"/>
                            <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z"/>
                            <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z"/>
                            <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z"/>
                          </svg>
                        </div>
                        <div>
                          <span
                            className="text-lg font-medium text-[#252523]"
                            style={{ fontFamily: "var(--font-league-spartan)" }}
                          >
                            View on Figma Community
                          </span>
                          <p
                            className="text-sm text-[#999991]"
                            style={{ fontFamily: "var(--font-league-spartan)" }}
                          >
                            Free to duplicate and use
                          </p>
                        </div>
                      </div>
                      <svg
                        className="w-6 h-6 text-[#999991] group-hover:text-[#252523] transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </motion.a>
                ) : null}
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

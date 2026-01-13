"use client";

import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

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
    title: "Food Delivery Chatbot",
    description:
      "Ordering food through conversation instead of menus. The tricky part was making it feel helpful without being annoying when things go wrong.",
    embedUrl:
      "https://embed.figma.com/design/mMdNqpCsFn22frtihBkp68/-Projects----Food-Delivery?embed-host=share",
    tags: ["Conversational AI", "Chatbot"],
  },
  {
    id: 2,
    title: "Nationwide Sell Assistant",
    description:
      "Helping people find what they need without the pressure of a traditional sales call. Turns out the best approach is often just answering questions honestly.",
    embedUrl:
      "https://embed.figma.com/design/Csrb1HefbKLxoBPn25YIMd/-Projects----Nationwide-Sell?embed-host=share",
    tags: ["Conversational AI", "Chatbot"],
  },
  {
    id: 3,
    title: "Agentic Bot Diagram Kit",
    description:
      "A template for mapping out how AI agents actually work. Four lanes: what the user sees, what the agent does, and the internal and external systems involved. Free on Figma Community.",
    communityUrl: "https://www.figma.com/community/file/1065000099888405411",
    tags: ["Figma Community", "Open Source"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const handleProjectClick = (project: Project) => {
    if (project.communityUrl) {
      window.open(project.communityUrl, "_blank");
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <>
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
              A few things I&apos;ve worked on. Each one taught me something I didn&apos;t expect.
            </motion.p>

            {/* Projects Gallery */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {projects.map((project) => (
                <motion.button
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-shrink-0 w-80 text-left bg-white rounded-2xl border border-[#999991]/50 p-6 transition-all duration-300 hover:border-[#252523] hover:shadow-lg group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className="text-xl font-medium text-[#252523]"
                      style={{ fontFamily: "var(--font-league-spartan)" }}
                    >
                      {project.title}
                    </h3>
                    {project.communityUrl ? (
                      <svg
                        className="w-5 h-5 text-[#999991] group-hover:text-[#252523] transition-colors flex-shrink-0"
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
                    ) : (
                      <svg
                        className="w-5 h-5 text-[#999991] group-hover:text-[#252523] transition-colors flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                    )}
                  </div>
                  <p
                    className="text-sm text-[#999991] font-light leading-relaxed mb-4 line-clamp-3"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs border border-[#999991]/50 rounded-full text-[#999991]"
                        style={{ fontFamily: "var(--font-league-spartan)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.button>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm text-[#999991] mt-4"
              style={{ fontFamily: "var(--font-league-spartan)" }}
            >
              Click to explore
            </motion.p>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="mt-12 text-center"
            >
              <p
                className="text-lg text-[#999991] font-light mb-6"
                style={{ fontFamily: "var(--font-league-spartan)" }}
              >
                Working on something interesting? I&apos;d like to hear about it.
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

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#252523]/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#fffff1] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-6 border-b border-[#999991]/30">
                <div>
                  <h3
                    className="text-2xl font-medium text-[#252523] mb-2"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    {selectedProject.title}
                  </h3>
                  <p
                    className="text-base text-[#999991] font-light max-w-2xl"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    {selectedProject.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-[#999991] hover:text-[#252523] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Body - Figma Embed */}
              {selectedProject.embedUrl && (
                <div className="relative w-full" style={{ height: "60vh" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={selectedProject.embedUrl}
                    style={{ border: "none" }}
                    allowFullScreen
                  />
                </div>
              )}

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-4 border-t border-[#999991]/30">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm border border-[#999991] rounded-full text-[#999991]"
                      style={{ fontFamily: "var(--font-league-spartan)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-sm text-[#999991] hover:text-[#252523] transition-colors"
                  style={{ fontFamily: "var(--font-league-spartan)" }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

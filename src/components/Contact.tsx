"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
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
      id="contact"
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
            Contact
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#999991] font-light mb-12 max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-league-spartan)" }}
          >
            If you&apos;re building something with AI and want to think through it together, reach out.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* LinkedIn CTA */}
            <motion.div variants={itemVariants}>
              <p
                className="text-lg text-[#252523] font-light leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-league-spartan)" }}
              >
                Whether it&apos;s a project, a question, or just something you noticed about AI lately that made you think. I enjoy those conversations.
              </p>

              <motion.a
                href="https://linkedin.com/in/misaelec"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#252523] text-[#fffff1] rounded-xl font-medium transition-all duration-300 hover:bg-[#3a3a38] cursor-pointer"
                style={{ fontFamily: "var(--font-league-spartan)" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Message me on LinkedIn
              </motion.a>

              <motion.a
                href="https://github.com/misaelec"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-4 ml-0 md:ml-4 mt-4 md:mt-0 border border-[#999991] text-[#252523] rounded-xl font-medium transition-all duration-300 hover:border-[#252523] cursor-pointer"
                style={{ fontFamily: "var(--font-league-spartan)" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex items-end">
              <div className="grid grid-cols-2 gap-8 w-full">
                <div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="block text-4xl font-medium text-[#252523]"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    7+
                  </motion.span>
                  <span
                    className="text-sm text-[#999991]"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    Years Experience
                  </span>
                </div>
                <div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.9 }}
                    className="block text-4xl font-medium text-[#252523]"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    20+
                  </motion.span>
                  <span
                    className="text-sm text-[#999991]"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    Products Shipped
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

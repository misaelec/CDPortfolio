"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/misaelec",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/misaelec",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
          {/* Section Title */}
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

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#252523] mb-2"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[#999991] rounded-lg focus:outline-none focus:border-[#252523] transition-colors text-[#252523]"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#252523] mb-2"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[#999991] rounded-lg focus:outline-none focus:border-[#252523] transition-colors text-[#252523]"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#252523] mb-2"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-transparent border border-[#999991] rounded-lg focus:outline-none focus:border-[#252523] transition-colors text-[#252523] resize-none"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                    placeholder="What's on your mind?"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#252523] text-[#fffff1] rounded-lg font-medium transition-all duration-300 hover:bg-[#3a3a38] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-league-spartan)" }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center justify-center gap-2">
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Message Sent!
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3
                  className="text-xl font-medium text-[#252523] mb-4"
                  style={{ fontFamily: "var(--font-league-spartan)" }}
                >
                  Say hello
                </h3>
                <p
                  className="text-lg text-[#999991] font-light leading-relaxed"
                  style={{ fontFamily: "var(--font-league-spartan)" }}
                >
                  Whether it&apos;s a project, a question, or just something you noticed about AI lately that made you think. I enjoy those conversations.
                </p>
              </div>

              <div>
                <h4
                  className="text-sm font-medium text-[#999991] mb-4 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-league-spartan)" }}
                >
                  Elsewhere
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, color: "#252523" }}
                      className="p-3 border border-[#999991] rounded-full text-[#999991] hover:border-[#252523] transition-colors"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="pt-8 border-t border-[#999991]">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 }}
                      className="block text-3xl font-medium text-[#252523]"
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
                      className="block text-3xl font-medium text-[#252523]"
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
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

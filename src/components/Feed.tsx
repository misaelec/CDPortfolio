"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface LinkPreview {
  url: string;
  title: string;
  description?: string;
  image?: string;
}

interface Post {
  id: number;
  text: string;
  date: string;
  link?: LinkPreview;
}

const posts: Post[] = [
  {
    id: 1,
    text: "Been thinking about how the best AI products often do less, not more. The temptation is always to add capabilities, but sometimes removing options is what makes something actually usable.",
    date: "Jan 2025",
  },
  {
    id: 2,
    text: "Interesting read on why most chatbots fail at the handoff to human agents. The transition is where trust breaks down.",
    date: "Jan 2025",
    link: {
      url: "https://linkedin.com/in/misaelec",
      title: "Why Chatbot Handoffs Fail",
      description: "The moment a bot transfers to a human is where most experiences fall apart.",
    },
  },
  // Add more posts here
];

export default function Feed() {
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
      id="feed"
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
            Thoughts
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#999991] font-light mb-12 max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-league-spartan)" }}
          >
            Things I&apos;ve been thinking about lately.
          </motion.p>

          <div className="space-y-8 max-w-2xl">
            {posts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="pb-8 border-b border-[#999991]/30 last:border-0"
              >
                <p
                  className="text-base text-[#252523] font-light leading-relaxed mb-3"
                  style={{ fontFamily: "var(--font-league-spartan)" }}
                >
                  {post.text}
                </p>

                {post.link && (
                  <a
                    href={post.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 p-4 rounded-xl border border-[#999991]/30 hover:border-[#999991] transition-colors group cursor-pointer"
                  >
                    {post.link.image && (
                      <div className="mb-3 rounded-lg overflow-hidden bg-[#999991]/10">
                        <img
                          src={post.link.image}
                          alt=""
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    )}
                    <span
                      className="block text-sm font-medium text-[#252523] group-hover:underline"
                      style={{ fontFamily: "var(--font-league-spartan)" }}
                    >
                      {post.link.title}
                    </span>
                    {post.link.description && (
                      <span
                        className="block text-sm text-[#999991] mt-1"
                        style={{ fontFamily: "var(--font-league-spartan)" }}
                      >
                        {post.link.description}
                      </span>
                    )}
                    <span
                      className="block text-xs text-[#999991] mt-2 truncate"
                      style={{ fontFamily: "var(--font-league-spartan)" }}
                    >
                      {post.link.url.replace(/^https?:\/\//, '').split('/')[0]}
                    </span>
                  </a>
                )}

                <span
                  className="block text-sm text-[#999991] mt-3"
                  style={{ fontFamily: "var(--font-league-spartan)" }}
                >
                  {post.date}
                </span>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

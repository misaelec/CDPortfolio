"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface Role {
  company: string;
  title: string;
  period: string;
  description: string;
}

const roles: Role[] = [
  {
    company: "Azumo",
    title: "Product Lead, Conversational AI",
    period: "2025 - Present",
    description:
      "Consulting on AI products from early discovery through launch. Most of the work is helping teams figure out what they actually need before writing any code. The rest is translating that into something engineers can build.",
  },
  {
    company: "Stripe",
    title: "AI Operations Support",
    period: "2024 - 2025",
    description:
      "Built internal tools and workflows to help support teams work faster. Spent a lot of time documenting patterns that kept coming up, so others wouldn't have to solve the same problems twice.",
  },
  {
    company: "PayPal",
    title: "AI Content Designer",
    period: "2022 - 2024",
    description:
      "Designed knowledge bases and content systems for self-service. The goal was always reducing the number of times someone had to ask for help by making the first answer actually useful.",
  },
  {
    company: "Artificial Nerds",
    title: "Conversation Design Manager",
    period: "2018 - 2022",
    description:
      "Managed chatbots and voice assistants for contact centers across Latin America. Four years of learning what makes people trust a machine enough to have a conversation with it.",
  },
];

export default function Experience() {
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
      id="experience"
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
            Experience
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#999991] font-light mb-12 max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-league-spartan)" }}
          >
            Seven years of figuring out how to make AI work for real people in real situations.
          </motion.p>

          <div className="space-y-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.company}
                variants={itemVariants}
                className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
              >
                <div>
                  <span
                    className="text-sm text-[#999991] block"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    {role.period}
                  </span>
                  <span
                    className="text-base text-[#252523] font-medium"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    {role.company}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-lg font-medium text-[#252523] mb-2"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    {role.title}
                  </h3>
                  <p
                    className="text-base text-[#999991] font-light leading-relaxed"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    {role.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-[#999991]"
          >
            <p
              className="text-base text-[#999991] font-light leading-relaxed max-w-3xl"
              style={{ fontFamily: "var(--font-league-spartan)" }}
            >
              Along the way: improved containment rates to 95% on a banking support product, cut deployment times from weeks to days by standardizing our approach, and helped teams ship faster by documenting what actually works. The numbers matter, but what I remember most is the problems that seemed impossible until they weren&apos;t.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

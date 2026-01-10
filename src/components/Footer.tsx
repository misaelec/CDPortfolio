"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 lg:px-12 border-t border-[#999991] bg-[#fffff1]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="#" className="block">
              <Image
                src="/logo-dark.svg"
                alt="Misael"
                width={100}
                height={28}
                className="h-7 w-auto"
              />
            </Link>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-[#999991]"
            style={{ fontFamily: "var(--font-league-spartan)" }}
          >
            © {currentYear} All rights reserved.
          </motion.p>

          {/* Back to top */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-sm text-[#999991] hover:text-[#252523] transition-colors"
            style={{ fontFamily: "var(--font-league-spartan)" }}
          >
            Back to top
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

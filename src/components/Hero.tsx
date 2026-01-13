"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center pt-24 md:pt-10 pb-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#252523] mb-6 tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-league-spartan)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI Product
            </motion.h1>

            <motion.p
              className="text-lg text-[#999991] font-light max-w-xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-league-spartan)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Figuring out how to make AI actually useful for people
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#252523] text-[#fffff1] rounded-full text-base font-medium transition-all duration-300 hover:bg-[#3a3a38]"
                style={{ fontFamily: "var(--font-league-spartan)" }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-[#252523] text-[#252523] rounded-full text-base font-medium transition-all duration-300 hover:bg-[#252523] hover:text-[#fffff1]"
                style={{ fontFamily: "var(--font-league-spartan)" }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Video Space */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#252523]/5 border border-[#999991]/30">
              {/* Video placeholder - replace src with your video URL */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/video-poster.jpg"
              >
                {/* Add your video source here */}
                {/* <source src="/your-video.mp4" type="video/mp4" /> */}
              </video>

              {/* Placeholder overlay when no video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#252523]/10 flex items-center justify-center"
                  >
                    <svg
                      className="w-8 h-8 text-[#252523]/40"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                  <p
                    className="text-sm text-[#999991]"
                    style={{ fontFamily: "var(--font-league-spartan)" }}
                  >
                    Video Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

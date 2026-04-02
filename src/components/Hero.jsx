"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function Hero() {
  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="orb-2 absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-cyan-500/5 to-transparent blur-2xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Open to Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
        >
          <span className="text-white">Dhaval </span>
          <span className="gradient-text">Patel</span>
        </motion.h1>

        {/* Headline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-lg sm:text-xl lg:text-2xl font-medium text-white/70 mb-6"
        >
          MS Computer Science Student &nbsp;·&nbsp; AI/ML Engineer 
        </motion.p>

        {/* Intro */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          CS graduate student at UMass Amherst with experience building intelligent systems using LLMs, RAG, OCR, deep
          learning, and cloud technologies. I create practical AI-powered products, data-driven solutions, and scalable
          applications that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <button
            onClick={() => scrollToSection("#projects")}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            View Projects
            <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-semibold text-sm hover:bg-cyan-500/10 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
          >
            <Mail size={16} />
            Contact Me
          </button>

          <a
            href="/Dhaval_Patel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/70 font-semibold text-sm hover:text-white hover:border-white/40 hover:bg-white/5 hover:scale-105 transition-all duration-300"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="https://github.com/dhaval270"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-all duration-200 group"
          >
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 group-hover:shadow-glow transition-all duration-200">
              <Github size={18} />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/dhavalp210/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-all duration-200 group"
          >
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/40 group-hover:bg-blue-500/10 group-hover:shadow-glow-blue transition-all duration-200">
              <Linkedin size={18} />
            </div>
          </a>

          <a
            href="mailto:dmpatel2702@gmail.com"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-all duration-200 group"
          >
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 group-hover:shadow-glow transition-all duration-200">
              <Mail size={18} />
            </div>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

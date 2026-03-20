"use client";

import { motion } from "framer-motion";
import { BookOpen, Code2, Brain, MapPin } from "lucide-react";

const stats = [
  { value: "1+", label: "Years Experience", icon: Code2 },
  { value: "3", label: "Publications", icon: BookOpen },
  { value: "MS CS", label: "UMass Amherst", icon: Brain },
  { value: "AI/ML", label: "Specialization", icon: Brain },
];

const highlights = [
  "Building production-grade AI systems with LLMs and RAG pipelines",
  "Deep expertise in Python, TensorFlow, PyTorch, and cloud platforms",
  "Published researcher in NLP and computer vision",
  "Bridging academic research with real-world product impact",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Section background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center relative overflow-hidden shadow-glow animate-border-glow">
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, #06b6d4 0%, transparent 60%), radial-gradient(circle at 70% 70%, #3b82f6 0%, transparent 60%)",
                  }}
                />
                <span className="text-5xl font-bold gradient-text relative z-10">DP</span>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full bg-[#1a1a2e] border border-cyan-500/40 text-xs font-semibold text-cyan-400 shadow-glow">
                <MapPin size={10} className="inline mr-1" />
                Amherst, MA
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card p-4 text-center glow-border"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: About text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="card glow-border p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Who I Am</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                I&apos;m a Computer Science graduate student at the University of Massachusetts Amherst, pursuing my MS
                with a focus on artificial intelligence and machine learning. With a strong foundation in both theory and
                applied engineering, I love building systems that are not just smart — but practically useful.
              </p>
              <p className="text-white/60 leading-relaxed">
                My journey spans building production AI pipelines at Cilans Systems, conducting research in NLP and
                computer vision at CHARUSAT, and engineering deep learning models that outperform baselines by significant
                margins. I believe in shipping real-world impact through elegant, data-driven solutions.
              </p>
            </div>

            {/* Highlights */}
            <div className="card glow-border p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Key Highlights</h3>
              <ul className="flex flex-col gap-3">
                {highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3 text-white/60 text-sm"
                  >
                    <span className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

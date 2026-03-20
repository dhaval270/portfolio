"use client";

import { motion } from "framer-motion";
import { Award, Users, Cpu, BadgeCheck, Heart } from "lucide-react";

const items = [
  {
    icon: Award,
    color: "cyan",
    title: "Undergraduate Student Fellowship (UGSF)",
    description:
      "Awarded for academic excellence; contributed to research initiatives and supported academic projects to enhance undergraduate research development. Published two research papers during this tenure.",
  },
  {
    icon: Users,
    color: "blue",
    title: "Event Volunteer — Spoural & Cognizance",
    description:
      "Volunteered during Spoural and coordinated Cognizance events at CHARUSAT University, supporting event logistics and technical operations.",
  },
  {
    icon: Cpu,
    color: "purple",
    title: "Technical Coordinator — CHARUSAT",
    description:
      "Appointed as Technical Coordinator at the college for a one-year term during Bachelor's, overseeing technical activities and student initiatives.",
  },
  {
    icon: BadgeCheck,
    color: "cyan",
    title: "Microsoft Azure AI-900 Fundamentals",
    description:
      "Certified by Microsoft in Azure AI Fundamentals, covering core AI/ML concepts, Azure cognitive services, and responsible AI principles.",
  },
  {
    icon: Heart,
    color: "blue",
    title: "National Social Scheme (NSS) Member",
    description:
      "Active member of the National Social Scheme, contributing to social service activities and community support initiatives.",
  },
];

const colorMap = {
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-400",
    border: "border-cyan-500/20 group-hover:border-cyan-500/50",
    dot: "bg-cyan-400",
    glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-400",
    border: "border-blue-500/20 group-hover:border-blue-500/50",
    dot: "bg-blue-400",
    glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  },
  purple: {
    icon: "bg-purple-500/10 text-purple-400",
    border: "border-purple-500/20 group-hover:border-purple-500/50",
    dot: "bg-purple-400",
    glow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
  },
};

export default function Extracurricular() {
  return (
    <section id="extracurricular" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/4 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Beyond the Classroom</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Extracurricular &amp; <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        {/* Items */}
        <div className="flex flex-col gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            const c = colorMap[item.color];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group flex items-start gap-5 p-5 rounded-xl bg-[#111118] border transition-all duration-300 ${c.border} ${c.glow}`}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${c.icon}`}>
                  <Icon size={18} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1 leading-snug">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

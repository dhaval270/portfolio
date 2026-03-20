"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "AI/ML Intern",
    company: "Cilans Systems",
    location: "Ahmedabad, India",
    period: "Oct 2024 – Jun 2025",
    type: "Industry",
    color: "cyan",
    bullets: [
      "Designed document parsing pipelines using <b>OpenAI</b> and <b>Gemini API</b> for automated text extraction, multilingual language detection, and contextual understanding",
      "Integrated <b>Azure Cosmos DB</b> for semantic search and RAG-based Q&A over multilingual documents",
      "Reduced document processing time by <metric>47%</metric> by optimizing LLM prompts and retrieval strategies",
      "Built AI-powered summarization and contextual Q&A integrated with Azure pipelines, improving efficiency by <metric>63%</metric>",
      "Enhanced image quality using <b>OpenCV</b> and <b>YOLO</b> models, resulting in <metric>14%</metric> increase in image quality",
    ],
  },
  {
    role: "Research Intern",
    company: "CHARUSAT",
    location: "Changa, India",
    period: "May 2024 – Jun 2024",
    type: "Research",
    color: "blue",
    bullets: [
      "Improved construction resource estimation accuracy by <metric>24%</metric> using OCR-based floor plan dimensional data extraction",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Expoders Solutions",
    location: "Ahmedabad, India",
    period: "May 2023 – Jun 2023",
    type: "Industry",
    color: "purple",
    bullets: [
      "Achieved <metric>92% accuracy</metric> (vs. <b>83% baseline</b>) using <b>TensorFlow/Keras</b> deep learning models",
    ],
  },
];

function renderBullet(text) {
  const parts = text.split(/(<metric>.*?<\/metric>|<b>.*?<\/b>)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("<metric>")) {
      const content = part.replace(/<\/?metric>/g, "");
      return (
        <span key={idx} className="text-cyan-400 font-bold">
          {content}
        </span>
      );
    }
    if (part.startsWith("<b>")) {
      const content = part.replace(/<\/?b>/g, "");
      return (
        <span key={idx} className="text-white/80 font-medium">
          {content}
        </span>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
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
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Work History</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line hidden sm:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => {
              const dotColor =
                exp.color === "cyan"
                  ? "from-cyan-400 to-blue-400"
                  : exp.color === "blue"
                  ? "from-blue-400 to-blue-600"
                  : "from-purple-400 to-purple-600";
              const badgeStyle =
                exp.type === "Research"
                  ? "border-blue-500/30 text-blue-400 bg-blue-500/5"
                  : "border-cyan-500/30 text-cyan-400 bg-cyan-500/5";

              return (
                <motion.div
                  key={`${exp.company}-${i}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className={`hidden sm:flex absolute left-3.5 top-5 w-5 h-5 rounded-full bg-gradient-to-br ${dotColor} items-center justify-center shadow-glow flex-shrink-0 -translate-x-1/2`}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#0a0a0f]" />
                  </div>

                  {/* Card */}
                  <div className="card glow-border p-6 group hover:border-cyan-500/40 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase
                            size={15}
                            className={
                              exp.color === "cyan"
                                ? "text-cyan-400"
                                : exp.color === "blue"
                                ? "text-blue-400"
                                : "text-purple-400"
                            }
                          />
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        </div>
                        <p className="text-white/70 font-semibold">{exp.company}</p>
                      </div>
                      <span className={`badge text-xs border ${badgeStyle}`}>{exp.type}</span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-5">
                      <div className="flex items-center gap-1.5 text-sm text-white/40">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-white/40">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="flex flex-col gap-3">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-white/55 leading-relaxed">
                          <span
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${dotColor}`}
                          />
                          <span>{renderBullet(bullet)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

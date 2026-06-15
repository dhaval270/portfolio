"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "AI/ML Engineer",
    company: "Cilans System",
    location: "Ahmedabad, India",
    period: "July 2024 – Jun 2025",
    type: "Industry",
    color: "cyan",
    bullets: [
    "Built and optimized document parsing pipelines for the GranthAI platform using OpenAI and Gemini APIs, automating text extraction, multilingual language detection, and contextual content understanding across digitized documents.",
    "Integrated Azure Cosmos DB with scalable search and retrieval workflows, enabling efficient semantic search and RAG-based question answering over uploaded multilingual documents while supporting dynamic data management.",
    "Reduced end-to-end document processing time by 47% by refining LLM prompts, improving retrieval strategies, and streamlining workflow orchestration, resulting in faster and more accurate document analysis.",
    "Designed and deployed an intelligent text summarization and contextual Q&A pipeline by combining Azure-based data workflows with OCR and retrieval components, improving the relevance and quality of generated responses.",
    "Enhanced document image quality by 14% using OpenCV preprocessing techniques (denoising, contrast enhancement etc.) and YOLO-based region-of-interest detection, leading to more reliable OCR text extraction on noisy scanned documents.",
    "Engineered a proof-of-concept comparing LLM-based OCR with Python OCR libraries, demonstrating 15-20% improvement in accuracy and validating feasibility for production migration.",
    "Collaborated with team to develop a prompt-optimized extraction system that standardized invoice parsing despite variable client formatting, increasing accuracy by 21%.",
  ],
  },
  {
    role: "Research Intern",
    company: "Charotar University of Science and Technology (CHARUSAT)",
    location: "Anand, India",
    period: "May 2024 – Jul 2024",
    type: "Research",
    color: "blue",
    bullets: [
      "Streamlined construction resource estimation accuracy by <metric>24%</metric> by extracting dimensional information from floor plan images using OCR and optimizing material requirement calculations for greater precision and efficiency.",
      "Co-authored and published <metric>3 research papers</metric> on applied deep learning, presenting findings on BERT-based cognitive skill evaluation, YOLOv8-driven real-time activity detection, and novel approaches to improving model accuracy, efficiency, and real-world applicability across educational and sports analytics domains.",
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
      "Achieved <metric>92% model accuracy</metric>, outperforming the <metric>83% baseline</metric> from traditional machine learning approaches, by developing <b>TensorFlow/Keras</b>-based deep learning models and improving feature engineering and data preprocessing pipelines.",
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

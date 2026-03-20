"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Quote } from "lucide-react";

const publications = [
  {
    title:
      "Impact of BERT on Evaluating the Quality of Question Paper Using Bloom's Taxonomy",
    conference: "ICT4SD-2024",
    conferenceLabel: "International Conference on ICT Systems and Sustainability",
    doi: "10.1007/978-981-97-8526-16",
    doiUrl: "https://doi.org/10.1007/978-981-97-8526-1_6",
    area: "NLP / Education Technology",
    color: "cyan",
  },
  {
    title:
      "Real-Time Sports Analysis: Integrating YOLO with Enhanced Feature Pyramid Networks for Volleyball and Cricket Activity Detection",
    conference: "ADCIS-2024",
    conferenceLabel: "3rd International Conference on Advances in Data-driven Computing and Intelligent Systems",
    doi: "10.1007/978-981-96-4536-79",
    doiUrl: "https://doi.org/10.1007/978-981-96-4536-7_9",
    area: "Computer Vision / Sports AI",
    color: "blue",
  },
  {
    title:
      "Difficulty Level Prediction on Evaluating the Quality of Question Papers using Bloom's Taxonomy",
    conference: "AITA-2024",
    conferenceLabel: "2nd International Conference on Artificial Intelligence: Theory and Applications",
    description:
      "Extended prior work by modeling difficulty levels (easy/medium/hard) using BERT, Bloom's Taxonomy levels, and marks-based features.",
    doi: "10.1007/978-981-96-1918-4_54",
    doiUrl: "https://doi.org/10.1007/978-981-96-1918-4_54",
    area: "NLP / Education Technology",
    color: "purple",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl" />
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
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Research Output</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="gradient-text">Publications</span>
          </h2>
        </motion.div>

        {/* Publication cards */}
        <div className="flex flex-col gap-6">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.doi}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group card glow-border overflow-hidden relative"
            >
              {/* Left accent bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${
                  pub.color === "cyan"
                    ? "bg-gradient-to-b from-cyan-400 to-blue-500"
                    : pub.color === "blue"
                    ? "bg-gradient-to-b from-blue-400 to-purple-500"
                    : "bg-gradient-to-b from-purple-400 to-pink-500"
                }`}
              />

              <div className="p-6 pl-8">
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      pub.color === "cyan"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : pub.color === "blue"
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-purple-500/10 text-purple-400"
                    }`}
                  >
                    <BookOpen size={18} />
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 flex-1">
                    <span
                      className={`badge text-xs border font-semibold ${
                        pub.color === "cyan"
                          ? "border-cyan-500/40 text-cyan-400 bg-cyan-500/8"
                          : pub.color === "blue"
                          ? "border-blue-500/40 text-blue-400 bg-blue-500/8"
                          : "border-purple-500/40 text-purple-400 bg-purple-500/8"
                      }`}
                    >
                      {pub.conference}
                    </span>
                    <span className="badge text-xs border border-white/10 text-white/40 bg-white/3">
                      {pub.area}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="flex items-start gap-2 mb-4">
                  <Quote
                    size={14}
                    className={`mt-1 flex-shrink-0 opacity-30 ${
                      pub.color === "cyan" ? "text-cyan-400" : pub.color === "blue" ? "text-blue-400" : "text-purple-400"
                    }`}
                  />
                  <h3 className="text-white font-semibold text-base leading-snug group-hover:text-cyan-50 transition-colors">
                    {pub.title}
                  </h3>
                </div>

                {/* Conference full name */}
                <p className="text-white/40 text-sm mb-3 ml-5">{pub.conferenceLabel}</p>

                {/* Optional description */}
                {pub.description && (
                  <p className="text-white/50 text-sm mb-4 ml-5 leading-relaxed">{pub.description}</p>
                )}

                {/* DOI */}
                <div className="ml-5 flex items-center gap-2">
                  <span className="text-xs text-white/30">DOI:</span>
                  <a
                    href={pub.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-mono transition-colors duration-200 ${
                      pub.color === "cyan"
                        ? "text-cyan-500 hover:text-cyan-300"
                        : pub.color === "blue"
                        ? "text-blue-500 hover:text-blue-300"
                        : "text-purple-500 hover:text-purple-300"
                    }`}
                  >
                    {pub.doi}
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

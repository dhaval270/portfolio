"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";

const education = [
  {
    institution: "University of Massachusetts Amherst",
    degree: "MS Computer Science",
    period: "Sep 2025 – May 2027",
    gpa: "3.76 / 4.0",
    location: "Amherst, MA, USA",
    courses: [
      "Advanced NLP",
      "Machine Learning",
      "Neural Networks",
      "Software Engineering",
    ],
    color: "from-cyan-500 to-blue-500",
    accentColor: "cyan",
    logo: "UMA",
  },
  {
    institution: "CHARUSAT University",
    degree: "B.Tech Computer Engineering",
    period: "Oct 2021 – May 2025",
    gpa: "9.0 / 10.0",
    location: "Changa, Gujarat, India",
    courses: [
      "Data Structures",
      "DBMS",
      "Operating System",
      "AI",
      "Image Processing",
    ],
    color: "from-blue-500 to-purple-500",
    accentColor: "blue",
    logo: "CU",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Academic Journey</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative card overflow-hidden"
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${edu.color}`} />

              {/* Card glow on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}
                style={{
                  background:
                    edu.accentColor === "cyan"
                      ? "radial-gradient(ellipse at top, rgba(6,182,212,0.05) 0%, transparent 70%)"
                      : "radial-gradient(ellipse at top, rgba(59,130,246,0.05) 0%, transparent 70%)",
                }}
              />

              <div className="p-8 relative">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center font-bold text-white text-xs flex-shrink-0 shadow-glow`}
                  >
                    {edu.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-white/60 text-sm mt-0.5">{edu.location}</p>
                  </div>
                </div>

                {/* Degree */}
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-white font-semibold">{edu.degree}</span>
                </div>

                {/* Period & GPA */}
                <div className="flex flex-wrap gap-4 mb-5">
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award size={13} className="text-cyan-400" />
                    <span className="text-cyan-400 font-semibold">GPA: {edu.gpa}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 mb-5" />

                {/* Coursework */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={14} className="text-white/40" />
                    <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className={`badge text-xs border ${
                          edu.accentColor === "cyan"
                            ? "border-cyan-500/30 text-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/10"
                            : "border-blue-500/30 text-blue-400 bg-blue-500/5 hover:bg-blue-500/10"
                        }`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

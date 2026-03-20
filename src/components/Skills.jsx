"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Library, Cloud } from "lucide-react";

const skillGroups = [
  {
    category: "Programming",
    icon: Code2,
    color: "cyan",
    borderColor: "border-cyan-500/30",
    textColor: "text-cyan-400",
    bgColor: "bg-cyan-500/5",
    hoverBg: "hover:bg-cyan-500/15",
    iconBg: "from-cyan-500 to-cyan-600",
    skills: ["Python", "R", "C++", "HTML", "CSS", "Node.js"],
  },
  {
    category: "ML / AI",
    icon: Brain,
    color: "blue",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    bgColor: "bg-blue-500/5",
    hoverBg: "hover:bg-blue-500/15",
    iconBg: "from-blue-500 to-blue-600",
    skills: [
      "Deep Learning",
      "NLP",
      "LLMs",
      "RAG",
      "Data Analysis",
      "Data Visualization",
      "Statistics",
      "Predictive Modeling",
      "Time Series Analysis",
      "Feature Engineering",
      "Model Deployment",
      "Hyperparameter Tuning",
      "Cross-Validation",
    ],
  },
  {
    category: "Libraries",
    icon: Library,
    color: "purple",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
    bgColor: "bg-purple-500/5",
    hoverBg: "hover:bg-purple-500/15",
    iconBg: "from-purple-500 to-purple-600",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "FastAPI",
      "LangChain",
      "OpenAI",
      "OpenCV",
      "NLTK",
    ],
  },
  {
    category: "Tools & Cloud",
    icon: Cloud,
    color: "teal",
    borderColor: "border-teal-500/30",
    textColor: "text-teal-400",
    bgColor: "bg-teal-500/5",
    hoverBg: "hover:bg-teal-500/15",
    iconBg: "from-teal-500 to-cyan-600",
    skills: ["Git", "Docker", "AWS EC2", "AWS S3", "Microsoft Azure"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl" />
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
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Technical Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 glow-border group"
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${group.iconBg} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon size={16} className="text-white" />
                  </div>
                  <h3 className={`font-bold text-base ${group.textColor}`}>{group.category}</h3>
                </div>

                {/* Badge grid */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className={`badge text-xs border ${group.borderColor} ${group.textColor} ${group.bgColor} ${group.hoverBg} cursor-default transition-colors duration-200`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

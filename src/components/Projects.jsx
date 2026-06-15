"use client";

import { motion } from "framer-motion";
import { ExternalLink, BarChart3, Cpu, LayoutDashboard, ScanSearch } from "lucide-react";

const projects = [
  {
    title: "Sales & Inventory Digitalization System",
    icon: LayoutDashboard,
    description:
      "Digitalized the entire distributor workflow — replacing manual notebooks for sales, stock entries, and membership tracking with a real-time platform. Features dashboard analytics, low-stock alerts, volume point tracking, and printable period reports for profits, revenue, and inventory.",
    metrics: [
      { value: "Next.js 14", label: "full-stack framework" },
      { value: "End-to-End", label: "workflow digitalization" },
    ],
    tech: ["Next.js 14", "Supabase", "TypeScript", "Tailwind CSS"],
    gradient: "from-violet-500/20 to-purple-500/10",
    accentColor: "violet",
    badgeColor: "border-violet-500/30 text-violet-400 bg-violet-500/5",
    metricColor: "text-violet-400",
    projectLink: "https://github.com/dhaval270/sales_manage",
  },
  {
    title: "Robust Anomaly Detection",
    subtitle: "ML Research",
    icon: ScanSearch,
    description:
      "Investigated robustness of industrial anomaly detection models (PaDiM, PatchCore) on Wide-ResNet-50 against real-world image corruptions across 5 severity levels on the MVTec AD dataset. Revealed critical gaps where ROC-AUC collapsed to 0.36 under brightness corruption.",
    metrics: [
      { value: "30%", label: "robustness improvement" },
      { value: "0.61→0.79", label: "Gaussian noise AUC lift" },
    ],
    tech: ["PaDiM", "PatchCore", "Wide-ResNet-50", "PyTorch", "MVTec AD", "Data Augmentation"],
    gradient: "from-emerald-500/20 to-teal-500/10",
    accentColor: "emerald",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
    metricColor: "text-emerald-400",
    projectLink: "https://github.com/dhaval270/anomaly_detection",
  },
  {
    title: "Invoice Management System",
    icon: BarChart3,
    description:
      "Built an end-to-end invoice extraction and management system using OCR and Qwen VLM for accurate data capture, with a Flask backend, Next.js frontend, and Supabase storage. Features interactive Plotly dashboards for real-time expense tracking.",
    metrics: [
      { value: "19%", label: "reduction in data entry errors" },
      { value: "100+", label: "active users monthly" },
    ],
    tech: ["OCR", "Qwen VLM", "Flask", "Next.js", "Supabase", "Plotly"],
    gradient: "from-cyan-500/20 to-blue-500/10",
    accentColor: "cyan",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5",
    metricColor: "text-cyan-400",
    projectLink: "https://github.com/sdevss00/inventory_management",
  },
  {
    title: "Multiclass Bacteria Classification",
    subtitle: "Medical AI",
    icon: Cpu,
    description:
      "Fine-tuned EfficientNet for 24-class bacteria classification achieving state-of-the-art accuracy on medical imaging datasets. Applied transfer learning, advanced data augmentation, and systematic hyperparameter tuning to push model performance.",
    metrics: [
      { value: "97.59%", label: "classification accuracy" },
      { value: "24", label: "bacteria classes" },
    ],
    tech: ["EfficientNet", "CNN", "PyTorch", "TensorFlow", "Transfer Learning", "Medical AI"],
    gradient: "from-blue-500/20 to-purple-500/10",
    accentColor: "blue",
    badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/5",
    metricColor: "text-blue-400",
    projectLink: "https://github.com/dhaval270/bacteria-classification",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />
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
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative card overflow-hidden cursor-default"
              >
                {/* Gradient hover overlay */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.gradient} rounded-xl`}
                />

                {/* Glow border on hover */}
                <div
                  className={`absolute inset-0 rounded-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    project.accentColor === "cyan"
                      ? "border-cyan-500/40 shadow-glow"
                      : project.accentColor === "violet"
                      ? "border-violet-500/40"
                      : project.accentColor === "emerald"
                      ? "border-emerald-500/40"
                      : "border-blue-500/40 shadow-glow-blue"
                  }`}
                />

                <div className="relative p-7">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${
                        project.accentColor === "cyan"
                          ? "from-cyan-500 to-blue-500"
                          : project.accentColor === "violet"
                          ? "from-violet-500 to-purple-600"
                          : project.accentColor === "emerald"
                          ? "from-emerald-500 to-teal-600"
                          : "from-blue-500 to-purple-500"
                      } flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <span className={`text-xs font-medium ${project.metricColor}`}>{project.subtitle}</span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/55 text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4 mb-5 p-4 rounded-lg bg-white/3 border border-white/5">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className={`text-xl font-bold ${project.metricColor}`}>{m.value}</div>
                        <div className="text-xs text-white/40">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`badge text-xs border ${project.badgeColor}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        project.accentColor === "cyan"
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20"
                          : project.accentColor === "violet"
                          ? "bg-violet-500/10 text-violet-400 border border-violet-500/30 hover:bg-violet-500/20"
                          : project.accentColor === "emerald"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
                          : "bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20"
                      }`}
                    >
                      <ExternalLink size={14} />
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/dhaval270"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/60 text-sm font-medium hover:text-white hover:border-cyan-500/40 hover:shadow-glow transition-all duration-300"
          >
            View all projects on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

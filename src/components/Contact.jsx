"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Github, MapPin, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dmpatel2702@gmail.com",
    href: "mailto:dmpatel2702@gmail.com",
    color: "cyan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(878) 245-7847",
    href: "tel:+18782457847",
    color: "blue",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "dhavalp210",
    href: "https://www.linkedin.com/in/dhavalp210/",
    color: "blue",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "dhaval270",
    href: "https://github.com/dhaval270",
    color: "cyan",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Amherst, MA, USA",
    href: null,
    color: "purple",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-500/6 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            I&apos;m open to internships, research collaborations, and AI/ML engineering opportunities. Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-lg font-semibold text-white mb-2">Contact Information</h3>

            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const colors = {
                cyan: {
                  icon: "text-cyan-400",
                  bg: "bg-cyan-500/10",
                  border: "border-cyan-500/20",
                  hover: "hover:border-cyan-500/50 hover:bg-cyan-500/10",
                },
                blue: {
                  icon: "text-blue-400",
                  bg: "bg-blue-500/10",
                  border: "border-blue-500/20",
                  hover: "hover:border-blue-500/50 hover:bg-blue-500/10",
                },
                purple: {
                  icon: "text-purple-400",
                  bg: "bg-purple-500/10",
                  border: "border-purple-500/20",
                  hover: "hover:border-purple-500/50 hover:bg-purple-500/10",
                },
              };
              const c = colors[item.color];

              const content = (
                <div
                  className={`flex items-center gap-4 p-4 rounded-xl border ${c.border} bg-[#111118] ${
                    item.href ? `${c.hover} transition-all duration-200 cursor-pointer` : ""
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={c.icon} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-white/40 mb-0.5">{item.label}</p>
                    <p className={`text-sm font-medium truncate ${item.href ? c.icon : "text-white/70"}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}

           </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card glow-border p-8">
              <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3 py-10 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                    <CheckCircle size={28} className="text-cyan-400" />
                  </div>
                  <h4 className="text-white font-semibold">Message Sent!</h4>
                  <p className="text-white/50 text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

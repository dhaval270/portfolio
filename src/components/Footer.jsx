"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: Github,
    href: "https://github.com/dhaval270",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dhaval-patel-065563231/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:dmpatel2702@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0f]">
      {/* Subtle gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => scrollToSection(e, "#")}
              className="inline-flex items-center gap-2 mb-4 group"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-white text-sm shadow-glow group-hover:scale-105 transition-transform">
                DP
              </div>
              <span className="font-bold text-white group-hover:gradient-text transition-all">Dhaval Patel</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              AI/ML Engineer & CS graduate student at UMass Amherst building intelligent systems that solve real-world
              problems.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-white/40 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-white/40 hover:text-cyan-400 text-sm transition-colors duration-200 group"
                  >
                    <Icon size={15} className="group-hover:scale-110 transition-transform" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; 2025 Dhaval Patel. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}

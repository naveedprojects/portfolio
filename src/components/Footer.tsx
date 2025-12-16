"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-[#262626]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#a1a1aa] text-xs sm:text-sm">
          Built by Naveed Mazhar | 2025
        </p>

        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://github.com/naveedprojects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1aa] hover:text-white transition-colors"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://linkedin.com/in/n-mazhar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1aa] hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="mailto:mazharnaveed804@gmail.com"
            className="text-[#a1a1aa] hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

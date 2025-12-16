"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const socials = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:mazharnaveed804@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/n-mazhar",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/naveedprojects",
  },
  {
    name: "Upwork",
    icon: ExternalLink,
    href: "https://upwork.com/freelancers/naveed1996",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
            Let&apos;s Build Something
          </h2>
          <p className="text-[#a1a1aa] text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
            Available for consulting, full-time opportunities, and interesting AI projects.
            Let&apos;s discuss how I can help bring your ideas to production.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#141414] border border-[#262626] rounded-xl p-4 sm:p-6 card-hover group"
              >
                <social.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-[#a1a1aa] group-hover:text-[#3b82f6] transition-colors" />
                <p className="text-sm sm:text-base font-medium group-hover:text-[#3b82f6] transition-colors">{social.name}</p>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:mazharnaveed804@gmail.com"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#3b82f6] text-white text-sm sm:text-base font-medium rounded-xl hover:bg-[#2563eb] transition-colors"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Founding Engineer",
    company: "Phi Consulting / Data-Grid.ai",
    period: "May 2025 – Present",
    highlight: "Building agentic AI serving 15+ US logistics companies",
    current: true,
  },
  {
    role: "AI Engineer",
    company: "Turkish Aerospace Industries",
    period: "Apr 2024 – May 2025",
    highlight: "Led team of 5+ engineers, DRL systems with 85%+ win rate",
  },
  {
    role: "AI Engineer",
    company: "Kodifly, Hong Kong",
    period: "May 2023 – Apr 2024",
    highlight: "95%+ mAP traffic monitoring, 100+ camera feeds",
  },
  {
    role: "Senior ML Engineer",
    company: "Barbarians, Las Vegas",
    period: "Feb 2023 – May 2023",
    highlight: "8x inference speedup with TensorRT optimization",
  },
  {
    role: "Senior CV Engineer",
    company: "OMNOAI/ADLYTICAI",
    period: "Dec 2021 – Feb 2023",
    highlight: "200+ edge devices, 15+ products deployed",
  },
  {
    role: "Lead ML Engineer",
    company: "Ideeza, Israel",
    period: "Dec 2020 – Dec 2021",
    highlight: "Top-3 ShapeNet benchmark, 5-10x circuit design speedup",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-[#a1a1aa]">6+ years building production AI systems</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#262626] -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-[#3b82f6] rounded-full -translate-x-1/2 mt-2">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-[#3b82f6] animate-ping opacity-75" />
                )}
              </div>

              {/* Content */}
              <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 card-hover">
                  <p className="text-[#3b82f6] font-mono text-sm mb-1">{exp.period}</p>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-[#a1a1aa] mb-3">{exp.company}</p>
                  <p className="text-sm text-[#a1a1aa]">{exp.highlight}</p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

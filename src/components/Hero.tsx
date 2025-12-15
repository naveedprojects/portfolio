"use client";

import { motion } from "framer-motion";
import { ArrowDown, Phone, Target, Zap } from "lucide-react";

const stats = [
  { icon: Phone, value: "1,000+", label: "Calls/Day" },
  { icon: Target, value: "95%+", label: "Detection Accuracy" },
  { icon: Zap, value: "8x", label: "Inference Speedup" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Gradient Orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] gradient-orb" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] gradient-orb" style={{ animationDelay: "-3s" }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#3b82f6] font-mono text-sm mb-4"
            >
              ML Engineer | AI Systems Architect
            </motion.p>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              NAVEED<br />
              <span className="text-gradient">MAZHAR</span>
            </h1>

            <p className="text-[#a1a1aa] text-lg md:text-xl mb-8 max-w-lg">
              I build AI systems that work in production — not just notebooks and prototypes.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-[#262626] text-white font-medium rounded-lg hover:bg-[#141414] transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-[#141414] border border-[#262626] rounded-xl p-6 card-hover"
              >
                <stat.icon className="w-8 h-8 text-[#3b82f6] mb-4" />
                <p className="text-3xl font-bold font-mono">{stat.value}</p>
                <p className="text-[#a1a1aa] text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-6 h-6 text-[#a1a1aa]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Eye, Brain, Rocket, Users } from "lucide-react";

const cards = [
  {
    icon: Bot,
    title: "Agentic AI & LLMs",
    description: "Building autonomous agents with LangChain, LangGraph, and RAG pipelines serving 15+ companies",
    className: "md:col-span-2 md:row-span-2",
    highlight: true,
  },
  {
    icon: Cpu,
    title: "Voice AI",
    description: "Real-time voice agents with <500ms latency",
    className: "md:col-span-1",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "95%+ mAP detection systems",
    className: "md:col-span-1",
  },
  {
    icon: Brain,
    title: "Deep RL",
    description: "Multi-agent systems, 85%+ win rate in simulations",
    className: "md:col-span-1",
  },
  {
    icon: Rocket,
    title: "Edge Deployment",
    description: "40+ FPS on Jetson, 200+ devices",
    className: "md:col-span-1",
  },
  {
    icon: Users,
    title: "6+ Years",
    description: "Building production AI systems",
    className: "md:col-span-2",
    stats: true,
  },
];

export default function BentoGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          What I Build
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-[#141414] border border-[#262626] rounded-xl p-6 card-hover ${card.className} ${
                card.highlight ? "bg-gradient-to-br from-[#141414] to-[#1a1a2e]" : ""
              }`}
            >
              <card.icon className={`w-10 h-10 mb-4 ${card.highlight ? "text-[#3b82f6]" : "text-[#a1a1aa]"}`} />
              <h3 className={`text-xl font-bold mb-2 ${card.stats ? "text-4xl text-gradient" : ""}`}>
                {card.title}
              </h3>
              <p className="text-[#a1a1aa]">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

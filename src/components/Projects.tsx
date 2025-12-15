"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Camera, Plane, Cpu, Box } from "lucide-react";

const projects = [
  {
    icon: Phone,
    title: "Voice Calling Agents",
    company: "Phi Consulting",
    description: "Built autonomous voice agents for US logistics companies handling lead qualification and appointment booking.",
    metrics: ["1,000+ calls/day", "<500ms latency"],
    tags: ["LangChain", "Deepgram", "ElevenLabs", "FastAPI"],
    color: "#3b82f6",
  },
  {
    icon: Camera,
    title: "Traffic Monitoring System",
    company: "Kodifly, Hong Kong",
    description: "End-to-end computer vision pipeline for Hong Kong tunnel traffic monitoring using 2D/3D LiDAR fusion.",
    metrics: ["95%+ mAP", "100+ cameras", "30-60 FPS"],
    tags: ["PaddlePaddle", "ROS", "LiDAR", "Real-time"],
    color: "#22c55e",
  },
  {
    icon: Plane,
    title: "AI Dogfight Simulation",
    company: "Turkish Aerospace",
    description: "Deep reinforcement learning system for autonomous flight maneuvers and combat simulations.",
    metrics: ["85%+ win rate vs humans"],
    tags: ["Deep RL", "Multi-Agent", "PyTorch"],
    color: "#f59e0b",
  },
  {
    icon: Cpu,
    title: "Edge AI Deployment",
    company: "OMNOAI",
    description: "Hardware-optimized AI pipeline for NVIDIA Jetson devices powering real-time inference at scale.",
    metrics: ["40+ FPS", "200+ devices", "15+ products"],
    tags: ["TensorRT", "CUDA", "YOLOv5", "Docker"],
    color: "#ef4444",
  },
  {
    icon: Box,
    title: "3D Mesh Reconstruction",
    company: "Ideeza, Israel",
    description: "Single-image to 3D mesh reconstruction using CNN + Graph Neural Network architecture.",
    metrics: ["Top-3 on ShapeNet"],
    tags: ["pytorch3d", "GCN", "Computer Vision"],
    color: "#8b5cf6",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto">
            Production systems delivering measurable business impact
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#141414] border border-[#262626] rounded-xl p-6 md:p-8 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <project.icon className="w-7 h-7" style={{ color: project.color }} />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-[#3b82f6] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#a1a1aa] text-sm">{project.company}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#3b82f6] transition-colors" />
                  </div>

                  <p className="text-[#a1a1aa] mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-3 py-1 bg-[#22c55e]/10 text-[#22c55e] text-sm font-mono rounded-full"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#262626] text-[#a1a1aa] text-sm rounded-full"
                      >
                        {tag}
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

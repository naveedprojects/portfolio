"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "LLM & Agentic AI",
    skills: ["LangChain", "LangGraph", "CrewAI", "OpenAI SDK", "Anthropic SDK", "vLLM", "RAG", "HuggingFace"],
  },
  {
    title: "Voice AI",
    skills: ["Deepgram", "ElevenLabs", "AssemblyAI", "OpenAI Realtime", "Pipecat", "Vocode"],
  },
  {
    title: "Computer Vision",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "PaddlePaddle", "YOLOv5", "ViT", "3D Vision"],
  },
  {
    title: "Edge & Optimization",
    skills: ["TensorRT", "CUDA", "OpenVINO", "PyCUDA", "Jetson", "Quantization"],
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "FastAPI", "ROS", "NVIDIA DGX", "Cloud GPUs", "HPC"],
  },
  {
    title: "Languages",
    skills: ["Python", "C++", "CUDA", "MATLAB", "SQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-[#a1a1aa]">Tools I use to build production AI systems</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#141414] border border-[#262626] rounded-xl p-6 card-hover"
            >
              <h3 className="text-lg font-bold mb-4 text-[#3b82f6]">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#262626] text-[#fafafa] text-sm rounded-full hover:bg-[#3b82f6] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

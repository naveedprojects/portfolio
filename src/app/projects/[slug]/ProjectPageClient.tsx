"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Building2,
  Briefcase,
  CheckCircle2,
  Lightbulb,
  Layers,
  Target,
  Zap,
  Mail,
} from "lucide-react";
import { ProjectData } from "@/data/projects";

interface Props {
  project: ProjectData;
  prevProject: ProjectData | null;
  nextProject: ProjectData | null;
}

export default function ProjectPageClient({ project, prevProject, nextProject }: Props) {
  // Structured data for the project (Article schema)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: project.title,
    description: project.summary,
    author: {
      "@type": "Person",
      name: "Naveed Mazhar",
      url: "https://naveedmazhar.com",
      jobTitle: "AI Engineer",
    },
    publisher: {
      "@type": "Person",
      name: "Naveed Mazhar",
      url: "https://naveedmazhar.com",
    },
    url: `https://naveedmazhar.com/projects/${project.slug}`,
    mainEntityOfPage: `https://naveedmazhar.com/projects/${project.slug}`,
    keywords: project.metadata.keywords.join(", "),
    about: {
      "@type": "Thing",
      name: project.title,
      description: project.problem.description,
    },
    proficiencyLevel: "Expert",
  };

  return (
    <>
      <Script
        id="project-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-[#262626]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Projects</span>
          </Link>
          <Link href="/" className="text-xl font-bold">
            NM<span className="text-[#3b82f6]">.</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Project Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-6"
              style={{ backgroundColor: `${project.color}20`, color: project.color }}
            >
              <Building2 className="w-4 h-4" />
              {project.company}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 sm:gap-6 text-[#a1a1aa] mb-8">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm">{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{project.duration}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-lg sm:text-xl text-[#a1a1aa] max-w-3xl leading-relaxed">
              {project.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 border-y border-[#262626] bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {project.results.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p
                  className="text-3xl sm:text-4xl font-bold font-mono mb-1"
                  style={{ color: project.color }}
                >
                  {metric.value}
                </p>
                <p className="text-sm text-[#fafafa] font-medium">{metric.label}</p>
                <p className="text-xs text-[#a1a1aa] mt-1 hidden sm:block">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">{project.problem.title}</h2>
            </div>

            <p className="text-[#a1a1aa] text-lg leading-relaxed mb-8 max-w-3xl">
              {project.problem.description}
            </p>

            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-[#fafafa]">Key Challenges</h3>
              <ul className="space-y-3">
                {project.problem.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-[#a1a1aa]"
                  >
                    <span className="text-red-500 mt-1">•</span>
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-green-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">{project.solution.title}</h2>
            </div>

            <p className="text-[#a1a1aa] text-lg leading-relaxed mb-8 max-w-3xl">
              {project.solution.description}
            </p>

            <div className="space-y-4">
              {project.solution.approach.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-[#141414] border border-[#262626] rounded-xl p-4"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-sm"
                    style={{ backgroundColor: `${project.color}20`, color: project.color }}
                  >
                    {index + 1}
                  </div>
                  <p className="text-[#a1a1aa] pt-1">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Layers className="w-5 h-5 text-blue-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">{project.architecture.title}</h2>
            </div>

            <p className="text-[#a1a1aa] text-lg leading-relaxed mb-8 max-w-3xl">
              {project.architecture.description}
            </p>

            <div className="grid gap-4 sm:gap-6">
              {project.architecture.components.map((component, index) => (
                <motion.div
                  key={component.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#141414] border border-[#262626] rounded-xl p-6 hover:border-[#3b82f6]/50 transition-colors"
                >
                  <h3 className="text-lg font-bold mb-2" style={{ color: project.color }}>
                    {component.name}
                  </h3>
                  <p className="text-[#a1a1aa]">{component.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Details Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">{project.implementation.title}</h2>
            </div>

            <div className="space-y-8">
              {project.implementation.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-2 pl-6"
                  style={{ borderColor: project.color }}
                >
                  <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                  <p className="text-[#a1a1aa] leading-relaxed">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Tech Stack</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {project.techStack.map((stack, index) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#141414] border border-[#262626] rounded-xl p-5"
                >
                  <h3 className="text-sm font-semibold mb-3" style={{ color: project.color }}>
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#262626] text-[#fafafa] text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Learnings Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">{project.lessons.title}</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {project.lessons.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-[#141414] border border-[#262626] rounded-xl p-5"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: project.color }} />
                  <p className="text-[#a1a1aa] text-sm">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Interested in Similar Solutions?
            </h2>
            <p className="text-[#a1a1aa] text-lg mb-8">
              Let&apos;s discuss how I can help bring your AI ideas to production.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] text-white font-medium rounded-xl hover:bg-[#2563eb] transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-8 px-4 sm:px-6 border-t border-[#262626]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-col p-4 bg-[#141414] border border-[#262626] rounded-xl hover:border-[#3b82f6]/50 transition-colors"
              >
                <span className="text-xs text-[#a1a1aa] mb-1 flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Previous
                </span>
                <span className="text-sm sm:text-base font-medium group-hover:text-[#3b82f6] transition-colors line-clamp-1">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex flex-col p-4 bg-[#141414] border border-[#262626] rounded-xl hover:border-[#3b82f6]/50 transition-colors text-right ml-auto"
              >
                <span className="text-xs text-[#a1a1aa] mb-1 flex items-center gap-1 justify-end">
                  Next <ArrowRight className="w-3 h-3" />
                </span>
                <span className="text-sm sm:text-base font-medium group-hover:text-[#3b82f6] transition-colors line-clamp-1">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-[#262626]">
        <div className="max-w-5xl mx-auto text-center">
          <Link href="/" className="text-xl font-bold">
            NM<span className="text-[#3b82f6]">.</span>
          </Link>
          <p className="text-[#a1a1aa] text-sm mt-2">
            Built by Naveed Mazhar | 2025
          </p>
        </div>
      </footer>
    </main>
    </>
  );
}

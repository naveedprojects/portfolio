import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import ProjectPageClient from "./ProjectPageClient";

export const dynamic = "force-static";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.metadata.title,
    description: project.metadata.description,
    keywords: project.metadata.keywords,
    openGraph: {
      title: project.metadata.title,
      description: project.metadata.description,
      type: "article",
      url: `https://naveedmazhar.com/projects/${slug}`,
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: project.metadata.title,
      description: project.metadata.description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `https://naveedmazhar.com/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <ProjectPageClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}

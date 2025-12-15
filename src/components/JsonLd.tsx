export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Naveed Mazhar",
    url: "https://naveedmazhar.com",
    image: "https://naveedmazhar.com/opengraph-image",
    sameAs: [
      "https://linkedin.com/in/n-mazhar",
      "https://github.com/naveedprojects",
      "https://upwork.com/freelancers/naveed1996",
    ],
    jobTitle: "AI Engineer & ML Systems Architect",
    worksFor: {
      "@type": "Organization",
      name: "Phi Consulting / Data-Grid.ai",
    },
    description:
      "Expert AI Engineer with 6+ years building production-grade AI systems. Specializing in LLM & Agentic AI, Voice AI Agents, RAG Systems, Computer Vision, and Edge Deployment.",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Large Language Models",
      "LLM",
      "Agentic AI",
      "Voice AI",
      "Computer Vision",
      "TensorRT",
      "Edge Deployment",
      "LangChain",
      "LangGraph",
      "PyTorch",
      "TensorFlow",
      "RAG Systems",
      "OpenAI",
      "Anthropic Claude",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Middle East Technical University",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Naveed Mazhar - AI Engineer",
    url: "https://naveedmazhar.com",
    description:
      "Portfolio website of Naveed Mazhar, an expert AI Engineer specializing in LLM, Agentic AI, Voice AI, and Computer Vision.",
    author: {
      "@type": "Person",
      name: "Naveed Mazhar",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Naveed Mazhar - AI Engineering Services",
    url: "https://naveedmazhar.com",
    description:
      "Expert AI Engineering services including LLM development, Agentic AI systems, Voice AI agents, RAG implementations, and Computer Vision solutions.",
    provider: {
      "@type": "Person",
      name: "Naveed Mazhar",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LLM & Agentic AI Development",
            description:
              "Building production-grade AI agents using LangChain, LangGraph, and modern LLM frameworks.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Voice AI Solutions",
            description:
              "Developing voice AI agents with Deepgram, ElevenLabs, and real-time processing capabilities.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Computer Vision Systems",
            description:
              "Building high-performance CV systems with PyTorch, TensorFlow, and edge deployment optimization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Consulting",
            description:
              "Strategic AI consulting for startups and enterprises looking to implement production AI systems.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
}

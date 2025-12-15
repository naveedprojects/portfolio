import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naveedmazhar.com"),
  title: {
    default: "Naveed Mazhar | AI Engineer & ML Systems Architect",
    template: "%s | Naveed Mazhar",
  },
  description: "Expert AI Engineer with 6+ years building production-grade AI systems. Specializing in LLM & Agentic AI, Voice AI Agents, RAG Systems, Computer Vision, and Edge Deployment. Available for consulting and full-time opportunities.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "ML Engineer",
    "LLM Engineer",
    "Agentic AI Developer",
    "Voice AI Engineer",
    "RAG Systems",
    "Computer Vision Engineer",
    "Deep Learning Engineer",
    "TensorRT Optimization",
    "Edge AI Deployment",
    "LangChain Developer",
    "LangGraph Developer",
    "OpenAI API",
    "Anthropic Claude",
    "HuggingFace",
    "PyTorch Developer",
    "TensorFlow Developer",
    "AI Consultant",
    "AI Freelancer",
    "Naveed Mazhar",
  ],
  authors: [{ name: "Naveed Mazhar", url: "https://naveedmazhar.com" }],
  creator: "Naveed Mazhar",
  publisher: "Naveed Mazhar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naveedmazhar.com",
    siteName: "Naveed Mazhar - AI Engineer",
    title: "Naveed Mazhar | AI Engineer & ML Systems Architect",
    description: "Expert AI Engineer with 6+ years building production-grade AI systems. Specializing in LLM & Agentic AI, Voice AI, Computer Vision, and Edge Deployment.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveed Mazhar | AI Engineer & ML Systems Architect",
    description: "Expert AI Engineer with 6+ years building production-grade AI systems. LLM, Voice AI, Computer Vision, Edge Deployment.",
    images: ["/og-image.png"],
    creator: "@naveedmazhar",
  },
  alternates: {
    canonical: "https://naveedmazhar.com",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a0a] text-[#fafafa]`}
      >
        {children}
      </body>
    </html>
  );
}

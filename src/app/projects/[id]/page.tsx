import { resumeData } from "@/data/resume";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

// Define the type for the params. In Next.js 15+ (if that's what we are on, or 13+), params is a Promise in page props for async components sometimes, 
// but for static generation typically it's passed as props.
// Let's stick to the standard App Router pattern.

export function generateStaticParams() {
  return resumeData.projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = resumeData.projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background selection:bg-primary/20">
      <Navbar />
      
      <div className="pt-32 pb-16 max-w-4xl mx-auto px-4">
        <Link 
            href="/#projects" 
            className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>

        <header className="mb-12 border-b border-border pb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{project.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground font-mono text-sm">
                <span className="text-primary">{project.role}</span>
                <span className="hidden sm:block">•</span>
                <span>{project.date}</span>
            </div>
        </header>

        {/* Project Image Area */}
        <div className="mb-12 bg-secondary/10 rounded-lg overflow-hidden border border-border aspect-video relative flex items-center justify-center">
             {'image' in project && project.image ? (
                <img 
                    src={project.image as string} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                />
             ) : (
                <div className="text-muted-foreground font-mono text-sm">
                    [Project Image Placeholder]
                </div>
             )}
        </div>

        <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Project Overview</h2>
            <ul className="space-y-4 text-muted-foreground leading-relaxed">
                {project.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span>{desc}</span>
                    </li>
                ))}
            </ul>
        </div>
        
        {/* Placeholder for more content */}
        <div className="mt-16 p-8 border border-dashed border-border rounded bg-card/50 text-center">
            <p className="text-muted-foreground font-mono text-sm">
                Detailed case study, galleries, and technical diagrams to be added.
            </p>
        </div>
      </div>

      <Contact />
    </main>
  );
}


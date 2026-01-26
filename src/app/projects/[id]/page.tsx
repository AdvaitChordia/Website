import { resumeData } from "@/data/resume";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { ArrowLeft, FileText, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectContent } from "@/components/ProjectContent";

export function generateStaticParams() {
  return resumeData.projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = resumeData.projects.find((p) => p.id === params.id) as any;

  if (!project) {
    notFound();
  }

  // Check for enhanced project fields
  const hasOverview = 'overview' in project;
  const hasJournal = 'journal' in project && project.journal?.length > 0;
  const hasSections = 'sections' in project && project.sections?.length > 0;
  const hasPoster = 'poster' in project;
  const hasPaper = 'paper' in project;
  const hasProposal = 'proposal' in project;
  const hasPresentation = 'presentation' in project;
  const hasTags = 'tags' in project && project.tags?.length > 0;
  const hasHeroImage = 'image' in project;
  const hasPhotos = 'photos' in project && project.photos?.length > 0;

  return (
    <main className="min-h-screen selection:bg-primary/20">
      <Navbar />

      {/* Hero - Full width poster */}
      {hasPoster && (
        <div className="pt-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <Link
              href="/#projects"
              className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
            </Link>

            {/* Poster Embed */}
            <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl bg-card">
              <div className="aspect-[16/10] w-full">
                <iframe
                  src={`${project.poster}#view=FitH`}
                  className="w-full h-full"
                  title="Research Poster"
                />
              </div>
              <a
                href={project.poster}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
              >
                <ExternalLink className="w-4 h-4" /> Open Full Poster
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Image - Compact with overlay */}
      {hasHeroImage && !hasPoster && (
        <div className="pt-20">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <Link
              href="/#projects"
              className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-4 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
            </Link>

            <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl bg-card">
              {/* Compact hero image */}
              <div className="relative w-full h-[300px] md:h-[350px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-[50%_25%]"
                  priority
                />
              </div>
              {/* Overlay with project info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg">{project.title}</h1>
                <div className="flex flex-wrap items-center gap-3 text-white/90 font-mono text-sm mb-3">
                  <span className="text-primary-foreground bg-primary/80 px-2 py-0.5 rounded">{project.role}</span>
                  <span>{project.date}</span>
                </div>
                {hasTags && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 5).map((tag: string, i: number) => (
                      <span key={i} className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-xs font-mono text-white rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="px-2 py-0.5 bg-white/10 text-xs font-mono text-white/70 rounded-full">
                        +{project.tags.length - 5} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`${(hasPoster || hasHeroImage) ? 'pt-8' : 'pt-32'} pb-16 max-w-4xl mx-auto px-4`}>
        {/* Back link if no poster or hero image */}
        {!hasPoster && !hasHeroImage && (
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
          </Link>
        )}

        {/* Header - Only show full header if no hero image overlay */}
        {!hasHeroImage && (
          <header className="mb-12 border-b border-border pb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{project.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground font-mono text-sm mb-6">
              <span className="text-primary">{project.role}</span>
              <span className="hidden sm:block">•</span>
              <span>{project.date}</span>
            </div>

            {/* Tags */}
            {hasTags && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 border border-primary/20 text-xs font-mono text-primary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
        )}

        {/* Document Links */}
        {(hasPoster || hasPaper || hasProposal || hasPresentation) && (
          <div className="flex flex-wrap gap-4 mb-12">
            {hasPaper && (
              <a
                href={project.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">Technical Paper</p>
                  <p className="text-xs text-muted-foreground">Download Full PDF</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-2" />
              </a>
            )}
            {hasPresentation && (
              <a
                href={project.presentation}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">Presentation</p>
                  <p className="text-xs text-muted-foreground">View Slides</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-2" />
              </a>
            )}
            {hasProposal && (
              <a
                href={project.proposal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">Project Proposal</p>
                  <p className="text-xs text-muted-foreground">View PDF</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-2" />
              </a>
            )}
            {hasPoster && (
              <a
                href={project.poster}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">Research Poster</p>
                  <p className="text-xs text-muted-foreground">View PDF</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-2" />
              </a>
            )}
          </div>
        )}

        <ProjectContent project={project} />
      </div>

      <Contact />
    </main>
  );
}

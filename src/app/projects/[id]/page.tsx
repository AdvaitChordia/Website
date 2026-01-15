import { resumeData } from "@/data/resume";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { ArrowLeft, FileText, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

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

      {/* Hero Image - If no poster */}
      {hasHeroImage && !hasPoster && (
        <div className="pt-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <Link
              href="/#projects"
              className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
            </Link>

            <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl bg-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[600px] object-cover"
              />
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

        {/* Header */}
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

        {/* Overview */}
        {hasOverview && (
          <div className="mb-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-border rounded-2xl">
            <p className="text-xl text-foreground leading-relaxed italic">
              "{project.overview}"
            </p>
          </div>
        )}

        {/* Photo Gallery */}
        {hasPhotos && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.photos.map((photo: { src: string; caption: string }, i: number) => (
                <div key={i} className="group relative aspect-square rounded-lg overflow-hidden border border-border">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="absolute bottom-3 left-3 right-3 text-white text-xs leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Journal Entries */}
        {hasJournal && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-foreground">My Journey</h2>
            <div className="space-y-16">
              {project.journal.map((entry: { title: string; content: string; image?: string }, i: number) => (
                <article key={i} className="relative">
                  {/* Entry number indicator */}
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>

                  <div className={`pl-8 ${entry.image ? 'grid md:grid-cols-2 gap-8 items-start' : ''}`}>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4">{entry.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg font-light">
                        {entry.content}
                      </p>
                    </div>
                    {entry.image && (
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-lg">
                        <img
                          src={entry.image}
                          alt={entry.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Key Contributions (brief) */}
        <div className="mb-12 p-6 bg-card/50 border border-border rounded-xl">
          <h2 className="text-lg font-bold mb-4 text-foreground">Key Results</h2>
          <ul className="space-y-2">
            {project.description.filter((d: string) => !d.startsWith('<!--')).map((desc: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground font-light">
                <span className="text-primary mt-1">✓</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Legacy sections support */}
        {hasSections && !hasJournal && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Project Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.sections.map((section: { title: string; content: string }, i: number) => (
                <div key={i} className="p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
                  <h3 className="text-lg font-bold text-primary mb-3">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fallback for projects without enhanced content */}
        {!hasOverview && !hasSections && !hasJournal && (
          <div className="mt-16 p-8 border border-dashed border-border rounded bg-card/50 text-center">
            <p className="text-muted-foreground font-mono text-sm">
              Detailed case study content coming soon.
            </p>
          </div>
        )}
      </div>

      <Contact />
    </main>
  );
}

"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProjectPage() {
  const { slug } = useParams() as { slug: string };

  const project = ProjectList.find((p) => p.id === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <p className="text-muted-foreground">
            The project you are looking for does not exist.
          </p>
          <Link
            href="/works"
            className="mt-4 inline-block text-primary hover:underline"
          >
            Back to Works
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="container relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-16 flex items-center justify-between">
        <Link
          href="/works"
          className="text-muted-foreground hover:text-primary"
        >
          ← Back to Works
        </Link>
        <h1 className="text-xl font-bold">{project.name}</h1>
      </div>

      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
          {project.name}
        </h1>
        <p className="max-w-2xl text-xl text-muted-foreground">
          {project.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2">
          {project.image ? (
            <div className="overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.name}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-96 bg-muted rounded-2xl text-muted-foreground">
              No image available
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Tech Stack</h2>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 bg-muted rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Project Info</h2>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">Type:</span> {project.type}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Role:</span> {project.role}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Timeline:</span>{" "}
                  {project.timeline}
                </p>
              </div>
            </div>

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg text-center hover:bg-primary/90"
              >
                View Live Site
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 border border-border font-semibold rounded-lg text-center hover:bg-muted"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {project.features && project.features.length > 0 && (
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-surface rounded-2xl border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="mb-3 text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.challenges && (
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Challenges & Solutions</h2>
          <div className="p-8 bg-surface rounded-2xl border border-border">
            <p className="text-muted-foreground whitespace-pre-line">
              {project.challenges}
            </p>
          </div>
        </div>
      )}

      <div className="mb-16 text-center">
        <h2 className="mb-8 text-3xl font-bold">Learnings</h2>
        <p className="mx-auto max-w-3xl text-muted-foreground whitespace-pre-line">
          {project.learnings}
        </p>
      </div>

      <div className="mt-16 flex items-center justify-center gap-6">
        {project.prevSlug && (
          <Link
            href={`/works/${project.prevSlug}`}
            className="px-6 py-3 bg-surface border border-border rounded-lg hover:bg-muted hover:border-primary"
          >
            Previous Project
          </Link>
        )}
        {project.nextSlug && (
          <Link
            href={`/works/${project.nextSlug}`}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
          >
            Next Project
          </Link>
        )}
      </div>
    </section>
  );
}

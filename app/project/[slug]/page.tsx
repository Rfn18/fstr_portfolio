import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectDetail } from "./project-detail";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const showcase = projects.find((p) => p.slug === slug);

  if (!showcase) {
    notFound();
  }

  return <ProjectDetail showcase={showcase} />;
}
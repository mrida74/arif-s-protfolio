import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project One",
    description: "A modern web app built with Next.js and Tailwind CSS.",
    link: "#",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Project Two",
    description: "Interactive UI with Framer Motion and shadcn/ui.",
    link: "#",
    tech: ["Framer Motion", "shadcn/ui"],
  },
];

export default function ProjectList() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
}

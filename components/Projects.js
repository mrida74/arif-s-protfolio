
import ProjectSectionTitle from "./ProjectSectionTitle";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 w-[90%] mx-auto bg-white dark:bg-gray-900 rounded-xl shadow">
      <ProjectSectionTitle />
      <ProjectList />
    </section>
  );
}

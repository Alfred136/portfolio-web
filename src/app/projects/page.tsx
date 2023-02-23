import React from "react";
import ProjectCard from "@/components/ProjectCard";
import SlideUp from "@/components/SlideUp";
import { projects } from "@/constant";
import { styles } from "@/styles";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={`${styles.subHeading}`}>
        All Projects
        <hr className="w-[60px] h-2 mr-auto my-4 bg-lightest" />
      </h2>

      {projects.map((project) => (
        <SlideUp key={project.name} offset="-300px 0px -300px 0px">
          <ProjectCard project={project} />
        </SlideUp>
      ))}
    </section>
  );
}

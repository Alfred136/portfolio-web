"use client";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constant";
import { Link as ScrollLink } from "react-scroll/modules";
import { styles } from "@/styles";

export default function Home() {
  return (
    <>
      <section id="hero" className="flex flex-col py-10 mb-20">
        <h1 className={`${styles.heading}`}>
          👋🏼 Hi, I&#39;m
          <span className="text-primary"> Alfred</span>
        </h1>
        <p className="max-w-[900px] text-[18px] xs:text-[24px] md:text-[30px] font-code mt-1">
          A front-end developer who loves building responsive{" "}
          <span className="text-lighter">web/mobile</span> applications. Check
          out my recent{" "}
          <ScrollLink to="recent" offset={-100}>
            <span className="text-lighter hover:text-primary hover:cursor-pointer">
              side-projects
            </span>
          </ScrollLink>{" "}
          below.
        </p>
      </section>

      <section id="recent" className={styles.section}>
        <h2 className={`text-center ${styles.subHeading}`}>
          Recent Works
          <hr className="w-[60px] h-2 mx-auto my-4 bg-lightest" />
        </h2>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>
    </>
  );
}

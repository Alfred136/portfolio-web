import React from "react";
import Image from "next/image";
import Button from "./Button";
import { IProject } from "@/constant";

interface IProjectCardProps {
  project: IProject;
}

export default function ProjectCard(props: IProjectCardProps): JSX.Element {
  const { id, name, details, imageURL, github, link, stack } = props.project;
  return (
    <div className="max-w-[1000px] m-auto bg-white rounded-md shadow-2xl relative">
      <div className="w-full h-full flex md:flex-row flex-col gap-2">
        <div className="md:w-2/5 card-img-container">
          <Image
            src={imageURL}
            alt={name}
            width={1920}
            height={1080}
            className="md:rounded-l-md md:rounded-r-none rounded-t-md product-card-img"
          />
        </div>

        <div className="flex flex-col gap-8 ss:px-10 md:w-3/5 md:px-6 md:py-10 px-6 pt-4 pb-10">
          <h3 className="text-[20px] xs:text-[24px]">{name}</h3>
          <p className="text-[14px] xs:text-[16px]">{details}</p>
          <div className="flex flex-wrap">
            {stack.map((item) => (
              <span
                key={`${name}-${item}`}
                className="rounded-md border-[2px] border-blue-200 text-[12px] xs:text-[14px] text-gray-500 px-2 py-1 mr-2"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {id !== "portfolio" ? (
              <Button title={"Live Demo"} link={link} />
            ) : null}
            <Button title={"View Code"} link={github} />
          </div>
        </div>
      </div>
    </div>
  );
}

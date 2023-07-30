"use client";
import React from "react";
import Link from "next/link";
import { Link as EmailLink } from "@react-email/link";
import { skills, contacts } from "@/constant";
import { styles } from "@/styles";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="flex sm:flex-row flex-col gap-6 justify-between">
        <div className="flex flex-col sm-[70%]">
          <h1 className={`${styles.heading}`}>👋🏼 Nice to meet you</h1>
          <div className="flex flex-col gap-8 text-[16px] xs:text-[18px] md:text-[20px] max-w-[600px] mt-10">
            <p>
              I graduated in 2022 with a Computer Science degree. Being
              passionate about web/mobile/game development, I am seeking to join
              a team where people share the same passion and grow together.
            </p>
            <p>
              My key weapon is{" "}
              <span className="font-bold text-primary">
                the willingness to listen to and work with people.
              </span>{" "}
              I love learning new skills and exploring different possibilities.
              Recently I am planning to visit Toronto and develop my career
              here. Feel free to contact me for jobs if you think I am a good
              fit and can add value to your team and company!
            </p>
            <p>Thanks for checking me out and have a nice day!😎</p>
          </div>
        </div>

        <section
          id="skills"
          className="flex flex-col items-center sm:items-end sm:w-[35%] pt-8"
        >
          <h2 className={`${styles.subHeading}`}>
            Skills
            <hr className="w-[60px] h-2 my-4 mx-auto md:ml-auto md:mr-0 bg-lightest" />
          </h2>
          <div className="flex flex-wrap justify-center sm:justify-end gap-1">
            {skills.map((item) => (
              <span
                key={item.id}
                className="rounded-lg border-[2px] border-blue-200 text-[14px] text-gray-500 px-3 py-1"
              >
                {item.name}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* contact me */}
      <section id="contact" className={`${styles.section} mt-8 sm:mt-0`}>
        <h1 className={`text-center ${styles.subHeading}`}>
          Contact Me
          <hr className="w-[60px] h-2 mx-auto my-4 bg-lightest" />
        </h1>
        <div className="flex flex-col gap-5 xs:flex-row xs:gap-10 justify-center items-center ">
          {contacts.map((item) =>
            item.id === "email" ? (
              <EmailLink
                key={item.id}
                href={`mailto:${item.link}`}
                className="text-[18px] sm:text-[24px] !text-gray-600 hover:!text-primary"
              >
                {item.name}
              </EmailLink>
            ) : (
              <Link
                key={item.id}
                href={item.id === "email" ? "" : item.link}
                target={"_blank"}
                className="text-[18px] sm:text-[24px] hover:text-primary"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </section>
    </section>
  );
}

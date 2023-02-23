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
              Since graduated in 2022, I&#39;ve been doing web/mobile
              applications development. While having full-stack experiences, my
              focus is to deliver high-quality UI to users with my front-end
              skills.
            </p>
            <p>
              My key weapons are{" "}
              <span className="font-bold text-primary">
                HTML, CSS, JS, React and Flutter.
              </span>{" "}
              I love learning new skills and exploring different possibilities.
              I also welcome new opportunities and challenges. Feel free to
              contact me for jobs/ projects if you think I am a good fit!
            </p>
            <p>
              Thanks for checking me out. Have a nice day.😎 Life is good,
              cheers!
            </p>
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

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  id: string;
  label: string;
  link: string;
}

const navItems: Array<NavItem> = [
  {
    id: "projects",
    label: "Projects",
    link: "/projects",
  },
  {
    id: "about",
    label: "About",
    link: "/about",
  },
  {
    id: "resume",
    label: "Resume",
    link: "/resume.pdf",
  },
];

export default function Navbar() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => setShadow(window.scrollY >= 90);
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 w-full bg-white ${
        shadow ? "shadow-md ease-in-out duration-300" : ""
      }`}
    >
      <div className="max-w-[1100px] w-full m-auto py-4 px-6 xs:px-10">
        <div className="flex justify-between">
          <Link href="/" className="font-semibold font-code hover:text-primary">
            Alfred Tse
          </Link>

          <div className="flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                target={item.id === "resume" ? "_blank" : "_self"}
                className="ml-4 text-[14px] xs:ml-10 xs:text-[16px] text-gray-600 font-code md:hover:text-primary nav-link-animation"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

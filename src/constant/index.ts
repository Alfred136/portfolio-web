export interface IProject {
  id: string;
  name: string;
  details: string;
  imageURL: string;
  github: string;
  link: string;
  stack: string[];
}

export const projects: Array<IProject> = [
  {
    id: "flamingo",
    name: "Flamingo - Ecommerce",
    details:
      "An Ecommerce store where users can add items to cart and checkout using Stripe payment. This project uses Sanity for backend and react-query for data-fetching. Reponsive UI supporting desktop, tablet and mobile devices.",
    imageURL: "/flamingo.png",
    github: "https://github.com/Alfred136/project-ecommerce-web",
    link: "https://flamingo-ecommerce.vercel.app/",
    stack: ["nextjs", "sanity", "tailwindcss", "stripe"],
  },
  {
    id: "spli3e",
    name: "Spli3e UI",
    details:
      "A bronchure landing page. The design is referenced from 'Splice Landing Page' on Figma. Reponsive UI supporting desktop, tablet and mobile devices.",
    imageURL: "/spli3e.png",
    github: "https://github.com/Alfred136/project-spli3e-web",
    link: "https://spli3e.alfredwebdev.com/",
    stack: ["react", "tailwindcss"],
  },
  {
    id: "portfolio",
    name: "My Portfolio",
    details:
      "The site you are visiting now. I believe a simple and clean UI can better direct focuses on the projects.",
    imageURL: "/portfolio.png",
    github: "https://github.com/Alfred136/portfolio-web",
    link: "/",
    stack: ["nextjs", "tailwindcss", "typescript"],
  },
];

interface ISkill {
  id: string;
  name: string;
}

export const skills: ISkill[] = [
  { id: "html", name: "HTML5" },
  { id: "css", name: "CSS" },
  { id: "javascript", name: "JavaScript" },
  { id: "typescript", name: "TypeScript" },
  { id: "react", name: "React.js" },
  { id: "nextjs", name: "Next.js" },
  { id: "flutter", name: "Flutter" },
  { id: "tailwind-css", name: "Tailwindcss" },
  { id: "mySQL", name: "MySQL" },
  { id: "git", name: "Git" },
  { id: "gitHub", name: "GitHub" },
]

interface IContact {
  id: string;
  name: string;
  link: string;
}

export const contacts: IContact[] = [
  {
    id: "email",
    name: "alfredtse136@gmail.com",
    link: "alfredtse136@gmail.com",
  },
  {
    id: "linkedIn",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alfred-tse-aba082215/",
  },
  {
    id: "github",
    name: "Github",
    link: "https://github.com/Alfred136",
  },
]
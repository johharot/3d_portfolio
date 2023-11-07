import {
  mobile,
  backend,
  web,
  javascript,
  html,
  eric,
  dylan,
  fiona,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  springboot,
  jefferson,
  amazon,
  melodymap,
  portfolio,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [

  {
    title: "IT Deployment Analyst",
    company_name: "Jefferson Hospital",
    icon: jefferson,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Mar 2021",
    points: [
      "Efficiently orchestrated hardware deployments, harmonizing initiatives for internal and external stakeholders.",
      "Collaborated closely with onsite mission control, making sure seamless hardware integration within medical institution premises.",
      "Skillfully maintained and updated database data for hardware, screen/PC swaps, skinny customers, and hardware terminations.",
    ],
  },
  {
    title: "Process Guide",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#383E56",
    date: "Dec 2020 - Present",
    points: [
      "Managed backend operations for 260 pods with a focus on optimization and efficiency, drawing from roles like AFM and Stow Associate.",
      "Acquired comprehensive technical expertise in tools such as IDS Stow and VRC operations while showcasing strong problem - solving skills in operational challenges.",
      "Played a pivotal role in team onboarding and continuous learning as a Learning Ambassador, emphasizing cohesive adaptation to processes.",
      "Championed and integrated rigorous safety standards throughout operational and technical domains, ensuring robust and compliant procedures.",

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "As Haroon John instructor in Software Developer bootcamp, I was consistently impressed by his ability to tackle complex problems with strategic thinking and creativity. He is sure to bring the same rigor and innovation to any professional endeavor he undertake.",
    name: "Eric Ross",
    designation: "Instructor",
    company: "WCCI",
    image: eric,
  },
  {
    testimonial:
      "Collaborating with Haroon John was an absolute pleasure. Their commitment to excellence and drive to innovate not only propelled our project to new heights but also inspired our team.",
    name: "Fiona Nawab",
    designation: "General Manager",
    company: "Worldwide Flight Services",
    image: fiona,
  },
  {
    testimonial:
      "In all my years of teaching, few students have stood out as much as Haroon John. They have a unique blend of perseverance and attention to detail, which they applied to all their coursework, particularly in Melody Map",
    name: "Dylan Vaca",
    designation: "Instructor",
    company: "WCCI",
    image: dylan,
  },
];

const projects = [
  {
    name: "Melody Map",
    description:
      "Melody Map: Your personalized gateway to explore the world of music where every beat tells a story.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
    ],
    image: melodymap,
    source_code_link: "https://github.com/WeCanCodeIT/Melody-Map-frontend",
    website_link: "https://melodymap.click/ ",
  },
  {
    name: "Professional Portfolio",
    description:
      "Created a web-based portfolio with latest technologies to showcase the work and project experience. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "emailjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/johharot/3d_portfolio",
    website_link: "https://haroonjohn.online/",
  },

];

export { services, technologies, experiences, testimonials, projects };
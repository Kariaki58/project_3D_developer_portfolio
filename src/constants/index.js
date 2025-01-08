import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  nike,
  poshwears,
  social,
  threejs,
  alx
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SEO Ninja",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "ALX Africa",
    icon: alx,
    iconBg: "#383E56",
    date: "March 2024 - June 2024",
    points: [
      "Database Design and Optimization: Delved deep into crafting efficient database architectures, ensuring peak performance for diverse applications",
      "C Programming Proficiency: Commanded the intricacies of C programming, empowering me to engineer robust and reliable software solutions.",
      "Python Expertise with Flask: Leveraged Python and the Flask framework to craft dynamic web applications, including a meticulous Airbnb clone and musicIO a full-stack music platform.",
      "Data Structures and Algorithms: Developed a keen understanding of data structures and algorithms, enabling elegant solutions to complex problems.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but stephen proved me wrong.",
    name: "Anita",
    designation: "Owner",
    company: "Ph Skincare",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I hired Stephen to revamp my e-commerce store, and I couldn't be happier with the results. He integrated all the features I needed, including a streamlined checkout process and a responsive design that works perfectly on all devices.",
    name: "Franklin",
    designation: "Owner",
    company: "Poshwears",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Build a full stack Airbnb Cloned Project for real estate company, the project was delivered on time and the client was happy with the result",
    name: "Sandra",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Social Media Website",
    description:
      "Developed a static page social media clone, providing a simplified yet functional interface for user interaction and content sharing. Enhanced user customization by enabling adjustable font sizes and a toggle feature for switching between dark and light themes.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      }
    ],
    image: social,
    live_link: "https://kariaki-reponsive-social-media.netlify.app/",
    source_code_link: "https://github.com/Kariaki58/Social_media_Clone",
  },
  {
    name: "Nike WebSite Landing Page",
    description:
      "Web application that showcase shoes from nike with interactive user interface",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    live_link: "https://kariaki-nike-landing-page.netlify.app/",
    source_code_link: "https://github.com/Kariaki58/Ecommerce_Website",
  },
  {
    name: "PoshWears",
    description:
      "A comprehensive e-commerce platform featuring an admin dashboard and role-based authentication. Integrated Paystack for secure payment processing and Implemented a rich text editor for product descriptions and a robust inventory management system.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "purple-text-gradient",
      }
    ],
    image: poshwears,
    live_link: "https://www.poshwears.ng/",
    source_code_link: "https://github.com/Kariaki58/E-template-client",
  },
];

export { services, technologies, experiences, testimonials, projects };

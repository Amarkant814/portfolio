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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    gromo,
    Tanla,
    revature,
    java,
    springboot
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
      title: "Node Developer",
      icon: web,
    },
    {
      title: "Vue Developer",
      icon: mobile,
    },
    {
      title: "Java Developer",
      icon: backend,
    },
    {
      title: "React Developer",
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
      name: "Java",
      icon: java,
    },
    {
      name: "Spring",
      icon: springboot,
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
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    // {
    //   title: "Vue.js Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "SDE II",
      company_name: "Gromo",
      icon: gromo,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      points: [
        "Optimized the wallet service by implementing transactions and optimistic concurrency control with versioning.",
        "Handled the negative case with transaction rollback and retry logic, ensuring 100% consistency eventually provisioning to scale from a single server to multiple servers, eliminating single point of failure.",
      ],
    },
    {
      title: "SDE I",
      company_name: "Tanla Platfroms",
      icon: Tanla,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - May 2024",
      points: [
        "Collaborated with cross‑functional team to implement the highly effective Anti‑Phishing Platform as part of the Wisely ATP initiative which successfully blocked phishing messages with an efficacy of 99% enhancing customer’s message security.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Analysed, designed, and developed the Scanner Portal, leveraging Node.js with Express framework to create APIs and Sequelize with MySql to perform db operations, enhancing data processing efficiency and user accessibility.",
        "Facilitated smooth cross‑application communication through the successful integration of RabbitMQ to achieve seamless message publication and consumption.",
        "Optimized data retrieval time by 10x through implementing caching mechanisms, significantly reducing overall load times for read requests.",
        "Led the UI creation of Wisely Prepaid, using React that enabled seamless SMS and Truecaller message delivery.",
        "Sgnificantly improved the Wisely portal’s performance, optimizing it from an initial 49% to an impressive 93% score on the lighthouse, enhancingover all user satisfaction and system efficiency."
      ],
    },
    {
      title: "Java Developer",
      company_name: "Revature",
      icon: revature,
      iconBg: "#383E56",
      date: "Jun 2021 - Sep 2021",
      points: [
        "Led the end‑to‑end development of a comprehensive Microservice architecture based Booking Management System utilizing Java and SpringBoot, effectively integrating JPA for seamless ORM operations, ensuring smooth data handling and storage",
        "Implemented Bcrypt encryption for password security and effectively controlled API usage by enforcing a rate limiter of 25 API calls per minute, enhancing the application’s resilience against potential attacks.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
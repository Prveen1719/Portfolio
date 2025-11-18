import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Alina Website",
    img: "/Pr_2.png",
    desc: "Built a fully responsive web application for a coconut products company, optimized for both mobile and desktop use. I used React, JavaScript, and Bootstrap to create an interactive and user-friendly interface, bringing the brand’s products to life with clean design and smooth navigation. The layout and UI elements were first crafted in Figma and then developed into dynamic web pages. I also managed the project using GitHub, ensuring organized version control and seamless collaboration.",
    tech: ["React", "Figma", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: 2,
    title: "Warehose Project",
    img: "/Pr_1.png",
    desc: "Developed a full-stack warehouse management system supporting daily operations such as stock, vehicle, supply chain, and employee management. I implemented real-time inventory tracking and automated alerts to reduce operational errors and improve efficiency. The system included vehicle management with live tracking, streamlined procurement and logistics workflows, and Arduino-based automation for monitoring warehouse activities. The project combined a React front-end, Node.js backend, and MongoDB/Firebase for data handling and real-time updates.",
    tech: [
      "React",
      "Node.js",
      "HTML5",
      "CSS3",
      "MongoDB",
      "Firebase",
      "Bootstrap",
      "Arduino",
    ],
  },
  {
    id: 3,
    title: "Enbio - FronEnd Design",
    img: "/Pr_4.png",
    desc: "Designed an interactive front-end interface for a university waste management system, focusing on smooth navigation, visual clarity, and user-centered flow. Using Figma, I created modern UI layouts, custom graphical elements, and interactive components to enhance user engagement and simplify the waste management process.",
    tech: ["Figma", "Canva"],
  },
  {
    id: 4,
    title: "ETL project (Health Care)",
    img: "/Pr_3.png",
    desc: "Performed end-to-end ETL on a medical dataset using Python, cleaning and transforming data for accurate analysis. I developed interactive Power BI dashboards to highlight key medical insights and trends. Using SQL Server Management Studio (SSMS), I designed and built a structured data warehouse, integrating the cleaned dataset to support advanced reporting and analytics. The project showcased strong data engineering and visualization capabilities.",
    tech: ["Python", "PowerBi", "SQL", "SSMS", "Snowflake"],
  },
  {
    id: 5,
    title: "Master Thesis",
    img: "/Pr_5.png",
    desc: "Developed an intelligent generative AI model to process and compress CCTV footage for real-time transmission to drivers, reducing network delays during blind spot monitoring. The system was built entirely in Python using Jupyter Notebook, ensuring rapid debugging and iterative testing. I integrated DDPM and Stable Diffusion to reconstruct visual feeds efficiently and applied data analytics to evaluate accuracy across training and testing datasets. The solution demonstrated how IoT-integrated AI can enhance driver safety with low-latency visual data transmission.",
    tech: [
      "Python",
      "Tensorflow",
      "DDPM Model",
      "Stable Diffusion",
      "CNN",
      "Computer Vision",
    ],
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='image-container' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div style={{ y }} className='text-container'>
            <h2>{item.title}</h2>
            <div className='tech-container'>
              {item.tech.map((tech, index) => (
                <span key={index} className='tech-box'>
                  {tech}
                </span>
              ))}
            </div>
            <p>{item.desc}</p>
            <button>See Code</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

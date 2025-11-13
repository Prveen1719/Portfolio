import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Alina Website",
    img: "/Pr_2.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fuga. Tenetur sequi quaerat assumenda corrupti ex totam nulla voluptas aspernatur, dignissimos quibusdam tempore incidunt. Eum et quod tempore voluptate ad.",
    tech: ["React", "Figma", "HTML5", "CSS3"],
  },
  {
    id: 2,
    title: "Warehose Management Project",
    img: "/Pr_1.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fuga. Tenetur sequi quaerat assumenda corrupti ex totam nulla voluptas aspernatur, dignissimos quibusdam tempore incidunt. Eum et quod tempore voluptate ad.",
    tech: ["React", "Figma", "HTML5", "CSS3"],
  },
  {
    id: 3,
    title: "Enbio - FronEnd Design",
    img: "/Pr_4.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fuga. Tenetur sequi quaerat assumenda corrupti ex totam nulla voluptas aspernatur, dignissimos quibusdam tempore incidunt. Eum et quod tempore voluptate ad.",
    tech: ["React", "Figma", "HTML5", "CSS3"],
  },
  {
    id: 4,
    title: "ETL data warehousing project",
    img: "/Pr_3.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fuga. Tenetur sequi quaerat assumenda corrupti ex totam nulla voluptas aspernatur, dignissimos quibusdam tempore incidunt. Eum et quod tempore voluptate ad.",
    tech: ["React", "Figma", "HTML5", "CSS3"],
  },
  {
    id: 5,
    title: "Thesis - Vehicl blindSpot awareness project",
    img: "/Pr_5.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fuga. Tenetur sequi quaerat assumenda corrupti ex totam nulla voluptas aspernatur, dignissimos quibusdam tempore incidunt. Eum et quod tempore voluptate ad.",
    tech: ["React", "Figma", "HTML5", "CSS3"],
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

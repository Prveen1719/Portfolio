import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerc",
    img: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fuga. Tenetur sequi quaerat assumenda corrupti ex totam nulla voluptas aspernatur, dignissimos quibusdam tempore incidunt. Eum et quod tempore voluptate ad.",
  },
  {
    id: 2,
    title: "Next Commerc",
    img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fuga. Tenetur sequi quaerat assumenda corrupti ex totam nulla voluptas aspernatur, dignissimos quibusdam tempore incidunt. Eum et quod tempore voluptate ad.",
  },
  {
    id: 3,
    title: "Java Commerc",
    img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fuga. Tenetur sequi quaerat assumenda corrupti ex totam nulla voluptas aspernatur, dignissimos quibusdam tempore incidunt. Eum et quod tempore voluptate ad.",
  },
  {
    id: 4,
    title: " Data Commerc",
    img: "https://images.pexels.com/photos/1111367/pexels-photo-1111367.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fuga. Tenetur sequi quaerat assumenda corrupti ex totam nulla voluptas aspernatur, dignissimos quibusdam tempore incidunt. Eum et quod tempore voluptate ad.",
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

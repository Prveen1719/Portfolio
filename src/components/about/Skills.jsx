import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import "./skills.scss";

const skills = [
  //web
  { name: "HTML5 / CSS3", level: 100, category: "Web Tools" },
  { name: "JavaScript", level: 90, category: "Web Tools" },
  { name: "React.js", level: 80, category: "Web Tools" },
  { name: "Vue.js", level: 50, category: "Web Tools" },
  { name: "TailwindCSS", level: 80, category: "Web Tools" },
  { name: "Node.js", level: 90, category: "Web Tools" },
  { name: "JQuery", level: 40, category: "Web Tools" },
  { name: "TypeScript", level: 90, category: "Web Tools" },

  //database
  { name: "MySQL", level: 100, category: "Databases" },
  { name: "MS SQL Server", level: 90, category: "Databases" },
  { name: "PostgreSQL", level: 90, category: "Databases" },
  { name: "MongoDB", level: 100, category: "Databases" },
  { name: "SnowFlake", level: 70, category: "Databases" },

  //data
  { name: "POwerBI", level: 100, category: "Data Analytics" },
  { name: "Python", level: 100, category: "Data Analytics" },
  { name: "R Language", level: 70, category: "Data Analytics" },
  { name: "SSRS", level: 80, category: "Data Analytics" },
  { name: "SSIS", level: 80, category: "Data Analytics" },
  { name: "DBT", level: 80, category: "Data Analytics" },
  { name: "Matillion", level: 80, category: "Data Analytics" },

  //AI Tools and ML
  { name: "Tensorflow", level: 80, category: "AI and Machine Learning" },
  { name: "PyTorch", level: 80, category: "AI and Machine Learning" },
  { name: "Stable Diffusion", level: 80, category: "AI and Machine Learning" },
  { name: "Deep Learning", level: 80, category: "AI and Machine Learning" },
  { name: "Random Forest", level: 80, category: "AI and Machine Learning" },
  { name: "Ensamble Learning", level: 80, category: "AI and Machine Learning" },
  { name: "Image Processing", level: 80, category: "AI and Machine Learning" },
  { name: "Computer Vision", level: 80, category: "AI and Machine Learning" },

  //DevOps
  { name: "SSRS", level: 80, category: "DevOps" },
  { name: "SSRS", level: 80, category: "DevOps" },
  { name: "SSRS", level: 80, category: "DevOps" },
  { name: "SSRS", level: 80, category: "DevOps" },

  //Programming Languages
  { name: "Python", level: 80, category: "Languages" },
  { name: "TypeScript", level: 80, category: "Languages" },
  { name: "JavaScript", level: 80, category: "Languages" },
  { name: "Java", level: 80, category: "Languages" },
  { name: "C++", level: 80, category: "Languages" },
  { name: "C#", level: 80, category: "Languages" },
  { name: "PHP", level: 80, category: "Languages" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(skills.map((s) => s.category)));
    return ["All", ...unique];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return skills;
    return skills.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div id='Skills' className='skills'>
      <div className='container'>
        <h2>
          My <b>Skills</b>
        </h2>

        <div className='filters'>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter_btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className='skill_cont'>
          {filtered.map((skill, idx) => (
            <motion.div
              key={`${skill.name}-${idx}`}
              className='skill_card'
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              layout
            >
              <div className='skill_header'>
                <span className='skill_name'>{skill.name}</span>
                <span className='skill_level'>{skill.level}%</span>
              </div>
              <div className='progress_track'>
                <motion.div
                  className='progress_fill'
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className='skill_meta'>{skill.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

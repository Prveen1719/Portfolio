import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className='about'
      variants={variants}
      initial='initial'
      //animate='animate'
      //whileInView='animate'
      ref={ref}
      animate={"animate"}
    >
      <motion.div className='header_txt_cont' variants={variants}>
        <p>
          I focus on creating clean and aesthetic <br />
          software development and data driven systems
        </p>
        <hr />
      </motion.div>
      <motion.div className='container' variants={variants}>
        <div className='header_text' variants={variants}>
          <h2>
            {" "}
            Passionate{" "}
            <motion.b whileHover={{ color: "orange" }}>
              Web Developer
            </motion.b>{" "}
            and <br />
            <motion.b whileHover={{ color: "orange" }}>Data Analyst</motion.b>
          </h2>
        </div>
        <div className='base_container'>
          <div className='left_cont'>
            <div className='contents1'>
              <p className='ab_text'>
                A recent graduate with a Master of Applied Technologies, with a
                solid foundation in building dynamic web applications, software
                solutions, and data-driven systems. Completed academic projects
                focused on data analytics and data storage, including designing
                ETL pipelines and visual dashboards.
              </p>
              <p className='ab_text'>
                Experienced in freelance projects, demonstrating proficiency in
                Python, SQL, Java, JavaScript, and React. Adept at designing and
                developing websites, with a strong focus on delivering clean,
                efficient code and effective problem-solving. Proven ability to
                work independently and manage multiple projects, with a keen
                interest in continuing to grow and contribute to innovative
                software solutions.
              </p>

              <div className='buttons'>
                <a href='contact' className='button'>
                  <button class='sparkle-button'>
                    <span class='spark'></span>

                    <span class='backdrop'></span>

                    <span class='text'>Get In Contact</span>
                  </button>
                </a>

                <a href='contact' className='button'>
                  <button class='sparkle-button'>
                    <span class='spark'></span>

                    <span class='backdrop'></span>

                    <span class='text'>Download CV</span>
                  </button>
                </a>
              </div>
            </div>

            <div className='ab_cards'>
              <div className='card_cont'>
                <div className='card_info'>
                  <div className='content_row'>
                    <span className='card_icon' aria-hidden='true'>
                      {/* Coding icon */}
                      <svg
                        viewBox='0 0 24 24'
                        width='36'
                        height='36'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.8'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <polyline points='8 9 3 12 8 15'></polyline>
                        <polyline points='16 9 21 12 16 15'></polyline>
                        <line x1='12' y1='20' x2='12' y2='4'></line>
                      </svg>
                    </span>
                    <span className='divider' aria-hidden='true' />
                    <div className='text'>
                      <h4>Web development</h4>
                      <p>
                        Create responsive and dynamic web applications using
                        modern web development tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card_cont'>
                <div className='card_info'>
                  <div className='content_row'>
                    <span className='card_icon' aria-hidden='true'>
                      {/* Software/AI icon */}
                      <svg
                        viewBox='0 0 24 24'
                        width='36'
                        height='36'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.8'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <rect
                          x='3'
                          y='3'
                          width='18'
                          height='14'
                          rx='2'
                          ry='2'
                        ></rect>
                        <path d='M8 21h8'></path>
                        <path d='M12 17v4'></path>
                        <circle cx='8' cy='10' r='1.5'></circle>
                        <circle cx='12' cy='10' r='1.5'></circle>
                        <circle cx='16' cy='10' r='1.5'></circle>
                      </svg>
                    </span>
                    <span className='divider' aria-hidden='true' />
                    <div className='text'>
                      <h4>AI development</h4>
                      <p>
                        Create and maintain modern AI models to be used in
                        existing systems and generative models
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card_cont'>
                <div className='card_info'>
                  <div className='content_row'>
                    <span className='card_icon' aria-hidden='true'>
                      {/* Data/Database icon */}
                      <svg
                        viewBox='0 0 24 24'
                        width='36'
                        height='36'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.8'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
                        <path d='M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5'></path>
                        <path d='M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6'></path>
                      </svg>
                    </span>
                    <span className='divider' aria-hidden='true' />
                    <div className='text'>
                      <h4>Data Analyst</h4>
                      <p>
                        Expert in data driven systems and analyse and report
                        data trends and potential growth models
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;

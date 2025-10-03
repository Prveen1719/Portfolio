import Sidebar from "../sidebar/Sidebar";
import "./NavBar.scss";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className='navBar'>
      {/* Sidebar */}
      <Sidebar />

      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Praveen Peiris
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='socials'
        >
          <a href='#'>
            <img src='/facebook.png' alt='' />
          </a>
          <a href='#'>
            <img src='/instagram.png' alt='' />
          </a>
          <a href='#'>
            <img src='/youtube.png' alt='' />
          </a>
          <a href='#'>
            <img src='/dribbble.png' alt='' />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;

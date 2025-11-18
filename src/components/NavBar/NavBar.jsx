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
          <a href='https://github.com/Prveen1719'>
            <img src='/github.png' alt='' />
          </a>
          <a href='https://linkedin.com/in/praveen-peiris-65826a354'>
            <img src='/linkedin.png' alt='' />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;

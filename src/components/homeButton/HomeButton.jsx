import "./homeButton.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HomeButton = () => {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    const checkHomePage = () => {
      const homeElement = document.getElementById("HomePage");
      if (homeElement) {
        const rect = homeElement.getBoundingClientRect();
        // Check if HomePage section is visible in viewport
        const isVisible =
          rect.top >= 0 &&
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2;
        setIsHomePage(isVisible);
      }
    };

    checkHomePage();
    window.addEventListener("scroll", checkHomePage);
    window.addEventListener("resize", checkHomePage);

    return () => {
      window.removeEventListener("scroll", checkHomePage);
      window.removeEventListener("resize", checkHomePage);
    };
  }, []);

  const scrollToHome = () => {
    const element = document.getElementById("HomePage");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isHomePage) {
    return null;
  }

  return (
    <motion.button
      className="homeButton"
      onClick={scrollToHome}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    </motion.button>
  );
};

export default HomeButton;


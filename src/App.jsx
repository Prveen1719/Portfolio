import "./app.scss";
import About from "./components/about/About";
import Skills from "./components/about/Skills";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import HomeButton from "./components/homeButton/HomeButton";
import NavBar from "./components/NavBar/NavBar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
const App = () => {
  return (
    <div>
      <section id='HomePage'>
        <NavBar />
        <Hero />
      </section>
      <section id='About'>
        <Parallax type='about' />
      </section>
      <section>
        {" "}
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>

      <Portfolio />

      {/* <section>Portfolio2</section>
      <section>Portfolio3</section> */}
      <section id='Contact'>
        <Contact />
      </section>
      <HomeButton />
    </div>
  );
};

export default App;

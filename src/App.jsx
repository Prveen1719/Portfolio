import "./app.scss";
import NavBar from "./components/NavBar/NavBar";
const App = () => {
  return (
    <div>
      <section id='HomePage'>
        <NavBar />
      </section>
      <section id='About'>Parrallax</section>
      <section>AboutMe</section>
      <section id='Portfolio'>Parrallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'>Contact</section>
    </div>
  );
};

export default App;

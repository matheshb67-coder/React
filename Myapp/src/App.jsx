import Nav from "./compount/Navbar/Navbar";
import Home from "./compount/Home/Home";
import About from "./compount/About/About"
import Cards from "./compount/Card/Card";
import Project from "./compount/Project/Project";
import Contact from "./compount/Contact/Contact";


function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Project/>
      <Contact/>
    </>
  )
}

export default App
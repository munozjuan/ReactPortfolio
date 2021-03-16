import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
/*import Header from "./components/Header";*/
import {Switch, Route} from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import {Navlink} from 'react-router-dom';

function App() {
  return (
  <>
    <Particles
    className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#ccffe6"
              }
            }
        }
      }}
     />
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/portfolio" exact>
        <Portfolio />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
    </Switch>

    
  </>
  );
}

export default App;

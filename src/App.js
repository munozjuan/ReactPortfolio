import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
/*import Header from "./components/Header";*/
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";


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
    <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      
      <Route path="/about" >
        <About />
      </Route>
      <Route path="/portfolio" >
        <Portfolio />
      </Route>
      <Route path="/contact" >
        <Contact />
      </Route>
      <Route path="/" >
        <Home />
      </Route>
    </Switch>
    </Router>

    
  </>
  );
}

export default App;

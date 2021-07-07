import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./components/pages/Home";
import Indicators from "./components/pages/Indicators";
import Health from "./components/pages/Health";
import Stressors from "./components/pages/Stressors"
import Justice from "./components/pages/Justice";

import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/environmental-outcomes" component={Indicators} />
        <Route exact path="/health-outcomes" component={Health} />
        <Route exact path="/social-stressors" component={Stressors} />
        <Route exact path="/environmental-justice" component={Justice} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

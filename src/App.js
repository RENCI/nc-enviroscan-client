import React from "react";
import { LocationProvider, Router as ReachRouter } from '@reach/router'
import { Grid } from 'semantic-ui-react'

import NavBar2 from "./components/NavBar2";
import Footer from "./components/Footer"
import Home from "./components/pages/main/Home";
import Health from "./components/pages/main/Health";
import Sociodemographic from "./components/pages/main/Sociodemographic";
// import Environment from "./components/pages/subpage/Environment";
import Water from "./components/pages/subpage/Water"
import Soil from "./components/pages/subpage/Soil";
import Air from "./components/pages/subpage/Air";

import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  return (
    <LocationProvider>
      <div className="App">
        <NavBar2 />
        <Grid centered columns={3} className='pageBody' padded>
          <Grid.Column width={14} className="page-content">
            <ReachRouter primary={false}>
              <Home path="/" />
              <Water path="environmental-indicators/water" />
              <Soil path="environmental-indicators/soil" />
              <Air path="environmental-indicators/air" />
              <Sociodemographic path="sociodemographic-indicators" />
              <Health path="health-outcomes" />
            </ReachRouter>
          </Grid.Column>
        </Grid>
        <Footer />
      </div>
    </LocationProvider>
  );
}

export default App;

import React from "react";
import { LocationProvider, Router as ReachRouter } from '@reach/router'
import { Grid } from 'semantic-ui-react'

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./components/pages/main/Home";
import Health from "./components/pages/main/Health";
import Sociodemographic from "./components/pages/main/Sociodemographic";
import Environment from "./components/pages/main/Environment";

import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  return (
    <LocationProvider>
      <div className="App">
        <NavBar />
        <Grid centered columns={3} className='pageBody' padded>
          <Grid.Column width={14} className="page-content">
            <ReachRouter primary={false}>
              <Home path="/" />
              <Environment path="environmental-indicators/:topicId" />
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

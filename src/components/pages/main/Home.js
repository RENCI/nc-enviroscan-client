import React from "react";
import { Image, Grid, Button, List, Header, Icon } from "semantic-ui-react"
import { Link } from "@reach/router";

import mapImg from "../../../images/home/Map_Tool_Img.jpg"
import drinkWater from "../../../images/home/Man_Drinking_Water.png"
import plants from "../../../images/home/Home_Plants.png"


function Home() {
  return (
    <div>
      <Grid padded='vertically' centered>
        <Grid.Row id="hero-container">
          <Header id="hero-title">
            North Carolina ENVIROSCAN helps communities increase awareness of key environmental and societal factors that can impact health.
          </Header>
          <Button color="blue" attached="top" href="https://enviroscan-map.renci.org/" target="_blank" id="hero-btn">
            <Icon name="external alternate" /> Launch Mapping Tool
          </Button>
          <Image src={mapImg} alt="NC Enviroscan Mapping Tool" size="medium" id="hero-map" />
          <Image src={drinkWater} alt="Man drinking water" size="medium" id="man-img" />
          <span id="enviroscan-info">
              <p>NC ENVIROSCAN allows users to visualize trends across environmental contaminants, sociodemographic information, environmental justice indicators, and health outcomes throughout North Carolina.</p>
              <p>These indicators can be viewed individually, side-by-side on two maps, or overlayed onto the same map, allowing users to identify new patterns relevant to their concerns.</p>
              <p>Community members that want to learn more about their local health risks and potential solutions to these risks may benefit from this tool, along with policy makers, government agencies, clinicians and scientists.</p>
          </span>
        </Grid.Row>
        <Grid.Row id="home-links">
          <Grid.Column width={4} id="data">
            <Header content="About Our Data" size="small" />
          </Grid.Column>
          <Grid.Column width={4} id="facts">
            <Header content="Quick Facts" size="small" />
          </Grid.Column>
          <Grid.Column width={4} id="resources">
            <Header content="Community Resources" size="small" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row divided>
          <Grid.Column width={4}>
            <List bulleted>
              <List.Item as={Link} to="environmental-indicators/water">Environmental Indicators: Water</List.Item>
              <List.Item as={Link} to="sociodemographic-indicators">Sociodemographic Indicators</List.Item>
              <List.Item as={Link} to="health-outcomes">Health outcomes</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <List bulleted>
              <List.Item as='a' href="https://enviroscan-map.renci.org/" target="_blank">Open Mapping Tool</List.Item>
              {/* <List.Item as='a'>Search by location</List.Item> */}
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <List bulleted>
              <List.Item>Reduce your environmental exposures</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Image src={plants} size="large" />
      </Grid>
    </div>
  )
}

export default Home;
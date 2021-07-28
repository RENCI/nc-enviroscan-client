import React from "react";
import { Image, Grid, Button, List, Header } from "semantic-ui-react"
import { Link } from "@reach/router"

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
          <Button color="blue" content="Launch Mapping Tool" href="https://enviroscan-map.renci.org/" target="_blank" id="hero-btn" />
          <Image src={mapImg} alt="NC Enviroscan Mapping Tool" size="medium" id="hero-map" />
          <Image src={drinkWater} alt="Man drinking water" size="medium" id="man-img" />
          <span id="enviroscan-info">
              <p>NC ENVIROSCAN allows users to visualize trends across environmental contaminants, sociodemographic information, environmental justice indicators, and health outcomes throughout North Carolina.</p>
              <p>These indicators can be viewed individually, side-by-side on two maps, or overlayed onto the same map, allowing users to identify new patterns relevant to their concerns.</p>
              <p>Community members that want to learn more about their local health risks and potential solutions to these risks may benefit from this tool, along with policy makers, government agencies, clinicians and scientists.</p>
          </span>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={9}>
            <Button.Group fluid size='large' widths='4'>
              <Button id="data-btn">About Our Data</Button>
              <Button id="facts-btn">Quick Facts</Button>
              <Button id="resource-btn">Community Resources</Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row divided>
          <Grid.Column width={3}>
            <List bulleted>
              <List.Item as={Link} to="environmental-indicators/water">Environmental Indicators: Water</List.Item>
              <List.Item as={Link} to="sociodemographic-indicators">Sociodemographic Indicators</List.Item>
              <List.Item as={Link} to="health-outcomes">Health outcomes</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <List bulleted>
              <List.Item as='a' href="https://enviroscan-map.renci.org/" target="_blank">Mapping Tool</List.Item>
              <List.Item as='a'>Search by location</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <List bulleted>
              <List.Item as='a'>Local health providers</List.Item>
              <List.Item as='a'>Treatment Guide</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Image src={plants} />
      </Grid>
    </div>
  )
}

export default Home;
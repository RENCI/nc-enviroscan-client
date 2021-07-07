import React from "react";
import { Image, Grid, Button, List } from "semantic-ui-react"

import water from '../../images/home/Hero_Image_Water_300x-100.jpg'
import triangle from '../../images/home/triangle_mid-page_300x-8.png'

function Home() {
  return (
    <div className="page-contain">
      <Grid padded='vertically' centered className="home-pg">
        <Grid.Row>
          <Grid.Column>
            <Image src={water} alt='waves' fluid />
          </Grid.Column>
          <Image src={triangle} fluid />

        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={9}>
            <Button.Group fluid size='large' widths='4'>
              <Button className="data-btn">Explore Data</Button>
              <Button className="location-btn">Location Search</Button>
              <Button className="resource-btn">Community Resources</Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row divided>
          <Grid.Column width={3}>
            <List bulleted>
              <List.Item as='a'>Environmental Indicators</List.Item>
              <List.Item as='a'>Sociodemographic Indicators</List.Item>
              <List.Item as='a'>Health Effects</List.Item>
              <List.Item as='a'>Environmental Justice</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <List bulleted>
              <List.Item as='a'>Tool access</List.Item>
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
      </Grid>
    </div>
  )
}

export default Home;
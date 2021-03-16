import React from "react";
import { Image, Grid, Button, List } from "semantic-ui-react"

import river from '../../images/river.jpg'

function Home() {
  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={14}>
          <Image src={river} alt='river' fluid />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={9}>
          <Button.Group fluid size='large' widths='3'>
            <Button color='brown'>Explore Data</Button>
            <Button color='blue'>Location Search</Button>
            <Button color='yellow'>Community Resources</Button>
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row divided centered>
        <Grid.Column width={3}>
          <List bulleted>
            <List.Item as='a'>Environmental Indicators</List.Item>
            <List.Item as='a'>Sociodemographic Indicators</List.Item>
            <List.Item as='a'>Health Effects</List.Item>
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
  )
}

export default Home;
import React from 'react'
import { Grid, List } from 'semantic-ui-react'

const Footer = () => (
    <Grid columns={2} padded>
        <Grid.Row style={{backgroundColor: '#333333', color: 'white'}} centered columns={10} >
            <Grid.Column width={4} >
                <List items={['Accessibility','Privacy','Contact Us']} />
            </Grid.Column>
            <Grid.Column width={4} >
                <List items={['UNC Institute for Environmental Health Solutions']} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default Footer
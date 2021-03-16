import React from 'react'
import { Grid, List } from 'semantic-ui-react'

const Footer = () => (
    <Grid columns={2} padded>
        <Grid.Row color="black" centered columns={10} >
            <Grid.Column width={4} >
                <List items={['Accessibility','Budget & Performance','Contracting','Grants','Privacy','Privacy and Security']} />
            </Grid.Column>
            <Grid.Column width={4} >
                <List items={['Jobs','Newsroom','Subscribe','Contact Us','FAQ']} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default Footer
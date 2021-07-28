import React from 'react'
import { Grid, List } from 'semantic-ui-react'

const Footer = () => (
    <footer id="page-footer">
        <Grid columns={2} padded id="footer-grid">
            <Grid.Row className="footer-row" centered columns={10} >
                <Grid.Column width={4} >
                    <List items={['Accessibility','Privacy','Contact Us']} />
                </Grid.Column>
                <Grid.Column width={4} >
                    <List items={['UNC Institute for Environmental Health Solutions']} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </footer>
)

export default Footer
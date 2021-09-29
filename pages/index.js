import { Fragment } from 'react'
import { HomeHero } from '../components/hero'
import boat from '../images/boat-brevard.png'
import { PanelMenu } from '../components/panel-menu'
import { Container } from '@material-ui/core'

export default function Home() {
  return (
    <Fragment>
      <HomeHero backgroundImage={ boat.src } />
      
      <br/><br/><br/>

      <Container maxWidth="md">
        <PanelMenu />
      </Container>

      <br /><br /><br />

    </Fragment>
  )
}

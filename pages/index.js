import { Fragment } from 'react'
import { HomeHero } from '../components/hero'
import heroImage from '../images/hero-images/enviroscan-home-road.jpg'
import { PanelMenu } from '../components/panel-menu'
import { Container } from '@mui/material'

export default function Home() {
  return (
    <Fragment>
      <HomeHero backgroundImage={ heroImage.src } />
      
      <br/><br/><br/>

      <Container maxWidth="md">
        <PanelMenu />
      </Container>

      <br /><br /><br />

    </Fragment>
  )
}

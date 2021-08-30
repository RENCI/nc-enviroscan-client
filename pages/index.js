import { Fragment } from 'react'
import { HomeHero } from '../components/hero'
import boat from '../images/boat-brevard.png'
import { PanelMenu } from '../components/panel-menu'
import { MainContent } from '../components/layout'

export default function Home() {
  return (
    <Fragment>
      <HomeHero backgroundImage={ boat.src } />
      <PanelMenu />
      <MainContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </MainContent>
    </Fragment>
  )
}

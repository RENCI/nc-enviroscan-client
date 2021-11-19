import { Fragment } from 'react'
import { Hero } from '../components/hero'
import { MainContent } from '../components/layout'
import { Typography } from '@mui/material'
import { Link } from '../components/link'
import heroImage from '../images/hero-images/documentation.jpg'

const content = {
  title: 'Documentation',
  links: [
    {
      text: 'Mapper Cheat Sheet',
      path: 'https://enviroscan-map.renci.org/statics/nc-enviroscan-map-use-tips.pdf'
    }
  ],
}

export default function Documentation() {
  return (
    <Fragment>
      <Hero
        title={ content.title }
        backgroundImage={ heroImage.src }
      />
      <MainContent>
        <Typography variant="h2">{ content.title }</Typography>
        
        <br/>

        <ul>
          {
            content.links.map(link => (
              <li key={ link.text }><Link to={ link.path }>{ link.text }</Link></li>
            ))
          }
        </ul>

      </MainContent>
    </Fragment>
  )
}

import { Fragment } from 'react'
import { Hero } from '../components/hero'
import { MainContent } from '../components/layout'
import { Typography } from '@material-ui/core'
import { Link } from '../components/link'

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
        backgroundImage={ 'https://picsum.photos/1280/400' }
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

import { Fragment } from 'react'
import { Hero } from '../components/hero'
import { MainContent } from '../components/layout'
import { Typography } from '@material-ui/core'

const content = {
  title: 'Documentation',
  blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
        <Typography paragraph>
          { content.blurb }
        </Typography>
      </MainContent>
    </Fragment>
  )
}

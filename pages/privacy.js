import { MainContent } from '../components/layout'
import { Typography } from '@material-ui/core'

const content = {
  title: 'Privacy',
  blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

export default function Privacy() {
  return (
    <MainContent>
      <Typography variant="h2">{ content.title }</Typography>
      <Typography paragraph>
        { content.blurb }
      </Typography>
    </MainContent>
  )
}
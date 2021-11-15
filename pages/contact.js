import { MainContent } from '../components/layout'
import { Typography } from '@mui/material'

const content = {
  title: 'Contact',
  blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

export default function Contact() {
  return (
    <MainContent>
      <Typography variant="h2">{ content.title }</Typography>
      <Typography paragraph>
        { content.blurb }
      </Typography>
    </MainContent>
  )
}

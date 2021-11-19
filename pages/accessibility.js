import { MainContent } from '../components/layout'
import { Typography } from '@mui/material'

const content = {
  title: 'Accessibility',
  blurb: 'We are committed to making NC Enviroscan accessible to all users, regardless of special need. We are committed to designing this site and related applications to be compatible with screen readers and other assistive devices. However, this is an ongoing process and it is possible that some users may encounter problems accessing some pages.'
}

export default function Accessibility() {
  return (
    <MainContent>
      <Typography variant="h2">{ content.title }</Typography>
      <Typography paragraph>
        { content.blurb }
      </Typography>
    </MainContent>
  )
}

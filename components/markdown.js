import ReactMarkdown from 'react-markdown'
import { Typography } from '@material-ui/core'
import { Link } from './link'

const componentMap = {
  a: function Anchor({ node, href, children, ...props }) {
    return <Link to={ href } { ...props }>{ children }</Link>
  },
  p: function Paragraph({ node, ...props}) {
    return <Typography paragraph { ...props } />
  },
}

export const Markdown = ({ src }) => {
  return (
    <ReactMarkdown components={ componentMap} >
      { src }
    </ReactMarkdown>
  )
}

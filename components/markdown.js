import ReactMarkdown from 'react-markdown'
import { Typography } from '@material-ui/core'
import { Link } from './link'

export const Markdown = ({ src }) => {
  return (
    <ReactMarkdown
      children={ src }
      components={{
        a: ({ node, href, children, ...props }) => <Link to={ href } { ...props }>{ children }</Link>,
        p: ({ node, ...props}) => <Typography paragraph { ...props } />,
      }}
    />
  )
}

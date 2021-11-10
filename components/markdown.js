import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import { makeStyles, Typography } from '@material-ui/core'
import { Link } from './link'

const useStyles = makeStyles({
  wrapper: {
    '& ul': {
      fontSize: '110%',
      padding: '0 0 0 0.85rem',
    },
    '& li': {
      lineHeight: 1.5,
      marginBottom: '10px',
    },

  },
  paragraph: {
    margin: '30px',
    lineHeight: 1.5,
  },
  heading4: {
    fontSize: '16px',
    margin: '16px',
    lineHeight: 1.5,
    fontStyle: 'italic'
  },
})


export const Markdown = ({ src }) => {
  const classes = useStyles()

  const componentMap = useMemo(() => ({
    h1: function Heading1({ node, ...props }) { 
        return <Typography variant="h1" { ...props } /> 
    },
    h2: function Heading2({ node, ...props }) { 
      return <Typography variant="h2" { ...props } /> 
    },
    h3: function Heading3({ node, ...props }) { 
      return <Typography variant="h3" { ...props } /> 
    },
    h4: function Heading4({ node, ...props }) { 
      return <Typography variant="h4" className={classes.heading4} { ...props } /> 
    },
    h5: function Heading5({ node, ...props }) { 
      return <Typography variant="h5" { ...props } /> 
    },
    h6: function Heading6({ node, ...props }) { 
      return <Typography variant="h6" { ...props } /> 
    },
    a: function Anchor({ node, href, children, ...props }) { 
       return <Link to={ href } { ...props }>{ children }</Link> 
    },
    p: function Paragraph({ node, ...props}) { 
       return <Typography paragraph className={classes.paragraph} { ...props } /> 
    },
  }), [])

  return (
    <ReactMarkdown components={ componentMap } className={ classes.wrapper }>
      { src }
    </ReactMarkdown>
  )
}

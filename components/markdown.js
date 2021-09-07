import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import { makeStyles, Typography } from '@material-ui/core'
import { Link } from './link'

const useStyles = makeStyles({
  list: {
    fontSize: '110%',
    padding: '0 0 0 0.85rem',
  },
  listItem: {
    marginBottom: '1rem',
  },
})


export const Markdown = ({ src }) => {
  const classes = useStyles()

  const componentMap = useMemo(() => ({
    a: function Anchor({ node, href, children, ...props }) {
      return <Link to={ href } { ...props }>{ children }</Link>
    },
    p: function Paragraph({ node, ...props}) {
      return <Typography paragraph { ...props } />
    },
    ul: function List({ node, ...props }) {
      return <ul className={ classes.list } { ...props } />
    },
    li: function ListItem({ node, ...props }) {
      return <li className={ classes.listItem } { ...props } />
    },
  }), [])

  return (
    <ReactMarkdown components={ componentMap }>
      { src }
    </ReactMarkdown>
  )
}

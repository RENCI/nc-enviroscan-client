import NextLink from 'next/link'

export const Link = ({ to, children, ...props }) => {
  const externalUrlPattern = new RegExp(/^https?:\/\//)
  const match = externalUrlPattern.exec(to)
  if (match) {
    return <a href={ to } target="blank" rel="noopener noreferrer" { ...props }>{ children }</a>
  }
  return <NextLink href={ to }><a { ...props }>{ children }</a></NextLink>
}

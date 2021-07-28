import React from 'react'

export const ScrollToTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'}), [location.pathname])
  return children
}
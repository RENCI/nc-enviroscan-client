import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Link } from '../link'
import { Container, Drawer, Grid, IconButton , List, ListItem, ListItemText, Typography } from '@mui/material'
import styles from './layout.module.css'
import enviroscanLogo from '../../images/enviroscan-logo.png'
import { useMediaQuery } from '@mui/material'
import { Menu as MenuIcon, Close as CloseMenuIcon } from '@mui/icons-material'
import classnames from 'classnames'
import { ThemeProvider } from '../../styles/theme'
import TopNav from './top-nav'

const mainMenuLinks = [
  { text: 'Environmental Indicators',         path: '/environmental-indicators' },
  { text: 'Sociodemographic Indicators',      path: '/sociodemographic-indicators' },
  { text: 'Environmental Justice Indicators', path: '/environmental-justice-indicators' },
  { text: 'Health Outcomes',                  path: '/health-outcomes' },
  { text: 'Documentation',                    path: '/documentation' },
]

const footerLinks = [
  { text: 'About Us',      path: '/about' },
  { text: 'Accessibility', path: '/accessibility' },
  { text: 'Privacy',       path: 'https://www.unc.edu/about/privacy-statement/' },
  { text: 'Contact Us',    path: 'mailto:enviroscan@unc.edu' },
]

export const Layout = ({ children }) => {
  const compact = useMediaQuery('(max-width: 1142px)');
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClickToggler = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <ThemeProvider>
      <Container maxWidth="lg" disableGutters className={ styles.wrapper }>
        <TopNav />
        <div className={ styles.pageContent }>
          { children }
        </div>
        <footer className={ styles.footer }>
          <Grid container spacing={ 2 }>
            <Grid item xs={ 12 } md={ 6 }>
              <List>
                {
                  footerLinks.map(({ text, path }) => (
                    <ListItem key={ `footer-${ text }` }>
                      <Link to={ path } className={ styles.footerLink }>{ text }</Link>
                    </ListItem>
                  ))
                }
              </List>
            </Grid>
            <Grid item xs={ 12 } md={ 6 }>
              <List>
                <ListItem>
                  <Link to="https://sph.unc.edu/iehs/institute-for-environmental-health-solutions/" className={ styles.footerLink }>UNC Institute for Environmental Health Solutions</Link>
                </ListItem>
                <ListItem>
                  <Link to="https://sph.unc.edu/superfund-pages/srp/" className={ styles.footerLink }>UNC Superfund Research Program</Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </footer>
      </Container>
    </ThemeProvider>
  )
}   

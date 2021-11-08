import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Link } from '../link'
import { Container, Drawer, Grid, IconButton , List, ListItem, ListItemText, Typography } from '@material-ui/core'
import styles from './layout.module.css'
import enviroscanLogo from '../../images/enviroscan-logo.png'
import { useMediaQuery } from '@material-ui/core'
import { Menu as MenuIcon, Close as CloseMenuIcon } from '@material-ui/icons'
import classnames from 'classnames'
import { ThemeProvider } from '../../styles/theme'

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
        <header className={ styles.header }>
          <Link to="/" className={ styles.brand }>
            <Image src={ enviroscanLogo } alt="" width={ 100 } height={ 59 }  />
          </Link>
          {
            compact && (
              <Fragment>
                <Drawer open={ menuOpen } onClose={ () => setMenuOpen(false) } classes={{ root: styles.mobileMenuDrawer, paper: styles.mobileMenuPaper }}>
                  <Link to="/" className={ styles.brand } style={{ margin: '1rem auto' }}>
                    <Image src={ enviroscanLogo } alt="" />
                  </Link>
                  <Link
                    to="/"
                    key={ `mobile-main-menu-home` }
                    className={ classnames(styles.mobileMenuItem, router.asPath === '/' ? styles.active : undefined) }
                    onMouseOver={ () => router.prefetch('/') }
                    onClick={ () => setMenuOpen(false) }
                  >Home</Link>
                  {
                    mainMenuLinks.map(({ path, text }) => (
                      <Link
                        to={ path }
                        key={ `mobile-main-menu-${ text }` }
                        className={ classnames(styles.mobileMenuItem, router.asPath === path ? styles.active : undefined) }
                        onMouseOver={ () => router.prefetch(path) }
                        onClick={ () => setMenuOpen(false) }
                      >{ text }</Link>
                    ))
                  }
                </Drawer>
                <IconButton
                  className={ styles.menuToggler }
                  size="small"
                  onClick={ handleClickToggler }
                >
                  {
                    menuOpen
                      ? <CloseMenuIcon fontSize="large" />
                      : <MenuIcon fontSize="large" />
                  }
                </IconButton>
              </Fragment>
            )
          }
          {
            !compact && (
                <nav className={ styles.navigation }>
                  {
                    mainMenuLinks.map(({ path, text }) => (
                      <Link
                        to={ path }
                        key={ `main-menu-${ text }` }
                        className={ classnames(styles.menuItem, router.asPath === path ? styles.active : undefined) }
                        onMouseOver={ () => router.prefetch(path) }
                      >{ text }</Link>
                    ))
                  }
                </nav>
            )
          }
        </header>
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
              </List>
            </Grid>
          </Grid>
        </footer>
      </Container>
    </ThemeProvider>
  )
}   

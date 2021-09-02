import { useRouter } from 'next/router'
import Image from 'next/image'
import { Link } from '../link'
import { Container, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import styles from './layout.module.css'
import enviroscanLogo from '../../images/enviroscan-logo.png'
import { useMediaQuery } from '@material-ui/core'
import classnames from 'classnames'

const mainMenuLinks = [
  { text: 'Environmental Indicators',         path: '/environmental-indicators' },
  { text: 'Sociodemographic Indicators',      path: '/sociodemographic-indicators' },
  { text: 'Environmental Justice Indicators', path: '/environmental-justice-indicators' },
  { text: 'Health Outcomes',                  path: '/health-outcomes' },
  { text: 'Documentation',                    path: '/documentation' },
]

const footerLinks = [
  { text: 'Accessibility', path: '/accessibility' },
  { text: 'Privacy',       path: '/privacy' },
  { text: 'Contact Us',    path: '/contact' },
]

export const Layout = ({ children }) => {
  const compact = useMediaQuery('(max-width: 992px)');
  const router = useRouter()

  return (
    <Container maxWidth="lg" disableGutters className={ styles.wrapper }>
      <header className={ styles.header }>
        <Link to="/" className={ styles.brand }>
          <Image src={ enviroscanLogo } />
        </Link>
        {
          compact && (
            <nav className={ styles.mobileNavigation }>
              {
                mainMenuLinks.map(({ path, text }) => (
                  <Link to={ path } key={ `main-menu-${ text }` }
                  className={ classnames(styles.menuItem, router.asPath === path ? styles.active : undefined) }
                      onMouseOver={ () => router.prefetch(path) }
                    >{ text }
                  </Link>
                ))
              }
            </nav>
          )
        }
        {
          !compact && (
            <nav className={ styles.navigation }>
              {
                mainMenuLinks.map(({ path, text }) => (
                  <Link to={ path } key={ `main-menu-${ text }` }
                  className={ classnames(styles.menuItem, router.asPath === path ? styles.active : undefined) }
                      onMouseOver={ () => router.prefetch(path) }
                    >{ text }
                  </Link>
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
                <Link to="/" className={ styles.footerLink }>UNC Institute for Environmental Health Solutions</Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </footer>
    </Container>
  )
}   

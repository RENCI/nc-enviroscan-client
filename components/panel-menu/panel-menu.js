import { Link } from '../link'
import styles from './panel-menu.module.css'
import { Card, CardContent, CardHeader, Container, Grid, List, ListItem, makeStyles, Typography, useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles({
  grid: {
    marginTop: '6rem',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '66%',
    gap: '1rem',
  },
  compactGrid: {
    marginTop: '6rem',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '90%',
  },
  card: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  cardHeader: {
    flex: '0 0 75px',
    maxHeight: '75px',
    textAlign: 'center',
  },
  cardContent: {
    flex: '1 0 200px',
    backgroundColor: '#f3f6f9',
    padding: 0,
  },
  cardLink: {
    width: '100%',
    padding: '0.25rem 0',
  },
})

const panels = [
  {
    title: 'About Our Data',
    colors: ['#fda67a', '#f15b25'],
    items: [
      { text: 'Environmental Indicators', path: '/environmental-indicators' },
      { text: 'Sociodemographic indicators', path: '/sociodemographic-indicators' },
      { text: 'Health outcomes', path: '/health-outcomes' },
    ],
  },
  {
    title: 'Quick Facts',
    colors: ['#3ecbf9', '#0172bd'],
    items: [
      { text: 'Search tool by county', path: '/' },
      { text: 'Search tool by census tract', path: '/' },
    ],
  },
  {
    title: 'Community Resources',
    colors: ['#ffea78', '#fbb13c'],
    items: [
      { text: 'Local health providers', path: '/' },
      { text: 'Treatment guide', path: '/' },
    ],
  },
]

export const PanelMenu = () => {
  const classes = useStyles()
  const compact = useMediaQuery('(max-width: 882px)')

  return (
    <Grid spacing={ 2 } className={ compact ? classes.compactGrid : classes.grid }>
      {
        panels.map(panel => (
          <Grid item key={ panel.title }>
            <Card className={ classes.card } xl={ 6 } elevation={ 1 }>
              <CardHeader
                className={ classes.cardHeader }
                style={{ backgroundImage: `linear-gradient(to bottom, ${ panel.colors[0] }, ${ panel.colors[1] })` }}
                title={ panel.title }
              />
              <CardContent className={ classes.cardContent }>
                <List>
                  {
                    panel.items.map(item => (
                      <ListItem button key={ `${ panel.title }_${ item.text }` }>
                        <Link to={ item.path } className={ classes.cardLink }>
                          <Typography>{ item.text }</Typography>
                        </Link>
                      </ListItem>
                    ))
                  }
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}

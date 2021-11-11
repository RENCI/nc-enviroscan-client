import { Link } from './link'
import { Card, CardContent, CardHeader, Container, Grid, List, ListItem, makeStyles, Typography } from '@mui/material'

const useStyles = makeStyles(theme => ({
  grid: {
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '100%', // unpredictable in dev
    alignContent: 'stretch',  // unpredictable in dev
  },
  cardHeader: {
    flex: '0 0 75px',
    textAlign: 'center',
  },
  cardContent: {
    flex: '1 0 200px',
    padding: 0,
  },
  cardLink: {
    width: '100%',
    padding: `${ theme.spacing(1) }px 0`,
  },
}))

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
      { text: 'Search Mapper by county', path: 'https://enviroscan-map.renci.org/' },
      { text: 'Search Mapper by census tract', path: 'https://enviroscan-map.renci.org/' },
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

  return (
    <Grid container className={ classes.grid } spacing={ 4 }>
      {
        panels.map(panel => (
          <Grid item key={ panel.title } xs={ 12 } md={ 4 }>
            <Card className={ classes.card } elevation={ 1 }>
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

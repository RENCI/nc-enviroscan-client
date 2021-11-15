import { Link } from './link'
import { Card, CardContent, CardHeader, Container, Grid, List, ListItem, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import data from '../images/panel-icons/data.png'
import quickFacts from '../images/panel-icons/quick-facts.png'
import resources from '../images/panel-icons/resources.png'

const useStyles = makeStyles(theme => ({
  grid: {
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '100%', // unpredictable in dev
    alignContent: 'stretch',  // unpredictable in dev
    borderRadius: '7px',
    filter:  'drop-shadow(16px 16px 10px rgba(0, 0, 0, 0.2))',
  },
  cardHeader: {
    flex: '0 0 75px',
    textAlign: 'center',
    padding: '10px',
  },
  cardContent: {
    flex: '1 0 200px',
    padding: '10px',
  },
  cardLink: {
    width: '100%',
    padding: `${ theme.spacing(1) }px 0`,
    textDecoration: 'none',
  },
}))

const panels = [
  {
    title: 'About Our Data',
    colors: ['#f5c99e', '#f6957c'],
    media: data,
    items: [
      { text: 'Environmental Indicators',       path: '/environmental-indicators' },
      { text: 'Sociodemographic indicators',    path: '/sociodemographic-indicators' },
      { text: 'Health outcomes',                path: '/health-outcomes' },
    ],
  },
  {
    title: 'Quick Facts',
    colors: ['#a8d7e6', '#55a4db'],
    media: quickFacts,
    items: [
      { text: 'Search Mapper by county',        path: 'https://enviroscan-map.renci.org/' },
      { text: 'Search Mapper by census tract',  path: 'https://enviroscan-map.renci.org/' },
    ],
  },
  {
    title: 'Community Resources',
    colors: ['#fff8b0', '#ffd479'],
    media: resources,
    items: [
      { text: 'Local health providers',         path: '/' },
      { text: 'Treatment guide',                path: '/' },
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
              <CardMedia
                component="img"
                height="200"
                image={panel.media.src}
                alt={panel.title}
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

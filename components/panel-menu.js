import { Link } from './link'
import { Card, CardContent, CardHeader, Container, Grid, List, ListItem, makeStyles, Typography, useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    margin: '6rem auto',
    width: '75%',
    gap: '1rem',
    alignItems: 'stretch',
  },
  compactGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(3, content)',
    alignItems: 'stretch',
    margin: '6rem auto',
    width: '90%',
    gap: '1rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '100%',
  },
  cardHeader: {
    flex: '0 0 75px',
    maxHeight: '75px',
    textAlign: 'center',
  },
  cardContent: {
    flex: '1 0 200px',
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
  const compact = useMediaQuery('(max-width: 882px)')

  return (
    <Grid container className={ compact ? classes.compactGrid : classes.grid }>
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

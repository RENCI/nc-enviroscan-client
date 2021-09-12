import { Fragment } from 'react'
import { Hero } from '../../components/hero'
import { Link } from '../../components/link'
import { MainContent } from '../../components/layout'
import beach from '../../images/beach.png'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core'
import { ArrowForward as MoreIcon } from '@material-ui/icons'
import waterImage from '../../images/resources/water.png'
import airImage from '../../images/resources/air.png'
import soilImage from '../../images/resources/soil.png'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  largeScreen: {
    flexDirection: 'row'
  },
  media: {
    flex: '0 1 200px',
    minWidth: '200px',
  },
  content: {
    flex: '1',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 0,
  }
});

const content = {
  title: 'Environmental Indicators',
  blurb: 'NC ENVIROSCAN contains information on toxic chemical contamination in water, air, and soil. These chemicals are known to b harmful to human health. Contaminants can enter the Environmental through natural sources as well as human activities.',
  indicators: [
    {
      title: 'Water',
      image: waterImage,
      path: `/environmental-indicators/water`,
      body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem',
    },
    {
      title: 'Air',
      image: airImage,
      path: `/environmental-indicators/air`,
      body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem',
    },
    {
      title: 'Soil',
      image: soilImage,
      path: `/environmental-indicators/soil`,
      body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem',
    },
  ],
}

export default function EnvironmentalIndicators() {
  const classes = useStyles()
  const largeScreen = useMediaQuery('(min-width: 600px)')

  return (
    <Fragment>
      <Hero
        title={ content.title }
        backgroundImage={ beach.src }
      />
      <MainContent>
        <Typography variant="h2">{ content.title }</Typography>
        <Typography paragraph>
          { content.blurb }
        </Typography>
        <Grid container spacing={ 2 }>
          {
            content.indicators.map(section => (
              <Grid item key={ section.title }>
                <Card className={ `${ classes.root } ${ largeScreen ? classes.largeScreen : undefined }` } square>
                  <CardMedia
                    className={ classes.media }
                    title={ section.title }
                    image={ section.image.src }
                  />
                  <CardContent className={ classes.content }>
                    <Typography variant="h3">{ section.title }</Typography>
                    <Typography paragraph>{ section.body }</Typography>
                    <CardActions className={ classes.actions }>
                      <Button component={ Link } to={ section.path } size="small" color="primary">
                        Learn More
                        <MoreIcon fontSize="small" />
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </MainContent>
    </Fragment>
  )
}

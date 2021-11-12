import { Fragment, useMemo, useState } from 'react'
import Head from 'next/head'
import { Hero } from '../components/hero'
import { Link } from '../components/link'
import { MainContent } from '../components/layout'
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core'
import { ArrowForward as MoreIcon } from '@material-ui/icons'
import { LoadingIndicator } from '../components/loading-indicator'
import waterImage from '../images/resources/water.png'
import airImage from '../images/resources/air.png'
import soilImage from '../images/resources/soil.png'
import heroImage from '../images/hero-images/environmental-indicators.jpg'

import { AirPage } from  '../components/environmental-indicators/air'
import { SoilPage } from  '../components/environmental-indicators/soil'
import { WaterPage } from '../components/environmental-indicators/water'

//

const content = {
  title: 'Environmental Indicators',
  blurb: 'NC ENVIROSCAN contains information on toxic chemical contamination in water, air, and soil. These chemicals are known to be harmful to human health. Contaminants can enter the environment through natural sources as well as human activities.',
  indicators: {
    air: {
      title: 'Air',
      image: airImage,
      component: AirPage,
    },
    soil: {
      title: 'Soil',
      image: soilImage,
      component: SoilPage,
    },
    water: {
      title: 'Water',
      image: waterImage,
      component: WaterPage,
    },
  },
}

//

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: '5px',
  },
  media: {
    minHeight: '150px',
    filter: 'opacity(0.7) saturate(0.5) !important',
    transition: 'filter 500ms, min-height 250ms',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '175%',
    padding: theme.spacing(2),
    transition: 'transform 150ms, min-height 250ms',
    transformOrigin: 'center center',
    color: theme.palette.grey[800],
    minHeight: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 0,
    backgroundColor: theme.palette.grey[100],
  },
  active: {
    '& $media': {
      filter: 'opacity(1.0) saturate(1.0) !important',
      minHeight: '100px',
    },
    '& $content': {
      backgroundColor: theme.palette.common.white,
    },
    '& $cardTitle': {
      minHeight: '80px',
      transform: 'scale(1.2)',
      color: theme.palette.primary.main,
    },
  },
}))

//

const SelectIndicatorInstructions = () => {
  return (
    <Typography paragraph align="center">
      Select the indicator above to explore its impact on the environment.
    </Typography>
  )
}

export default function EnvironmentalIndicators() {
  const classes = useStyles()
  const largeScreen = useMediaQuery('(min-width: 600px)')
  const [indicator, setIndicator] = useState(null)

  const MemoizedContent = useMemo(() => indicator ? content.indicators[indicator].component : SelectIndicatorInstructions, [indicator])

  return (
    <Fragment>
      <Head>
        <title key="title">Environmental Indicators | NC Enviroscan</title>
      </Head>
      <Hero
        title={ content.title }
        backgroundImage={ heroImage.src }
      />
      <MainContent>
        <Typography paragraph>
          { content.blurb }
        </Typography>

        <br /><br />

        <Grid container spacing={ 2 }>
          {
            Object.keys(content.indicators).map(key => (
              <Grid item key={ key } xs={ 12 } sm={ 4 }>
                <Card classes={{ root: `${ classes.card } ${ key === indicator ? classes.active : '' }` }} square>
                  <CardActionArea onClick={ () => setIndicator(key) }>
                    <CardMedia
                      className={ classes.media }
                      title={ content.indicators[key].title }
                      image={ content.indicators[key].image.src }
                      height="200"
                    >
                    </CardMedia>
                    <CardContent className={ classes.content }>
                      <Typography
                        variant="h3"
                        align="center"
                        className={ classes.cardTitle }
                      >{ content.indicators[key].title }</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </MainContent>
      <MainContent>
        <MemoizedContent />
      </MainContent>
    </Fragment>
  )
}

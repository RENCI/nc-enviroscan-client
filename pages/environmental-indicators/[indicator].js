import { Fragment, useMemo } from 'react'
import { useRouter } from 'next/router'
import { Hero } from '../../components/hero'
import { Link } from '../../components/link'
import { MainContent } from '../../components/layout'
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core'
import { ArrowForward as MoreIcon } from '@material-ui/icons'
import { LoadingIndicator } from '../../components/loading-indicator'
import waterImage from '../../images/resources/water.png'
import airImage from '../../images/resources/air.png'
import soilImage from '../../images/resources/soil.png'
import heroImage from '../../images/hero-images/environmental-indicators.jpg'

import { AirPage } from  '../../components/environmental-indicators/air'
import { SoilPage } from  '../../components/environmental-indicators/soil'
import { WaterPage } from '../../components/environmental-indicators/water'

//

const content = {
  title: 'Environmental Indicators',
  blurb: 'NC ENVIROSCAN contains information on toxic chemical contamination in water, air, and soil. These chemicals are known to b harmful to human health. Contaminants can enter the Environmental through natural sources as well as human activities.',
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
  },
  media: {
    height: '100px',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '200%',
    padding: theme.spacing(2),
  },
  content: {
    padding: 0,
  },
}))

//


export default function EnvironmentalIndicators() {
  const classes = useStyles()
  const router = useRouter()
  const largeScreen = useMediaQuery('(min-width: 600px)')

  const { query: { indicator } } = router

  const MemoizedContent = useMemo(() => indicator ? content.indicators[indicator].component : LoadingIndicator, [indicator])

  return (
    <Fragment>
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
                <Card classes={{ root: classes.card }} square>
                  <CardActionArea onClick={ () => router.replace(key) }>
                    <CardMedia
                      className={ classes.media }
                      title={ content.indicators[key].title }
                      image={ content.indicators[key].image.src }
                      height="200"
                    >
                    </CardMedia>
                    <CardContent className={ classes.content }>
                      <Typography variant="h3" align="center" className={ classes.cardTitle}>{ content.indicators[key].title }</Typography>
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

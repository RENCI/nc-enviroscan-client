import { Fragment } from 'react'
import { Hero } from '../components/hero'
import { MainContent } from '../components/layout'
import beach from '../images/beach.png'
import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import waterImage from '../images/resources/water.png'
import airImage from '../images/resources/air.png'
import soilImage from '../images/resources/soil.png'

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  media: {
    flex: '0 0 200px',
  },
  content: {
    flex: '1',
  },
});

const content = {
  title: 'Environmental Indicators',
  blurb: 'NC ENVIROSCAN contains information on toxic chemical contamination in water, air, and soil. These chemicals are known to b harmful to human health. Contaminants can enter the Environmental through natural sources as well as human activities.',
  indicators: [
    {
      title: 'Water',
      image: waterImage,
      body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ',
    },
    {
      title: 'Air',
      image: airImage,
      body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ',
    },
    {
      title: 'Soil',
      image: soilImage,
      body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    },
  ],
}

export default function EnvironmentalIndicators() {
  const classes = useStyles()

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
        <Grid container spacing="2">
          {
            content.indicators.map(section => (
              <Grid item key={ section.title }>
                <Card className={ classes.root } square>
                  <CardMedia
                    className={ classes.media }
                    title={ section.title }
                    image={ section.image.src }
                  />
                  <CardContent className={ classes.content }>
                    <Typography variant="h3">{ section.title }</Typography>
                    <Typography paragraph>{ section.body }</Typography>
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

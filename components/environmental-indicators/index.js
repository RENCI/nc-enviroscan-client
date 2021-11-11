import { Fragment } from 'react'
import { Hero } from '../../components/hero'
import { Link } from '../../components/link'
import { MainContent } from '../../components/layout'
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography, useMediaQuery } from '@mui/material'
import { ArrowForward as MoreIcon } from '@material-ui/icons'
import waterImage from '../../images/resources/water.png'
import airImage from '../../images/resources/air.png'
import soilImage from '../../images/resources/soil.png'
import heroImage from '../../images/hero-images/environmental-indicators.jpg'

const useStyles = makeStyles(theme => ({
  card: {
  },
  media: {
    height: '200px',
  },
  content: {
    padding: theme.spacing(4),
  },
}))

const content = {
  title: 'Environmental Indicators',
  blurb: 'NC ENVIROSCAN contains information on toxic chemical contamination in water, air, and soil. These chemicals are known to b harmful to human health. Contaminants can enter the Environmental through natural sources as well as human activities.',
  indicators: [
    {
      title: 'Air',
      image: airImage,
      path: `/environmental-indicators/air`,
    },
    {
      title: 'Soil',
      image: soilImage,
      path: `/environmental-indicators/soil`,
    },
    {
      title: 'Water',
      image: waterImage,
      path: `/environmental-indicators/water`,
    },
  ],
}

export const RootPage = () => {
  const classes = useStyles()
  const largeScreen = useMediaQuery('(min-width: 600px)')

  return (
    <Fragment>
      <Hero
        title={ content.title }
        backgroundImage={ heroImage.src }
      />
      <MainContent>
        <Typography variant="h2">{ content.title }</Typography>
        <Typography paragraph>
          { content.blurb }
        </Typography>
        <Grid container spacing={ 2 }>
          {
            content.indicators.map(section => (
              <Grid item key={ section.title } xs={ 12 } sm={ 4 }>
                <Card className={ classes.card } square>
                  <CardActionArea href={ section.path }>
                    <CardMedia
                      className={ classes.media }
                      title={ section.title }
                      image={ section.image.src }
                      height="200"
                    />
                    <CardContent className={ classes.content }>
                      <Typography variant="h3" align="center">{ section.title }</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </MainContent>
    </Fragment>
  )
}

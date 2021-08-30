import { Typography } from '@material-ui/core'
import styles from './hero.module.css'
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Hidden } from '@material-ui/core'
import mapperScreenshot from '../../images/mapper.jpg'

export const Hero = ({ backgroundImage, title }) => {
  return (
    <div className={ styles.wrapper }>
      <div className={ styles.hero } style={{ backgroundImage: `url(${ backgroundImage })` }}>
        <Grid container>
          <Grid item xs={ 12 } md={ 8 }>
            <Typography variant="h3" className={ styles.title }>{ title }</Typography>
          </Grid>
          <Hidden smDown>
            <Grid item xs={ 6 }>
              <Card square className={ styles.mapperCta }>
                <CardActionArea>
                  <CardHeader title="ENVIROSCAN Mapper" classes={{ root: styles.mapperCardHeader, title: styles.mapperCardTitle }}/>
                  <CardMedia
                    className={ styles.mapperCardMedia }
                    image={ mapperScreenshot.src }
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Hidden>
        </Grid>
      </div>
      <div className={ styles.lowerBorder } />
    </div>
  )
}

export const HomeHero = ({ backgroundImage }) => {
  return (
    <div
      className={ styles.homeHero }
      style={{ backgroundImage: `url(${ backgroundImage })` }}
    />
  )
}

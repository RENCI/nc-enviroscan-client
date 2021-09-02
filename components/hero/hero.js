import { Typography } from '@material-ui/core'
import styles from './hero.module.css'
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Hidden } from '@material-ui/core'
import { MapperCard } from './mapper-card'

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
              <MapperCard />
            </Grid>
          </Hidden>
        </Grid>
      </div>
      <div className={ styles.lowerBorder } />
    </div>
  )
}

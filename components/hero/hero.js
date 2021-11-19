import styles from './hero.module.css'
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Hidden, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { MapperCard } from './mapper-card'

export const Hero = ({ backgroundImage, title }) => {
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))
  
  return (
    <div className={ styles.wrapper }>
      <div className={ styles.hero } style={{ backgroundImage: `url(${ backgroundImage })` }}>
        <Grid container>
          <Grid item xs={ 12 } md={ 7 } lg={ 8 }>
            <Typography variant="h1" className={ styles.title }>{ title }</Typography>
          </Grid>
          {hidden ? null : <Grid item xs={ 6 }>
              <MapperCard />
            </Grid>
          }
        </Grid>
      </div>
      <div className={ styles.lowerBorder } />
    </div>
  )
}

import { Card, CardActionArea, CardHeader, CardMedia } from '@material-ui/core'
import mapperScreenshot from '../../images/mapper.jpg'
import styles from './mapper-card.module.css'

export const MapperCard = ({ fixed = false, width }) => {
  return (
    <Card square className={ `${ styles.mapperCard } ${ fixed ? undefined : styles.slideUp }` } style={{ width: width }}>
      <CardActionArea>
        <CardHeader title="ENVIROSCAN Mapper" classes={{ root: styles.mapperCardHeader, title: styles.mapperCardTitle }}/>
        <CardMedia
          component="img"
          classes={{ root: styles.mapperCardMedia, img: styles.mapperCardMediaImage }}
          image={ mapperScreenshot.src }
        />
      </CardActionArea>
    </Card>
  )
}

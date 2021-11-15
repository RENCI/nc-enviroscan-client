import Image from 'next/image'
import styles from './home-hero.module.css'
import drinker from '../../images/drinker.png'
import { MapperCard } from './mapper-card'
import { Typography } from '@material-ui/core'

export const HomeHero = ({ backgroundImage }) => {
  return (
    <div className={ styles.hero } style={{ backgroundImage: `url(${ backgroundImage })` }}>
      <div className={ styles.caption }>
        <Typography variant="h1" className={ styles.title }>North Carolina ENVIROSCAN helps communities</Typography>
        {' '}
        <Typography paragraph className={ styles.subtitle }>
          increase awareness of key environmental and societal factors that can impact health.
        </Typography>
      </div>
      <div className={ styles.mapper }>
        <MapperCard fixed width={ '100%' }/>
      </div>
      <div className={ styles.stripe }></div>
      <div className={ styles.blurb }>
        <Typography paragraph>
          NC ENVIROSCAN allows users to visualize trends across environmental contaminants,
          sociodemographic information, environmental justice indicators, and health outcomes
          throughout North Carolina.
          These indicators can be viewed individually, side-by-side on two maps, or overlayed
          onto the same map, allowing users to identify new patterns relevant to their concerns
        </Typography>
        <Typography paragraph>
          Community members that want to learn more aout their local health risks and potential
          solutions to these risks may benefit from this tool, along with policy-makers,
          government agencies, clinicians, and scientists.
        </Typography>
      </div>
      <div className={ styles.drinker }>
        <Image src={ drinker.src } className={ styles.drinkerImage } width={ 483 } height={ 673 } alt="" />
      </div>
    </div>
  )
}
import Image from 'next/image'
import styles from './home-hero.module.css'
import drinker from '../../images/drinker.png'
import { MapperCard } from './mapper-card'

export const HomeHero = ({ backgroundImage }) => {
  return (
    <div className={ styles.hero } style={{ backgroundImage: `url(${ backgroundImage })` }}>
      <div className={ styles.caption }>
        <h2 className={ styles.title }>The North Carolina ENVIROSCAN is a user-friendly tool that helps communities</h2>
        <p className={ styles.subtitle }>
          Increase NC communities’ awareness of key environmental and
          societal factors and their relation to human health
        </p>
      </div>
      <div className={ styles.mapper }>
        <MapperCard fixed width={ '100%' }/>
      </div>
      <div className={ styles.stripe }></div>
      <div className={ styles.blurb }>
        <p>
          NC ENVIROSCAN allows users to visualie trends acress environmental contaminants,
          sociodemographic information, environmental justice indicators, and health outcomes
          throughout North Carolina.
        </p>
        <p>
          These indicators can be viewed individually, side-by-side on two maps, or overlayed
          onto the same map, allowing users to identify new patterns relevant to their concerns
        </p>
        <p>
          Community members that want to learn more aout their local health risks and potential
          solutions to these risks may benefit from this tool, along with policy-makers,
          government agencies, clinicians, and scientists.
        </p>
      </div>
      <div className={ styles.drinker }>
        <Image src={ drinker.src } className={ styles.drinkerImage } width={ 483 } height={ 673 } alt="" />
      </div>
    </div>
  )
}
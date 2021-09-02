import Image from 'next/image'
import styles from './home-hero.module.css'
import drinker from '../../images/drinker.png'
import { MapperCard } from './mapper-card'

export const HomeHero = ({ backgroundImage }) => {
  return (
    <div className={ styles.hero } style={{ backgroundImage: `url(${ backgroundImage })` }}>
      <div className={ styles.caption }>
        <h2>The North Carolina ENVIROSCAN is a user-friendly tool that helps communities</h2>
        <p>
          Increase NC communities’ awareness of key environmental and
          societal factors and their relation to human health
        </p>
      </div>
      <div className={ styles.mapper }>
        <MapperCard fixed width={ '100%' }/>
      </div>
      <div className={ styles.stripe }></div>
      <div className={ styles.drinker }>
        <Image src={ drinker.src } className={ styles.drinkerImage } width={ 360 } height={ 300 } />
      </div>
    </div>
  )
}
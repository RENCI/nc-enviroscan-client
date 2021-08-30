import { Link } from '../link'
import styles from './panel-menu.module.css'

const panels = [
  {
    title: 'About Our Data',
    colors: ['#fda67a', '#f15b25'],
    items: [
      { text: 'Environment Indicators', path: '/environmental-indicators' },
      { text: 'Sociodemographic indicators', path: '/sociodemographic-indicators' },
      { text: 'Health outcomes', path: '/health-outcomes' },
    ],
  },
  {
    title: 'Quick Facts',
    colors: ['#3ecbf9', '#0172bd'],
    items: [
      { text: 'Search tool by county', path: '/' },
      { text: 'Search tool by census tract', path: '/' },
    ],
  },
  {
    title: 'Community Resources',
    colors: ['#ffea78', '#fbb13c'],
    items: [
      { text: 'Local health providers', path: '/' },
      { text: 'Treatment guide', path: '/' },
    ],
  },
]

export const PanelMenu = () => {
  return (
    <div className={ styles.container }>
      {
        panels.map(panel => (
          <div key={ panel.title } className={ styles.panel }>
            <h2 className={ styles.panelHeader } style={{ backgroundImage: `linear-gradient(to bottom, ${ panel.colors[0] }, ${ panel.colors[1] })` }}>
              { panel.title }
            </h2>
            <div className={ styles.panelBody }>
              <ul className={ styles.panelItemList }>
                {
                  panel.items.map(item => (
                    <li key={ item.text } className={ styles.panelItemListItem }>
                      <Link to={ item.path }>{ item.text }</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        ))
      }
    </div>
  )
}

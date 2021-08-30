import styles from './layout.module.css'
import { Container } from '@material-ui/core'

export const MainContent = ({ children }) => {
  return (
    <main className={ styles.mainContent }>
      <Container maxWidth="sm">
        { children }
      </Container>
    </main>
  )
}
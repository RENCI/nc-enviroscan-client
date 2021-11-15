import styles from './layout.module.css'
import { Container } from '@material-ui/core'

export const MainContent = ({ children }) => {
  return (
    <main className={ styles.mainContent }>
      <Container maxWidth="md">
        { children }
      </Container>
    </main>
  )
}
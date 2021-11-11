import styles from './layout.module.css'
import { Container } from '@mui/material'

export const MainContent = ({ children }) => {
  return (
    <main className={ styles.mainContent }>
      <Container maxWidth="md">
        { children }
      </Container>
    </main>
  )
}
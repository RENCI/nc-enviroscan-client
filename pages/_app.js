import '../styles/global.css'
import { Layout } from '../components/layout'

export default function Enviroscan({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

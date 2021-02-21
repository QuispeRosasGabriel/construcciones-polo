import Layout from '../layout/Layout'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);


export default MyApp

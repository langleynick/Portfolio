import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { SSRProvider } from 'react-bootstrap'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <SSRProvider>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </SSRProvider>
  )
}

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { SSRProvider } from 'react-bootstrap'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}

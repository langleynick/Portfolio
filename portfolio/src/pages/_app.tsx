// Adding Bootstrap CSS import
import 'bootstrap/dist/css/bootstrap.css'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  //Adding Bootstrap JS
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
    ? require("bootstrap/dist/js/bootstrap")
    : null;
  }, [router.events]);
  return <Component {...pageProps} />
}

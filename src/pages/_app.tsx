import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { fonts } from '@/utils/fonts'

export default function App({ Component, pageProps }: AppProps) {
  return <div className={fonts.className}>
    <Component {...pageProps} />
  </div>
}

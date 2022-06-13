import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <SessionProvider>
        <SWRConfig value={{fetcher:(url:string)=> fetch(url).then((response)=>response.json())}}>
          <Component {...pageProps} />
        </SWRConfig>
      </SessionProvider>
  )
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { SWRConfig } from 'swr'
import { Provider } from 'react-redux'
import { store } from 'redux/app/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <SessionProvider>
        <Provider store={store}>
          <SWRConfig value={{fetcher:(url:string)=> fetch(url).then((response)=>response.json())}}>
            <Component {...pageProps} />
          </SWRConfig>
        </Provider>
      </SessionProvider>
  )
}

export default MyApp

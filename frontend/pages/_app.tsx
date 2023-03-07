import type { AppProps } from 'next/app'
import { useLayoutEffect, useState } from 'react'
import { store } from '../store'
import { Provider } from 'react-redux'
import '@/styles/globals.css'

const AppWrapper: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isFirstLoad, setIseFirstLoad] = useState(true)
  useLayoutEffect(() => {
    setIseFirstLoad(false)
  }, [])

  return (
    <Provider store={store}>
      {!isFirstLoad ? <App Component={Component} pageProps={pageProps} /> : ''}
    </Provider>
  )
}

function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />
}

export default AppWrapper

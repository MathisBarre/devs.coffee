import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import * as ackeeTracker from 'ackee-tracker'
import splitbee from '@splitbee/web'

import '../styles/globals.css'

import 'nprogress/nprogress.css'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Progress bar
  const TopProgressBar = dynamic(
    () => {
      return import('components/TopProgressBar')
    },
    { ssr: false }
  )

  // Ackee Analytics
  const instance = ackeeTracker.create(
    {
      server: 'https://manialytics.herokuapp.com/',
      domainId: 'ffc71a4d-4120-468e-9820-5483e514699e'
    },
    {
      detailed: true,
      ignoreLocalhost: true
    }
  )

  useEffect(() => {
    function handleRouteChange() {
      instance.record(ackeeTracker.attributes(true))
    }

    handleRouteChange()

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    splitbee.init({
      scriptUrl: '/bee.js',
      apiUrl: '/_hive'
    })
  }, [])

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' && (
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
      )}
      <TopProgressBar />
      <Component {...pageProps} />
    </div>
  )
}

export default App

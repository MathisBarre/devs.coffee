import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import * as ackeeTracker from 'ackee-tracker'
import splitbee from '@splitbee/web'

import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

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

  // SEO
  const SEO_TITLE = 'devs.coffee'
  const SEO_DESCRIPTION =
    "devs.coffee est un site qui a pour objectif d’augmenter les liens communautaires et d’améliorer l'expérience des étudiant chez OpenClassrooms. A l'heure actuelle, vous pouvez y retrouver une liste des serveurs discord, une carte des étudiants, un calendrier des rendez-vous communautaires à ne pas louper et une liste de ressources additionnels !"

  // Theme
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  function toggleTheme(): void {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>devs.coffee</title>
        <meta name="title" content={SEO_TITLE} />
        <meta name="description" content={SEO_DESCRIPTION} />
        <link rel="icon" href="favicon.svg" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devs.coffee/" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:image" content="https://devs.coffee/devs-coffee.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://devs.coffee/" />
        <meta property="twitter:title" content={SEO_TITLE} />
        <meta property="twitter:description" content={SEO_DESCRIPTION} />
        <meta property="twitter:image" content="https://devs.coffee/devs-coffee.png" />
      </Head>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <TopProgressBar />
      <div className="grow pt-16">
        <Component {...pageProps} />
      </div>
      <Footer theme={theme} />
    </div>
  )
}

export default App

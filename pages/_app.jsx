import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import * as ackeeTracker from 'ackee-tracker'

import Header from 'components/layout/Header.jsx'
import Footer from 'components/layout/Footer.jsx'

import 'tailwindcss/tailwind.css'
import '../style/global.css'

function App({ Component, pageProps }) {
  const router = useRouter()

  // Ackee Analytics
  const instance = ackeeTracker.create(
    {
      server: 'https://manialytics.herokuapp.com/',
      domainId: 'ffc71a4d-4120-468e-9820-5483e514699e',
    },
    {
      detailed: true,
      ignoreLocalhost: true,
      ignoreOwnVisits: false,
    }
  )

  useEffect(() => {
    function handleRouteChange(url) {
      instance.record(ackeeTracker.attributes(true))
    }

    handleRouteChange('https://mathisbarre.com')

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // SEO
  const SEO_TITLE = 'devs.coffee'
  const SEO_DESCRIPTION = 'devs.coffee est un site qui a pour objectif d’augmenter les liens communautaires et d’améliorer l\'expérience des étudiant chez OpenClassrooms. A l\'heure actuelle, vous pouvez y retrouver une liste des serveurs discord, une carte des étudiants, un calendrier des rendez-vous communautaires à ne pas louper et une liste de ressources additionnels !'

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
        <meta
          property="og:image"
          content="https://devs.coffee/devs-coffee.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://devs.coffee/" />
        <meta property="twitter:title" content={SEO_TITLE} />
        <meta property="twitter:description" content={SEO_DESCRIPTION} />
        <meta
          property="twitter:image"
          content="https://devs.coffee/devs-coffee.png"
        />
      </Head>
      <Header />
      <div className="pt-16 flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default App

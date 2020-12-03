import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import * as ackeeTracker from 'ackee-tracker'

import Header from "components/layout/Header.jsx"
import Footer from "components/layout/Footer.jsx"

import "../style/global.scss"

function App({ Component, pageProps }) {
  const router = useRouter()

  // Ackee Analytics
  const instance = ackeeTracker.create({
    server: 'https://analytics.mathisbarre.com',
    domainId: '30519f77-be90-4e93-93dd-d75d75fd627e'
  },{
    detailed: true,
    ignoreLocalhost: true,
    ignoreOwnVisits: true
  })

  useEffect(() => {
    function handleRouteChange(url) {
      instance.record({
        siteLocation: window.location.href,
        siteReferrer: document.referrer
      })
    }

    handleRouteChange("https://mathisbarre.com")

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>dev.cafe</title>
        <meta name="description" content="dev.cafe est un site qui a pour objectif d’augmenter l'expérience étudiant chez OpenClassrooms via des ressources additionnelles et une liste de questions fréquentes ainsi que d’améliorer les liens communautaires grâce à liste de discord, une carte des étudiants et un calendrier des rendez-vous à ne pas louper !"/>
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
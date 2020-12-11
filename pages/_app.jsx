import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import * as ackeeTracker from 'ackee-tracker'

import Header from "components/layout/Header.jsx"
import Footer from "components/layout/Footer.jsx"

import "tailwindcss/tailwind.css"
import "../style/global.css"

function App({ Component, pageProps }) {
  const router = useRouter()

  // Ackee Analytics
  const instance = ackeeTracker.create({
    server: 'https://analytics.mathisbarre.com',
    domainId: 'ffc71a4d-4120-468e-9820-5483e514699e'
  },{
    detailed: true,
    ignoreLocalhost: true,
    ignoreOwnVisits: false
  })

  useEffect(() => {
    function handleRouteChange(url) {
      instance.record(ackeeTracker.attributes(true))
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
        <title>devs.coffee</title>
        <meta name="title" content="devs.coffee"/>
        <meta name="description" content="devs.coffee est un site qui a pour objectif d’augmenter l'expérience étudiant chez OpenClassrooms via des ressources additionnelles et une liste de questions fréquentes ainsi que d’améliorer les liens communautaires grâce à liste de discord, une carte des étudiants et un calendrier des rendez-vous à ne pas louper !"/>
        <link rel="icon" href="favicon.svg"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://devs.coffee/"/>
        <meta property="og:title" content="devs.coffee"/>
        <meta property="og:description" content="devs.coffee est un site qui a pour objectif d’augmenter l'expérience étudiant chez OpenClassrooms via des ressources additionnelles et une liste de questions fréquentes ainsi que d’améliorer les liens communautaires grâce à liste de discord, une carte des étudiants et un calendrier des rendez-vous à ne pas louper !"/>
        <meta property="og:image" content="https://devs.coffee/devs-coffee.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://devs.coffee/"/>
        <meta property="twitter:title" content="devs.coffee"/>
        <meta property="twitter:description" content="devs.coffee est un site qui a pour objectif d’augmenter l'expérience étudiant chez OpenClassrooms via des ressources additionnelles et une liste de questions fréquentes ainsi que d’améliorer les liens communautaires grâce à liste de discord, une carte des étudiants et un calendrier des rendez-vous à ne pas louper !"/>
        <meta property="twitter:image" content="https://devs.coffee/devs-coffee.png"/>
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
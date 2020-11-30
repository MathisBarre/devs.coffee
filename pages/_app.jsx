import Head from "next/head"
import Header from "../components/layout/Header.jsx"
import Footer from "../components/layout/Footer.jsx"

import "../style/global.scss"

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>dev.cafe</title>
        <meta name="description" content="dev.cafe est un site qui a pour objectif d’augmenter l'expérience étudiant chez OpenClassrooms via des ressources additionnelles et une liste de questions fréquentes ainsi que d’améliorer les liens communautaires grâce à liste de discord, une carte des étudiants et un calendrier des rendez-vous à ne pas louper !"/>
      </Head>
      <Header/>
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
import Head from "next/head"
import Header from "../components/layout/Header.jsx"

import "tailwindcss/tailwind.css"
import "../style/global.scss"

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>dev.cafe</title>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  );
}

export default App;
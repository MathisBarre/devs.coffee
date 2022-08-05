import HomepageCard from 'components/HomepageCard'
import Seo from 'components/utils/seo'

export default function Index() {
  return (
    <div className="">
      <Seo
        title="devs.coffee - Accueil"
        description="devs.coffee est un site créé par Mathis Barré principalement destiné aux étudiants Openclassrooms pour les aider dans leur parcours d'apprentissage. Sur cette page vous trouverez des articles de blog et autres tutos."
        bannerSuffix="/devs-coffee.png"
        pageSuffix=""
      />

      <div className="bg-gray-800 py-6 justify-center">
        <div className="my-wrapper flex justify-center flex-col items-center">
          <a className="flex-shrink-0 flex items-center bg-gray-800 h-full">
            <img className="h-16 w-auto mr-3 mt-1" src="/images/logo.svg" alt="devs.coffee logo" />
            <h1 className="text-white font-bold text-6xl text-center">devs.coffee</h1>
          </a>
          <p className="text-white font-semibold text-2xl text-center mt-1">Au service des étudiants</p>
        </div>
      </div>

      <div className="grid gap-8 mb-8 my-wrapper my-8">
        <HomepageCard
          href="/communaute-openclassrooms"
          title="Rejoignez les groupes d'étudiants OpenClassrooms"
          description="Communautés officieuses pour tous les parcours !"
          button={{
            text: {
              content: 'Rejoindre',
              color: 'oc-500'
            },
            customClassNames: 'text-oc-500'
          }}
          watermarkImageUrl="/images/logo_openclassrooms.svg"
          customClassNames="bg-oc-500 hover:bg-oc-600"
        />
        <HomepageCard
          href="/ressources"
          title="Des ressources triés sur le volet !"
          description="HTML - CSS - Javascript - Node.js - MongoDB"
          button={{
            text: {
              content: "Ça m'intéresse !",
              color: 'mypurple-500'
            },
            customClassNames: 'text-mypurple-500'
          }}
          watermarkImageUrl="/images/icons/academic-cap.svg"
          customClassNames="bg-mypurple-500 hover:bg-mypurple-600"
        />
      </div>
    </div>
  )
}

import HomepageCard from 'components/HomepageCard'
import PublicationCard from 'components/PublicationCard'

export default function Index() {
  return (
    <div className="my-wrapper my-8">
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <HomepageCard
          href="/communaute-openclassrooms"
          title="Rejoignez la communauté OpenClassrooms"
          description="Événements - Discords - Carte - Initiatives"
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
      <div className="grid gap-8 lg:grid-cols-3 lg:max-w-none w-full mt-8">
        <PublicationCard
          image="https://miro.medium.com/proxy/1*5uS70yK2fRDeveT0WWgEQg.jpeg"
          type="Article"
          title="Mon avis sur Openclassrooms"
          description="Il y a 4 mois, j'ai terminé ma formation développeur web en alternance chez OpenClassrooms. Voici mon retour sur expérience."
          author={{
            name: 'Mathis Barré',
            profilePictureUrl:
              '/images/profil.jpg'
          }}
          href="https://medium.com/@MathisBarre/avis-dun-ancien-%C3%A9tudiant-openclassrooms-ddd5301fc191"
          date="15 Janvier 2021"
          readingTime={6}
        />
        <PublicationCard
          image="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=pLPhGoGaS9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
          type="Article"
          title="JavaScript localStorage démistifié"
          description="Nous vous êtes vous jamais demandé comment stocker des données localement et facilement ? C'est que ne nous allons voir ici en apprenant à manipuler l'api localStorage !"
          author={{
            name: 'Mathis Barré',
            profilePictureUrl:
              '/images/profil.jpg'
          }}
          href="/blog/javascript-localstorage-demistifie"
          date="5 Avril 2021"
          readingTime={5}
        />
        <PublicationCard fake />
      </div>
    </div>
  )
}

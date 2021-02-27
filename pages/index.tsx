import HomepageCard from 'components/HomepageCard'
import PublicationCard from 'components/PublicationCard'

export default function Index() {
  return (
    <div className="my-wrapper">
      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <HomepageCard
          href="communaute-openclassrooms"
          title="Rejoignez la communauté OpenClassrooms"
          description="Événements - Discords - Carte - Initiatives"
          button={{
            text: {
              content: 'Rejoindre',
              color: 'oc-500'
            }
          }}
          bgColor="oc-500"
          hoverColor="oc-600"
          watermarkImageUrl="/images/logo_openclassrooms.svg"
        />
        <HomepageCard
          href="ressources"
          title="Des ressources triés sur le volet !"
          description="HTML - CSS - Javascript - Node.js - MongoDB"
          button={{
            text: {
              content: "Ça m'intéresse !",
              color: 'mypurple-500'
            }
          }}
          bgColor="mypurple-500"
          hoverColor="mypurple-600"
          watermarkImageUrl="/images/icons/academic-cap.svg"
        />
      </div>
      <div className="grid gap-8 lg:grid-cols-3 lg:max-w-none w-full mt-8">
        <PublicationCard
          image="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=pLPhGoGaS9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
          type="Article"
          title="Boost yout conversation rate"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum."
          author={{
            name: 'Roel Aufderehar',
            profilePictureUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=pLPhGoGaS9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }}
        />
        <PublicationCard
          image="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=pLPhGoGaS9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
          type="Article"
          title="Boost yout conversation rate"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum."
          author={{
            name: 'Roel Aufderehar',
            profilePictureUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=pLPhGoGaS9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }}
        />
        <PublicationCard
          image="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=pLPhGoGaS9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
          type="Article"
          title="Boost yout conversation rate"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum."
          author={{
            name: 'Roel Aufderehar',
            profilePictureUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=pLPhGoGaS9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }}
        />
      </div>
    </div>
  )
}

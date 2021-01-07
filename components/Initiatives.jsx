import initiatives from '@data/initiatives.json'
import Card from '@components/layout/Card'
import Ressource from '@components/Ressource'

export default function Events() {
  return (
    <section id="initiatives">
      <Card
        title="Initiatives communautaires"
        description="Sites, lives, vidéos et + de la communauté !"
        withContentPadding={false}
        button={{
          text: 'Ajouter une initiative',
          onClick: () => {
            window.location.href = 'mailto:mathis.barre@live.fr'
          },
        }}
      >
      <div className="my-grid">
        {initiatives.map((initiative, index) => (
          <Ressource key={index} {...initiative} />
        ))}
      </div>
      </Card>
    </section>
  )
}

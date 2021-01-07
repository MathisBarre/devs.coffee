import Event from '@components/Event'
import Card from '@components/layout/Card'
import events from '../data/events.json'

export default function Events() {
  return (
    <section id="events">
      <Card
        title="Événements communautaires"
        description="Découvrez les prochains événements en présentiel ou en ligne organisés par la communauté !"
        withContentPadding={false}
        button={{
          text: 'Ajouter un événement',
          onClick: () => {
            window.location.href = 'mailto:mathis.barre@live.fr'
          },
        }}
      >
        <div className="bg-white dark:bg-gray-900 overflow-hidden">
          <ul>
            {events.map(
              ({ date, type, description, link, isCompleted }, index) => {
                if (!isCompleted) {
                  return (
                    <Event
                      key={index}
                      date={date}
                      type={type}
                      description={description}
                      link={link}
                    />
                  )
                }
              }
            )}
          </ul>
        </div>
      </Card>
    </section>
  )
}

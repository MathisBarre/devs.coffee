import Event from '@components/Event'
import Card from '@components/layout/Card'
import events from '../data/events.json'
import dayjs from 'dayjs'

export default function Events() {

  const notFinishedEvents = events.filter(event => {
    return dayjs().isBefore(event.date)
  })

  console.log(notFinishedEvents.length)

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
            {
            (notFinishedEvents.length !== 0)
              ? notFinishedEvents.map(
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
              )
              : <p className="text-black dark:text-white text-opacity-50 text-center py-10 my-4 dark:bg-gray-1000 rounded-md">Aucun événement programmé pour le moment</p>
            }
          </ul>
        </div>
      </Card>
    </section>
  )
}

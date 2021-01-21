import { useRouter } from 'next/router'
import Event from '@components/Event'
import Card from '@components/layout/Card'
import localEvents from '../data/events.json'
import dayjs from 'dayjs'

export default function Events({ trainingDevEvents }) {

  const router = useRouter()
  
  function onBtnClick() {
    router.push("contact")
  }

  let events = localEvents
    .concat(trainingDevEvents)
    .filter(event => ( dayjs().isBefore(event.date) ))

  return (
    <section id="events">
      <Card
        title="Événements communautaires"
        description="Découvrez les prochains événements en présentiel ou en ligne organisés par la communauté !"
        withContentPadding={false}
        button={{
          text: 'Ajouter un événement',
          onClick: onBtnClick
        }}
      >
        <div className="bg-white dark:bg-gray-900 overflow-hidden">
          <ul>
            {
            (events.length !== 0)
              ? events.map(
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
              : <p className="border border-gray-200 dark:border-gray-1000 text-black dark:text-white text-opacity-50 text-center py-10 my-4 dark:bg-gray-1000 rounded">Aucun événement programmé pour le moment</p>
            }
          </ul>
        </div>
      </Card>
    </section>
  )
}

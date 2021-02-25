import DiscordServers from 'components/DiscordServers'
import Events from 'components/Events'
import StudentMap from 'components/StudentMap'
import Initiatives from 'components/Initiatives'
import { GetStaticProps } from 'next'
import Ievent from 'interfaces/Event'

interface IindexProps {
  trainingDevEvents: Ievent[]
}

export default function OpenclassroomsCommunity({ trainingDevEvents }: IindexProps) {
  return (
    <div className="my-wrapper">
      <Events trainingDevEvents={trainingDevEvents} />
      <Initiatives />
      <StudentMap />
      <DiscordServers />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const oneDayInSeconds = 60 * 60 * 24

  const traningDevEvents = await fetch('https://www.training-dev.fr/api/getListEvent')
    .then((response) => response.json())
    .then((events) => {
      return events
        .filter((event: any) => {
          return event.category.toUpperCase() === 'LIVE'
        })
        .map((event: any) => {
          return {
            date: event.date.date.replace(' ', 'T'),
            type: event.category.toUpperCase(),
            description: event.name + '. Animé par ' + event.animator,
            link: 'https://www.twitch.tv/trainingdev',
            isCompleted: false
          }
        })
    })
    .catch((error) => {
      console.log(error)
    })

  return {
    revalidate: oneDayInSeconds / 4,
    props: {
      trainingDevEvents: traningDevEvents
    }
  }
}

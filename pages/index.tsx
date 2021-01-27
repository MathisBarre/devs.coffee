import DiscordServers from 'components/DiscordServers'
import Events from 'components/Events'
import Ressources from 'components/Ressources'
import StudentMap from 'components/StudentMap'
import Initiatives from 'components/Initiatives'
import { GetStaticProps } from 'next'

export default function Index({trainingDevEvents}) {
  return (
    <div className="mx-auto px-2 md:px-4 max-w-7xl">
      <Events trainingDevEvents={trainingDevEvents} />
      <Initiatives />
      <StudentMap />
      <DiscordServers />
      <Ressources />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const oneDayInSeconds = 60 * 60 * 24

  const traningDevEvents = await fetch("https://www.training-dev.fr/api/getListEvent")
    .then((response) => (response.json()))
    .then((events) => {
      return events
        .filter((event) => { return event.category.toUpperCase() === "LIVE" })
        .map((event) => {
          return {
            "date": event.date.date.replace(' ', 'T'),
            "type": event.category.toUpperCase(),
            "description": event.name + ". Animé par " + event.animator,
            "link": "https://www.twitch.tv/trainingdev",
            "isCompleted": false
          }
        })
    }) 
    .catch((error) => {console.log(error)})

  return {
    revalidate: (oneDayInSeconds / 4),
    props: {
      trainingDevEvents: traningDevEvents
    },
  }
}

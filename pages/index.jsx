import DiscordServers from 'components/DiscordServers.jsx'
import Events from 'components/Events.jsx'
import Ressources from 'components/Ressources.jsx'
import StudentMap from 'components/StudentMap.jsx'
import Initiatives from 'components/Initiatives.jsx'

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

export async function getStaticProps() {
  const oneDayInSeconds = 60 * 60 * 24
  let traningDevEvents

  try {
    const httpsBodyResponse = await fetch("https://www.training-dev.fr/api/getListEvent")
    traningDevEvents = await httpsBodyResponse.json()
  } catch (error) {
    console.log("Erreur durant la récupération des événements training-dev.fr")
  }

  return {
    revalidate: oneDayInSeconds,
    props: {
      trainingDevEvents: traningDevEvents
    },
  }
}

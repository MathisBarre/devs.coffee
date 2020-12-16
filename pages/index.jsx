import DiscordServers from 'components/DiscordServers.jsx'
import Events from 'components/Events.jsx'
import Ressources from 'components/Ressources.jsx'
import StudentMap from 'components/StudentMap.jsx'

export default function Index() {
  return (
    <div className="mx-auto px-2 md:px-4 max-w-7xl">
      <Events />
      <StudentMap />
      <DiscordServers />
      <Ressources />
    </div>
  )
}

import Card from './layout/Card'
import DiscordServer from './DiscordServer'

import discordServers from '../data/discordServers.json'

export default function DiscordServers() {
  function onBtnClick() {
    window.location.href = 'mailto:mathis.barre@live.fr'
  }

  return (
    <section id="discord">
      <Card
        title="Serveurs discord"
        description="Rejoignez un des serveurs discord communautaires OpenClassroom"
        withContentPadding={false}
        button={{ text: 'Ajouter un serveur à la liste', onClick: onBtnClick }}
      >
        <div className="bg-white  dark:bg-gray-900 overflow-hidden">
          <ul>
            {discordServers.map((props, index) => {
              return <DiscordServer {...props} key={index} />
            })}
          </ul>
        </div>
      </Card>
    </section>
  )
}

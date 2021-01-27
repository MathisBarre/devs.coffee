import { useRouter } from 'next/router'
import Card from 'components/layout/Card'
import DiscordServer from 'components/DiscordServer'
import discordServers from '../data/discordServers.json'

export default function DiscordServers() {

  const router = useRouter()

  function onBtnClick() {
    router.push("contact")
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

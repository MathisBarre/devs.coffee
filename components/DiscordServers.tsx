import Card from 'components/layout/Card'
import DiscordServer from 'components/DiscordServer'
import { IDiscordServers } from 'interfaces/DiscordServers'

const discordServers = [
  {
    name: 'devs.coffee',
    courses: ['WEB'],
    description: "Ici on se connait tous entre nous ! On discute et on s'entraide sans se prendre la tête !",
    href: 'https://discord.gg/f6BsPK9',
    img: '/images/discord-servers/devscoffee.webp',
    api: 'https://discord.com/api/guilds/766565028312383498/widget.json'
  },
  {
    name: 'Sans pris de tech',
    courses: ['ALL'],
    description: 'Serveur général regroupant toute la communauté OpenClassrooms française.',
    href: 'https://discord.gg/u7dxx3K',
    img: '/images/discord-servers/sansprisedetech.webp',
    api: 'https://discord.com/api/guilds/595235640044552223/widget.json'
  },
  {
    name: 'PrepWeb & Développeur web',
    courses: ['WEB'],
    description: 'Discussions & entraide parcours développeur web, ainsi que des channels de discussion post-formation (emplois, stacks, projets hors formation).',
    href: 'https://discord.gg/DPyyzrT',
    img: '/images/discord-servers/devweb.webp',
    api: 'https://discord.com/api/guilds/651031474966888458/widget.json'
  },
  {
    name: 'DA - Frontend',
    courses: ['FRONT_END'],
    description: 'Discussions, entraide et soutien autour du parcours développeur web / développeur web front-end et de ses projets.',
    href: 'https://discord.gg/SKJVyew',
    img: '/images/discord-servers/da.webp',
    api: 'https://discord.com/api/guilds/569020625776017410/widget.json'
  },
  {
    name: 'training-dev',
    courses: ['ALL'],
    description: "training-dev est un site de cours/tuto/live/exercices dans le domaine du développement web. Le discord est un lieu d'échange pour les débutants comme les professionnels à tout ce qui touche au développement web ou au métiers du développement. Venez y discuter de vos formations, vos projets, vos difficultés ou réussites et partagez vos expériences.",
    href: 'https://discord.gg/DweDNNcJfN',
    img: '/images/discord-servers/trainingdev.webp'
  }
]

export default function DiscordServers() {
  const discordFrontend = discordServers.filter((s) => filterDiscord('FRONT_END', s))
  const discordAll = discordServers.filter((s) => filterDiscord('ALL', s))
  const discordWeb = discordServers.filter((s) => filterDiscord('WEB', s))

  function filterDiscord(tag: string, server: IDiscordServers) {
    return server.courses.includes(tag)
  }

  return (
    <section id="discord">
      <Card
        title="Serveurs discord"
        description="Rejoignez un des serveurs discord communautaires OpenClassroom"
        withContentPadding={false}
      >
        <div className="bg-white  dark:bg-gray-900 overflow-hidden">
          <ul>
            {discordAll.map((props, index) => {
              return <DiscordServer {...props} key={index} />
            })}
          </ul>
        </div>
      </Card>
      <Card
        title="Serveurs discord"
        description="Rejoignez un des serveurs discord communautaires OpenClassroom"
        withContentPadding={false}
      >
        <div className="bg-white  dark:bg-gray-900 overflow-hidden">
          <ul>
            {discordWeb.map((props, index) => {
              return <DiscordServer {...props} key={index} />
            })}
          </ul>
        </div>
      </Card>
      <Card
        title="Serveurs discord"
        description="Rejoignez un des serveurs discord communautaires OpenClassroom"
        withContentPadding={false}
      >
        <div className="bg-white  dark:bg-gray-900 overflow-hidden">
          <ul>
            {discordFrontend.map((props, index) => {
              return <DiscordServer {...props} key={index} />
            })}
          </ul>
        </div>
      </Card>
    </section>
  )
}

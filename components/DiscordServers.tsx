import Card from 'components/layout/Card'
import DiscordServer from 'components/DiscordServer'
import { IDiscordServers } from 'interfaces/DiscordServers'

const discordServers = [
  {
    name: '[Discord] devs.coffee',
    courses: ['WEB'],
    description: "Ici on se connait tous entre nous ! On discute et on s'entraide sans se prendre la tête !",
    href: 'https://discord.gg/f6BsPK9',
    img: '/images/discord-servers/devscoffee.webp',
    api: 'https://discord.com/api/guilds/766565028312383498/widget.json'
  },
  {
    name: '[Discord] Sans pris de tech',
    courses: ['ALL'],
    description: 'Serveur général regroupant toute la communauté OpenClassrooms française.',
    href: 'https://discord.gg/u7dxx3K',
    img: '/images/discord-servers/sansprisedetech.webp',
    api: 'https://discord.com/api/guilds/595235640044552223/widget.json'
  },
  {
    name: '[Discord] PrepWeb & Développeur web',
    courses: ['WEB'],
    description: 'Discussions & entraide parcours développeur web, ainsi que des channels de discussion post-formation (emplois, stacks, projets hors formation).',
    href: 'https://discord.gg/DPyyzrT',
    img: '/images/discord-servers/devweb.webp',
    api: 'https://discord.com/api/guilds/651031474966888458/widget.json'
  },
  {
    name: '[Discord] DA - Javascript React',
    courses: ['WEB'],
    description: 'Discussions, entraide et soutien autour du parcours développeur web / développeur web front-end et de ses projets.',
    href: 'https://discord.gg/SKJVyew',
    img: '/images/discord-servers/da.webp',
    api: 'https://discord.com/api/guilds/569020625776017410/widget.json'
  },
  {
    name: '[Discord] training-dev',
    courses: ['ALL'],
    description: 'Communauté des apprennants de training-dev.fr.',
    href: 'https://discord.gg/DweDNNcJfN',
    img: '/images/discord-servers/trainingdev.webp'
  },
  {
    name: '[Discord] DA - Python',
    courses: ['PYTHON'],
    description: 'Communauté des apprennants du parcours Développeur d\'application Python',
    href: 'http://discord.pythonclassmates.org/',
    img: '/images/discord-servers/python.webp'
  },
  {
    name: '[Discord] Pôle Data',
    courses: ['DATA'],
    description: 'Communauté des apprennants des parcours Data Analyst, Data Scientist, Ingénieurs Machine Learning et IA',
    href: 'https://discord.gg/gesttkTwST',
    img: '/images/discord-servers/poledata.webp'
  },
  {
    name: '[Slack] Product Manager',
    courses: ['PRODUCT_MANAGER'],
    description: 'Communauté des apprennants du parcours Product Manager d\'openclassrooms',
    href: 'https://ocproductmanager.slack.com/join/shared_invite/zt-punihww0-klrAJvjhuBC2TMhjasYuWg',
    img: '/images/discord-servers/productmanager.png'
  },
  {
    name: '[FB] - OpenClassrooms (non Officiel)',
    courses: ['ALL'],
    description: 'Communauté des apprennants du parcours Product Manager d\'openclassrooms',
    href: 'https://www.facebook.com/groups/1562418740556221',
    img: '/images/discord-servers/fb.jpg'
  }
]

export default function DiscordServers() {
  const discordAll = filterDiscord('ALL', discordServers)
  const discordWeb = filterDiscord('WEB', discordServers)
  const discordPython = filterDiscord('PYTHON', discordServers)
  const discordData = filterDiscord('DATA', discordServers)
  const discordProductManager = filterDiscord('PRODUCT_MANAGER', discordServers)

  function filterDiscord(tag: string, server: IDiscordServers[]) {
    return server.filter((s) => s.courses.includes(tag))
  }
  return (
    <section id="discord">
      <Card
        title="Communautés officieuses"
        description="Rejoignez un des Discord, Slack, Facebook officieux de la communauté !"
        withContentPadding={false}
      >
          <h2 className='mt-8 font-semibold dark:text-white'>Général</h2>
          <ul className='mb-8'>
            {discordAll.map((props, index) => {
              return <DiscordServer {...props} key={index} />
            })}
          </ul>

          <h2 className='font-semibold dark:text-white'>Développeur web / Javascript React</h2>
          <ul className='mb-8'>
            {discordWeb.map((props, index) => {
              return <DiscordServer {...props} key={index} />
            })}
          </ul>

          <h2 className='font-semibold dark:text-white'>Métiers de la donnée</h2>
          <ul className='mb-8'>
            {discordData.map((props, index) => {
              return <DiscordServer {...props} key={index} />
            })}
          </ul>

          <h2 className='font-semibold dark:text-white'>Développeur d&apos;application Python</h2>
          <ul className='mb-8'>
            {discordPython.map((props, index) => {
              return <DiscordServer {...props} key={index} />
            })}
          </ul>

          <h2 className='font-semibold dark:text-white'>Product Manager</h2>
          <ul className='mb-8'>
            {discordProductManager.map((props, index) => {
              return <DiscordServer {...props} key={index} />
            })}
          </ul>
      </Card>
    </section>
  )
}

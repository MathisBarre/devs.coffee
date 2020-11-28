import { useState, useEffect } from "react"
import Card from "./layout/Card"

export default function DiscordList() {
  return (
    <section id="discord">
      <Card
        title="Serveurs discord"
        description="Rejoignez un des serveurs discord communautaire OpenClassroom"
        withContentPadding={false}
        button={{
          text:"Ajouter un serveur à la liste",
          onClick: () => {window.location.href = "mailto:mathis.barre@live.fr"}
        }}
      >
        <div className="bg-white shadow overflow-hidden">
          <ul className="divide-y divide-gray-200">
            <DiscordServer
              serverName="Sans pris de tech"
              course="tous les parcours"
              description="Serveur général regroupant toutes la communauté OpenClassrooms française. Si vous devez en rejoindre un, c'est celui là ! Environ 500 membre."
              href="https://discord.gg/u7dxx3K"
              img="https://cdn.discordapp.com/icons/595235640044552223/03b0f458149f0ee64a357186f8b36d4e.webp?size=256"
            />
            <DiscordServer
              serverName="dev.cafe"
              course="parcours développeur web"
              description="Ici on aime parler, partager et aider. Nous aimons la simplicité et nous n'avons par conséquent peu de salons. Environ 100 membres"
              href="https://discord.gg/f6BsPK9"
              img="https://cdn.discordapp.com/icons/766565028312383498/52036386762f324a65a35027d14464a9.webp?size=256"
              api="https://discord.com/api/guilds/766565028312383498/widget.json"
            />
            <DiscordServer
              serverName="PrepWeb & Développeur web"
              course="parcours développeur web"
              description="Discussions & entraide parcours développeur web, ainsi que des channels de discussion post-formation (emplois, stacks, projets hors formation). Environ 250 membres"
              href="https://discord.gg/DPyyzrT"
              img="https://cdn.discordapp.com/icons/651031474966888458/1b2efcc2293cddb82b254022f6350d90.webp?size=256"
            />
            <DiscordServer
              serverName="DA - Frontend"
              course="parcours développeur front-end / web"
              description="Discussions, entraide et soutient autour du parcours développeur web / développeur web front-end et de ses projets. Environ 150 membres"
              href="https://discord.gg/SKJVyew"
              img="https://cdn.discordapp.com/icons/569020625776017410/12d51a5f472cbf0e5b17371469975f3e.webp?size=256"
            />
            <DiscordServer
              serverName="OpenClassrooms web dev 2020/2021"
              course="parcours développeur web"
              description="Discussions, entraide et soutient autour du parcours développeur web de la rentrée 2020/2021. Environ 150 membres"
              href="https://discord.gg/f7eEDFF"
              img="https://cdn.discordapp.com/icons/694531835065270392/e2a52f66656c99382be4038aa04d8f04.webp?size=256"
            />
            <DiscordServer
              serverName="Pair Programming Dev"
              course="parcours de développements"
              description="Vous souhaitez faire du pair-programming ? Vous trouverez peut-être votre bonheur ici ! Environ 50 membres"
              href="https://discord.gg/v7KDuNXv"
              img="https://cdn.discordapp.com/icons/775791415275552768/1eb2534468e68e633ea2886035a5bb78.webp?size=256"
            />
          </ul>
        </div>
      </Card>
    </section>
  )
}

function DiscordServer({course, serverName, description, href, img, api}) {
  const [discordData, setDiscordData] = useState(false)

  useEffect(() => {
    if (api) {
      fetch(api)
        .then(body => body.json())
        .then(apiData => {setDiscordData(apiData)})
    }    
  }, [])

  return (
    <li>
      <a href={href} className="block hover:bg-gray-50">
        <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
          <div className="w-full">
            <div className="flex items-center">
              <img 
                className="inline-block h-14 w-14 rounded-full mr-6"
                src={img}
                alt=""
              />
              <div className="min-w-0 flex-1 flex flex-col items-start">
                  <div className="flex text-sm font-medium truncate">
                    <p className="font-semibold text-indigo-600">{serverName} </p>
                    <p className="ml-1 font-normal text-gray-500">
                      ({course})
                    </p>
                  </div>
                  <div className="mt-2 flex">
                    <div className="flex items-center text-sm text-gray-500">
                      <p>
                        {description}
                      </p>
                    </div>
                  </div>
                  { 
                    api && (
                      (discordData)
                      ? 
                      <div className="bg-indigo-500 min-h-9 flex-wrap items-center pl-3 pr-2 text-sm text-white rounded mt-2 hidden md:flex">
                        <p className="whitespace-nowrap mr-2">
                          <strong>{discordData.presence_count} </strong>
                          {/* <div className="w-1" /> */}
                          {(discordData.presence_count > 1) ? "membres actuellements connectés" : "membre actuellement connecté"}
                        </p>
                        <div className="flex items-center -space-x-1 relative z-0 overflow-hidden h-full p-1">
                          {discordData.members.map((member, index) => {
                            return (
                              <img
                              key={index}
                              className="relative z-30 inline-block h-5 w-5 rounded-full ring-2 ring-white"
                              src={member.avatar_url}
                              alt=""
                              />
                            )
                          })}
                        </div>
                      </div> 
                      :
                      <div className="h-9 w-96 mt-2 bg-indigo-500 rounded animate-pulse hidden md:block" />
                    )
                  }
              </div>
            </div>
          </div>
          <div className="ml-5 flex-shrink-0">
            {/* Heroicon name: chevron-right */}
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </a>
    </li>
  )
}
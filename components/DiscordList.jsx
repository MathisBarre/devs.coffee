import { useState, useEffect } from "react";
import Image from "next/image"
import Card from "./layout/Card";

export default function DiscordList() {
  return (
    <section id="discord">
      <Card
        title="Serveurs discord"
        description="Rejoignez un des serveurs discord communautaires OpenClassroom"
        withContentPadding={false}
        button={{
          text: "Ajouter un serveur à la liste",
          onClick: () => {
            window.location.href = "mailto:mathis.barre@live.fr";
          },
        }}
      >
        <div className="bg-white overflow-hidden">
          <ul>
            <DiscordServer
              serverName="Sans pris de tech"
              course="tous les parcours"
              description="Serveur général regroupant toute la communauté OpenClassrooms française. Si vous devez en rejoindre un, c'est celui là !"
              href="https://discord.gg/u7dxx3K"
              img="https://cdn.discordapp.com/icons/595235640044552223/03b0f458149f0ee64a357186f8b36d4e.webp?size=256"
              api="https://discord.com/api/guilds/595235640044552223/widget.json"
            />
            <DiscordServer
              serverName="PrepWeb & Développeur web"
              course="parcours développeur web"
              description="Discussions & entraide parcours développeur web, ainsi que des channels de discussion post-formation (emplois, stacks, projets hors formation)."
              href="https://discord.gg/DPyyzrT"
              img="https://cdn.discordapp.com/icons/651031474966888458/1b2efcc2293cddb82b254022f6350d90.webp?size=256"
              api="https://discord.com/api/guilds/651031474966888458/widget.json"
            />
            <DiscordServer
              serverName="DA - Frontend"
              course="parcours développeur front-end / web"
              description="Discussions, entraide et soutien autour du parcours développeur web / développeur web front-end et de ses projets."
              href="https://discord.gg/SKJVyew"
              img="https://cdn.discordapp.com/icons/569020625776017410/12d51a5f472cbf0e5b17371469975f3e.webp?size=256"
              api="https://discord.com/api/guilds/569020625776017410/widget.json"
            />
            <DiscordServer
              serverName="devs.coffee"
              course="parcours développeur web"
              description="Ici on aime parler, partager et aider. Nous aimons la simplicité et nous n'avons par conséquent que peu de salons."
              href="https://discord.gg/f6BsPK9"
              img="https://cdn.discordapp.com/icons/766565028312383498/52036386762f324a65a35027d14464a9.webp?size=256"
              api="https://discord.com/api/guilds/766565028312383498/widget.json"
            />
            <DiscordServer
              serverName="Pair Programming Dev"
              course="parcours de développements"
              description="Vous souhaitez faire du pair-programming ? Vous trouverez peut-être votre bonheur ici ! Environ 50 membres"
              href="https://discord.gg/v7KDuNXv"
              img="https://cdn.discordapp.com/icons/775791415275552768/1eb2534468e68e633ea2886035a5bb78.webp?size=256"
              api="https://discord.com/api/guilds/775791415275552768/widget.json"
            />
            {/* <DiscordServer
              serverName="OpenClassrooms web dev 2020/2021"
              course="parcours développeur web"
              description="Discussions, entraide et soutien autour du parcours développeur web de la rentrée 2020/2021. Environ 150 membres"
              href="https://discord.gg/f7eEDFF"
              img="https://cdn.discordapp.com/icons/694531835065270392/e2a52f66656c99382be4038aa04d8f04.webp?size=256"
            /> */}
          </ul>
        </div>
      </Card>
    </section>
  );
}

function DiscordServer({ course, serverName, description, href, img, api }) {
  const [discordData, setDiscordData] = useState(false);

  useEffect(() => {
    if (api) {
      fetch(api)
        .then((body) => body.json())
        .then((apiData) => {
          setDiscordData(apiData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <li>
      <a href={href} className="discordServer block hover:bg-gray-50 my-4 rounded-md border-gray-200 border">
        <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
          <div className="flex flex-col justify-start items-start">
            <div className="flex items-center">
              <div
                className="inline-block h-14 w-14 mr-6"
              >
                <Image
                  className="rounded-full"
                  src={img}
                  alt=""
                  layout="fixed"
                  height="56"
                  width="56"
                  sizes="56"
                  quality="100"
                  priority={true}
                  loading="eager"
                />
              </div>
              <div className="min-w-0 flex-1 flex flex-col items-start">
                <div className="text-sm font-medium">
                  <h3 className="inline font-semibold text-indigo-600">{serverName}</h3>
                  <p className="inline ml-1 font-normal text-gray-500">({course})</p>
                </div>
                <div className="mt-2 flex">
                  <div className="flex items-center text-sm text-gray-500">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-5 flex-shrink-0">
            {/* Heroicon name: chevron-right */}
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {api &&
          (discordData.members ? (
            <div className="discordMembers bg-indigo-600 min-h-9 flex items-center pl-3 pr-2 text-sm text-white rounded-b-md">
              <p className="whitespace-nowrap mr-2 inline">
                <strong>{discordData.presence_count} </strong>
                {/* <div className="w-1" /> */}
                {discordData.presence_count > 1
                  ? "membres actuellements connectés"
                  : "membre actuellement connecté"}
              </p>
              <div className="hidden sm:inline-flex items-center -space-x-1 relative z-0 overflow-hidden h-full p-1">
                {discordData.members.map((member, index) => {
                  if (index < 60) {
                    return (
                      <div
                        className="relative z-30 inline-block h-5 w-5 min-w-5 rounded-full ring-2 ring-white"
                        key={index}
                      >
                        <Image
                          className="rounded-full"
                          src={member.avatar_url}
                          alt=""
                          layout="fixed"
                          height="20"
                          width="20"
                          sizes="20px"
                          quality="100"
                          priority={false}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ) : (
            <div className="h-9 w-full bg-indigo-500 animate-pulse hidden md:block rounded-b-md" />
          ))}
      </a>
    </li>
  );
}

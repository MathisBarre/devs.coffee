import { useState } from "react"
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fr";

dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

import Card from "./layout/Card";

export default function Events() {
  return (
    <section id="events">
      <Card
        title="Événements communautaires"
        description="Découvrez les prochains événements en présentiel ou en ligne organisés par la communauté !"
        withContentPadding={false}
        button={{
          text: "Ajouter un événement",
          onClick: () => {window.location.href = "mailto:mathis.barre@live.fr"}
        }}
      >
        <div className="bg-white dark:bg-gray-900 overflow-hidden">
          <ul>
            {/* <Event
              date="2020-11-10T17:30"
              type="live"
              description="Introduction à Javascript : DOM, variable & fonction. Niveau débutant "
              link={{
                href: "https://discord.gg/f6BsPK9"
              }}
            />
            <Event
              date="2020-11-19T17:30"
              type="live"
              description="Introduction à Javascript : DOM, variable, fonction, ajax, fetch & callback. Niveau débutant "
              link={{
                href: "https://discord.gg/f6BsPK9"
              }}
            /> */}
            {/* <Event
              date="2020-11-30T17:30"
              type="LIVE"
              description="Apprentissage Javascript : La programmation orienté objet"
              link={{
                href: "https://twitch.tv/mathisbarre_"
              }}
            /> */}
            {/* <Event
              date="2020-12-02T18:00"
              type="LIVE"
              description="Apprentissage Javascript avec Aurélien Vaast : les promises"
              link={{
                href: "https://www.twitch.tv/trainingdev"
              }}
            />
            <Event
              date="2020-12-03T17:00"
              type="LIVE"
              description="Intégration en direct avec tailwindcss par Mathis Barré"
              link={{
                href: "https://www.twitch.tv/mathisbarre_"
              }}
            /> */}
            <Event
              date="2020-12-11T18:00"
              type="LIVE"
              description="Code review de vos projets avec mathis barré !"
              link={{
                href: "https://www.twitch.tv/mathisbarre_"
              }}
            />
          </ul>
        </div>
      </Card>
    </section>
  );
}

function Event({ date, description, link, type }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  const formattedDate = dayjs(date).locale("fr").format("DD/MM/YY à HH:mm")
  const dateFromNow = capitalizeFirstLetter(dayjs(date).locale("fr").from(dayjs()))
  const [isEventFinished] = useState(dayjs().isAfter(date))
  console.log(`Is event finished ? : ${isEventFinished}`)

  return (
    <li
      className={`
        ${isEventFinished ? "line-through" : ""}
        my-4 border border-gray-200 dark:border-gray-1000 rounded-md px-4 hover:bg-gray-50 dark:hover:bg-gray-1000 dark:text-white
      `}
    >
      <a
        href={link.href}
        target="_blank" rel="noopener noreferrer"
      >
        <div className="py-4 flex items-center">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="text-md font-medium text-indigo-600 dark:text-indigo-500">
                <p className="uppercase inline">
                  [{type}]
                </p>
                <h3 className="ml-1 font-normal text-gray-500 dark:text-gray-300 inline">
                  {description}
                </h3>
              </div>
              <div className="mt-2 flex">
                <div className="flex items-center text-md text-gray-500 dark:text-gray-300">
                  {/* Heroicon name: calendar */}
                  <svg
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    <time dateTime={date}>{dateFromNow} - {formattedDate}</time>
                  </p>
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
      </a>
    </li>
  );
}

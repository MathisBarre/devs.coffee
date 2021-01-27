import { useState, useEffect } from 'react'
import Image from 'next/image'
import { IdiscordGuildWidgetApi } from 'interfaces/DiscordGuildWidgetApiInterface'

export default function DiscordServer({
  course,
  name,
  description,
  href,
  img,
  api: apiUrl,
}) {

  const [discordData, setDiscordData] = useState<any>({})

  useEffect(() => {
    if (apiUrl) {
      fetch(apiUrl)
        .then((body) => body.json())
        .then((apiData) => {
          setDiscordData(apiData)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="discordServer block  my-4 hover:bg-gray-50 dark:bg-gray-1000 dark:hover:bg-gray-1100 rounded-md border-gray-200 dark:border-gray-1100 border"
      >
        <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
          <div className="flex flex-col justify-start items-start">
            <div className="flex items-center">
              <div className="inline-block h-14 w-14 mr-6">
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
                <div className="text-md font-medium">
                  <h3 className="inline font-semibold text-indigo-600 dark:text-indigo-500">
                    {name}
                  </h3>
                  <p className="inline ml-1 font-normaltext-gray-500 dark:text-gray-300">
                    ({course})
                  </p>
                </div>
                <div className="mt-2 flex">
                  <div className="flex items-center text-md text-gray-500 dark:text-gray-300">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-5 flex-shrink-0">
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
        {apiUrl &&
          (discordData.members ? (
            <div className="discordMembers bg-indigo-600 dark:bg-indigo-800 min-h-9 flex items-center pl-3 pr-2 text-sm text-white rounded-b-md">
              <p className="whitespace-nowrap mr-2 inline">
                <strong>{discordData.presence_count} </strong>
                {discordData.presence_count > 1
                  ? 'membres actuellements connectés'
                  : 'membre actuellement connecté'}
              </p>
              <div className="hidden sm:inline-flex items-center -space-x-1 relative z-0 overflow-hidden h-full p-1">
                {discordData.members.map((member, index) => {
                  if (index < 60) {
                    return (
                      <div
                        className="relative z-30 inline-block h-5 w-5 min-w-5 rounded-full ring-2 ring-white dark:ring-black"
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
                    )
                  }
                })}
              </div>
            </div>
          ) : (
            <div className="h-9 w-full bg-indigo-500 dark:bg-indigo-700 animate-pulse hidden md:block rounded-b-md" />
          ))}
      </a>
    </li>
  )
}

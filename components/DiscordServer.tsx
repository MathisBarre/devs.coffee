import { useState, useEffect } from 'react'
import Image from 'next/image'
import { IdiscordGuildWidgetApi } from 'interfaces/DiscordGuildWidgetApiInterface'

interface IdiscordServerProps {
  course: string
  name: string
  description: string
  href: string
  img: string
  api?: string
}

export default function DiscordServer({
  course,
  name,
  description,
  href,
  img,
  api: apiUrl
}: IdiscordServerProps) {
  const [discordData, setDiscordData] = useState<IdiscordGuildWidgetApi>()

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
        className="block my-4 border border-gray-200 rounded-md discordServer hover:bg-gray-50 dark:bg-gray-1000 dark:hover:bg-gray-1100 dark:border-gray-1100"
      >
        <div className="flex items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex flex-col items-start justify-start">
            <div className="flex items-center">
              <div className="inline-block mr-6 h-14 w-14">
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
              <div className="flex flex-col items-start flex-1 min-w-0">
                <div className="font-medium text-md">
                  <h3 className="inline font-semibold text-indigo-600 dark:text-indigo-500">
                    {name}
                  </h3>
                  <p className="inline ml-1 font-normaltext-gray-500 dark:text-gray-300">
                    - {course}
                  </p>
                </div>
                <div className="flex mt-2">
                  <div className="flex items-center text-gray-500 text-md dark:text-gray-300">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 ml-5">
            <svg
              className="w-5 h-5 text-gray-400"
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
        {/* {apiUrl &&
          discordData &&
          // eslint-disable-next-line multiline-ternary
          (discordData.members ? (
            <div className="flex items-center pl-3 pr-2 text-sm text-white bg-indigo-600 discordMembers dark:bg-indigo-800 min-h-9 rounded-b-md">
              <p className="inline mr-2 whitespace-nowrap">
                <strong>{discordData.presence_count} </strong>
                {discordData.presence_count > 1
                  ? 'membres actuellements connectés'
                  : 'membre actuellement connecté'}
              </p>
              <div className="relative z-0 items-center hidden h-full p-1 -space-x-1 overflow-hidden sm:inline-flex">
                {discordData.members.map((member: any, index) => {
                  if (index < 60) {
                    return (
                      <div
                        className="relative z-30 inline-block w-5 h-5 rounded-full min-w-5 ring-2 ring-white dark:ring-black"
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
                  return ''
                })}
              </div>
            </div>
          ) : (
            <div className="hidden w-full bg-indigo-500 h-9 dark:bg-indigo-700 animate-pulse md:block rounded-b-md" />
            // eslint-disable-next-line indent
          ))} */}
      </a>
    </li>
  )
}

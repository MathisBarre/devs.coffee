import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'
import Ievent from 'interfaces/Event'

dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)

export default function Event({ date, description, link, type }: Ievent) {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const formattedDate = dayjs(date).locale('fr').format('DD/MM/YY à HH:mm')
  const dateFromNow = capitalizeFirstLetter(dayjs(date).locale('fr').from(dayjs()))

  return (
    <li
      className={`my-4 border border-gray-200 dark:border-gray-1000 rounded-md px-4 dark:bg-gray-1000 
      hover:bg-gray-50 dark:hover:bg-gray-1100 dark:text-white`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="py-4 flex items-center">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="text-md font-medium text-indigo-600 dark:text-indigo-500">
                <p className="uppercase inline">[{type}]</p>
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
                    <time dateTime={date}>
                      {dateFromNow} - {formattedDate}
                    </time>
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
  )
}

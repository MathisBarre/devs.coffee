import { ReactNode } from 'react'

export default function Card({
  title,
  description,
  button,
  withContentPadding = true,
  children
}: {
  title: string
  description: string
  button?: {
    text: string
    onClick: any
  }
  withContentPadding: boolean
  children: ReactNode
}) {
  return (
    <div className="bg-white dark:bg-gray-900 my-12">
      <div className="bg-white dark:bg-gray-900 pt-5 pb-2">
        <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            {description && (
              <p className="mt-1 text-smtext-gray-500 text-gray-500 dark:text-gray-300">
                {description}
              </p>
            )}
          </div>
          <div className="ml-4 mt-4 flex-shrink-0">
            {button && (
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 dark:bg-indigo-800 hover:bg-indigo-700 hover:dark:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-700"
                onClick={button.onClick}
              >
                {button.text}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={`${withContentPadding ? 'px-4 py-5 sm:p-6' : ''} dark:bg-gray-900`}>
        {children}
      </div>
    </div>
  )
}

import { MailIcon, GlobeAltIcon } from '@heroicons/react/outline'

export default function Contact() {
  return (
    <div className="relative bg-white dark:bg-gray-900 h-full grow flex flex-col">
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5 grow">
        <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">Contact</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-400">
              Pour toute demande d&apos;aide, de mise à jour de contenu, d&apos;idées ou juste de gentils mots, n&apos;hésitez pas à me contacter !
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-6">
                <dt className="sr-only">Site internet</dt>
                <a href="https://mathisbarre.com" rel='noopener noreferrer' target="_blank">
                  <dd className="flex">
                      <GlobeAltIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">mathisbarre.com</span>
                  </dd>
                </a>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Adresse e-mail</dt>
                <a href="mailto:contact@mathisbarre.com">
                  <dd className="flex">
                    <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">contact@mathisbarre.com</span>
                  </dd>
                </a>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Adresse e-mail"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

import { MailIcon, GlobeAltIcon } from '@heroicons/react/outline'
import Seo from 'components/utils/seo'
import CommonLayout from 'layout/common'

export default function Contact() {
  return (
    <CommonLayout>
      <div className="bg-white dark:bg-gray-900 h-full grow flex flex-col">
        <Seo
          title="devs.coffee - Contact"
          description="Contacter Mathis Barré, le créateur de devs.coffee."
          pageSuffix="/contact"
        />
        <div className="my-wrapper mx-auto my-32">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
            Contact
          </h2>
          <p className="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-400 md:max-w-[70%]">
            Pour toute demande d&apos;aide, de mise à jour de contenu, d&apos;idées ou juste de
            gentils mots, n&apos;hésitez pas à me contacter !
          </p>
          <dl className="mt-8 text-base text-gray-500">
            <div className="mt-6">
              <dt className="sr-only">Site internet</dt>
              <a href="https://mathisbarre.com" rel="noopener noreferrer" target="_blank">
                <dd className="flex">
                  <GlobeAltIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
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
    </CommonLayout>
  )
}

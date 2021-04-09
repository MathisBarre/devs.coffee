import Link from 'next/link'

export default function PublicationCard({
  image,
  type,
  title,
  description,
  author,
  href,
  fake,
  date
}: {
  image?: string
  type?: string
  title?: string
  description?: string
  author?: {
    name: string
    profilePictureUrl: string
  }
  href?: string
  fake?: boolean
  date?: string
}) {
  if (!fake) {
    return (
      <Link href={href ?? ''} >
        <a className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={image} alt="" />
          </div>
          <div className="flex-1 bg-white dark:bg-gray-1000 p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-500">
                <span className="hover:underline">
                  {type}
                </span>
              </p>
              <div className="block mt-2">
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</p>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{description}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <div>
                  <span className="sr-only">{author?.name}</span>
                  <img className="h-10 w-10 rounded-full" src={author?.profilePictureUrl} alt="" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  <span className="hover:underline">
                    {author?.name}
                  </span>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime="2020-03-16">{date}</time>
                  <span aria-hidden="true">·</span>
                  <span>5 minutes de lecture</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    )
  } else {
    return (
      <div className="bg-gray-100 dark:bg-gray-1000 rounded flex justify-center items-center cursor-default min-h-[8rem]" >
        <h1 className="text-gray-500 font-bold">Du nouveau contenu, bientôt !</h1>
      </div>
    )
  }
}

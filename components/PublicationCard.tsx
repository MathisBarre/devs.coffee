export default function PublicationCard({
  image,
  type,
  title,
  description,
  author
}: {
  image: string
  type: string
  title: string
  description: string
  author: {
    name: string
    profilePictureUrl: string
  }
}) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={image} alt="" />
      </div>
      <div className="flex-1 bg-white dark:bg-gray-1000 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-500">
            <a href="#" className="hover:underline">
              Article
            </a>
          </p>
          <a href="#" className="block mt-2">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</p>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only">{author.name}</span>
              <img className="h-10 w-10 rounded-full" src={author.profilePictureUrl} alt="" />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              <a href="#" className="hover:underline">
                Roel Aufderehar
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
              <time dateTime="2020-03-16">Mar 16, 2020</time>
              <span aria-hidden="true">·</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

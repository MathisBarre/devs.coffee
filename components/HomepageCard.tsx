import Link from 'next/link'

export default function HomepageCard({
  href,
  title,
  description,
  button,
  bgColor,
  hoverColor,
  watermarkImageUrl
}: {
  href: string
  title: string
  description: string
  button: {
    text: {
      content: string
      color: string
    }
  }
  bgColor: string
  hoverColor: string
  watermarkImageUrl: string
}) {
  const bgColorClassName = `bg-${bgColor}`
  const hoverColorClassName = `hover:bg-${hoverColor}`
  const buttonTextColorClassName = `text-${button.text.color}`

  return (
    <Link href={href}>
      <a>
        <section
          className={`text-white  rounded p-6 cursor-pointer relative overflow-hidden duration-75 ${bgColorClassName} ${hoverColorClassName}`}
        >
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
          <button
            className={`inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm rounded-md bg-white ${buttonTextColorClassName} font-extrabold hover:dark:bg-indigo-900 mt-2`}
          >
            {button.text.content}
          </button>
          <img
            className="absolute h-12 bottom-6 right-8 hidden sm:block"
            src={watermarkImageUrl}
            alt=""
          />
        </section>
      </a>
    </Link>
  )
}

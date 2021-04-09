export default function Footer({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <footer className="text-center py-6 font-semibold bg-gray-100  dark:bg-gray-1000 text-md">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4">
        <p className="text-sm mb-2 lg:mb-0 dark:text-white">
          <a className="underline" href="https://mathisbarre.com">
            Créé avec ❤️ par Mathis Barré
          </a>
        </p>
        <div>
          <a href="https://fr.reactjs.org/">
            {' '}
            <img
              className="footerImg inline h-7 mx-3 my-2"
              src="/images/react.png"
              alt="react.js"
            />
          </a>
          <a href="https://nextjs.org">
            {' '}
            <img
              className="footerImg inline h-8 mx-3 my-2"
              src={`/images/nextjs${theme === 'dark' ? '-white' : ''}.svg`}
              alt="next.js"
            />
          </a>
          <a href="https://tailwindcss.com/">
            <img
              className="footerImg inline h-4 mx-3 my-2"
              src={`/images/tailwindcss${theme === 'dark' ? '-white' : ''}.svg`}
              alt="tailwind.css"
            />
          </a>
          <a href="https://tailwindui.com">
            {' '}
            <img
              className="footerImg inline h-4 mx-3 my-2"
              src={`/images/tailwindui${theme === 'dark' ? '-white' : ''}.svg`}
              alt="tailwind ui"
            />
          </a>
          <a href="https://vercel.com">
            {' '}
            <img
              className="footerImg inline h-4 mx-3 my-2"
              src={`/images/vercel${theme === 'dark' ? '-white' : ''}.svg`}
              alt="vercel"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

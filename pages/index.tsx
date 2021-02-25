import Link from 'next/link'

export default function Index() {
  return (
    <div className="my-wrapper">
      <div className="grid grid-cols-2 gap-4 mt-8">
        <Link href="communaute-openclassrooms">
          <a>
            <section className="text-white  rounded p-6 cursor-pointer relative overflow-hidden duration-75 bg-oc-500 hover:bg-oc-600">
              <h2 className="text-xl font-bold">Rejoignez la communauté Openclassrooms</h2>
              <p>Événements - Discords - Carte - Initiatives</p>
              <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm rounded-md bg-white text-oc-600 font-extrabold hover:dark:bg-indigo-900 mt-2">
                Rejoindre
              </button>
              <img
                className="absolute h-12 bottom-6 right-8"
                src="/images/logo_openclassrooms.svg"
                alt=""
              />
            </section>
          </a>
        </Link>
        <Link href="ressources">
          <a>
            <section className="text-white  rounded p-6 cursor-pointer relative overflow-hidden duration-75 bg-mypurple-500 hover:bg-mypurple-600">
              <h2 className="text-xl font-bold">
                Toutes les ressources pour votre apprentissage !
              </h2>
              <p>HTML - CSS - Javascript - Node.js - MongoDB - MySQL</p>
              <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm rounded-md bg-white text-mypurple-500 font-extrabold hover:dark:bg-indigo-900 mt-2">
                Ça m&apos;intéresse !
              </button>
              {/* <img
                src="/images/logo_openclassrooms.svg"
                alt=""
              /> */}

              <svg
                className="absolute h-12 bottom-6 right-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </section>
          </a>
        </Link>
      </div>
    </div>
  )
}

import { useState } from "react"

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              /> */}
              <h1 className="text-white font-bold text-2xl">dev.cafe</h1>
            </div>
            <nav className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <HeaderLink isDesktop={true} text="Événements" href="#events"/>
                <HeaderLink isDesktop={true} text="Discord" href="#discord"/>
                <HeaderLink isDesktop={true} text="Carte" href="#" disabled />
                <HeaderLink isDesktop={true} text="Ressources" href="#" disabled />
                <HeaderLink isDesktop={true} text="Questions fréquentes" href="#" disabled />
                {/* <HeaderLink isDesktop={true} text="Carte" href="#map"/> */}
              </div>
            </nav>
          </div>
          <div className="-mr-2 flex sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => {setIsMenuOpen(!isMenuOpen)}}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-insest focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/*
                Heroicon name: menu

                Menu open: "hidden", Menu closed: "block"
              */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} block h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              {/*
                Heroicon name: x

                Menu open: "block", Menu closed: "hidden"
              */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/*
        Mobile menu, toggle classes based on menu state.

        Menu open: "block", Menu closed: "hidden"
      */}
      <nav className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <HeaderLink text="Événements" href="#events" active/>
          <HeaderLink text="Discord" href="#discord"/>
          <HeaderLink text="Carte" href="#" disabled />
          <HeaderLink text="Ressources" href="#" disabled />
          <HeaderLink text="Questions fréquentes" href="#" disabled />
        </div>
      </nav>
    </header>
  );
}

function HeaderLink({text, href, active, isDesktop, disabled}) {
  return (
    <a
      href={href}
      className={`
        ${isDesktop ? "" : "block"}
        ${disabled ? "cursor-not-allowed text-gray-500" : "text-gray-300 hover:text-white hover:bg-gray-700"}
        px-3 py-2 rounded-md text-sm font-semibold
      `}
    >
      {text}
    </a>
  )
}
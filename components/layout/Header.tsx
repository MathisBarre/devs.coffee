import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import Link from 'next/link'
import HeaderLink from 'components/layout/HeaderLink'

interface props {
  toggleTheme: ChangeEventHandler<HTMLInputElement>
  theme: 'light' | 'dark'
}

export default function Header({ toggleTheme, theme }: props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow dark:bg-gray-1000 fixed w-full inset-x-0 z-50 top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center h-full">
            <Link href="/">
              <a className="flex-shrink-0 flex items-center bg-gray-800 h-full px-6">
                <img
                  className="h-6 w-auto mr-3 mt-1"
                  src="/images/logo.svg"
                  alt="devs.coffee logo"
                />
                <h1 className="text-white font-bold text-2xl">devs.coffee</h1>
              </a>
            </Link>
            <nav className="hidden md:block sm:ml-6">
              <div className="flex space-x-4">
                <HeaderLink
                  isDesktop={true}
                  text="OpenClassrooms"
                  href="/communaute-openclassrooms"
                />
                <HeaderLink isDesktop={true} text="Ressources" href="/ressources" />
                <HeaderLink isDesktop={true} text="Contact" href="/contact" />
              </div>
            </nav>
          </div>
          <div>
            <label id="switch" className="switch">
              <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === 'light'}
                id="slider"
              />
              <span className="slider round" />
            </label>
          </div>
          <div className="-mr-2 flex md:hidden">
            <BtnToggleMobileMenu
              toggleMobileMenu={() => {
                setIsMenuOpen(!isMenuOpen)
              }}
              isMenuOpen={isMenuOpen}
            />
          </div>
        </div>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} />
    </header>
  )
}

function BtnToggleMobileMenu({
  toggleMobileMenu,
  isMenuOpen
}: {
  toggleMobileMenu: MouseEventHandler
  isMenuOpen: boolean
}) {
  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-1100 focus:outline-none focus:ring-2 focus:ring-insest focus:ring-white"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {/* Icon when menu is closed. */}
        <img
          src="/images/icons/menu.svg"
          alt=""
          className={`${isMenuOpen ? 'hidden' : 'block'} block h-6 w-6`}
        />
        {/* Icon when menu is open. */}
        <img
          src="/images/icons/x.svg"
          alt=""
          className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
        />
      </button>
    </>
  )
}

function MobileMenu({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        <HeaderLink isDesktop={false} text="OpenClassrooms" href="/communaute-openclassrooms" />
        <HeaderLink isDesktop={false} text="Ressources complémentaires" href="/ressources" />
        <HeaderLink isDesktop={false} text="Contact" href="/contact" />
      </div>
    </nav>
  )
}

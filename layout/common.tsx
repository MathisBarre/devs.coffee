import Footer from 'components/layout/Footer'
import Header from 'components/layout/Header'
import { ReactChild } from 'react'

interface CommonLayoutProps {
  children: ReactChild,

}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <>
      <Header/>
      <div className="grow pt-16 flex flex-col">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default CommonLayout

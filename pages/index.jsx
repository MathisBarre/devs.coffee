import { useEffect } from "react"
import dynamic from "next/dynamic"

import DiscordList from "components/DiscordList.jsx"
import Events from "components/Events.jsx"
import Ressources from "components/Ressources.jsx"


export default function Index() {

  // let StudentMap = dynamic(
  //   () => import('components/StudentMap.jsx'),
  //   { ssr: false }
  // )

  return (
    <div className="mx-auto px-2 md:px-4 max-w-7xl">
      <Events/>
      <DiscordList/>
      <Ressources/>
      {/* <StudentMap/> */}
    </div>
  );
}

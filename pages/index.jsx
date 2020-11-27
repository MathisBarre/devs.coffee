import { useEffect } from "react"
import dynamic from "next/dynamic"

import Concept from "../components/Concept.jsx"
import DiscordList from "../components/DiscordList.jsx"
import Events from "../components/Events.jsx"

import MDX from "../content/index.mdx";

export default function Index() {

  let StudentMap = dynamic(
    () => import('../components/StudentMap.jsx'),
    { ssr: false }
  )

  return (
    <div className="mx-auto px-4 max-w-7xl">
      {/* <Concept/> */}
      <Events/>
      <DiscordList/>
      {/* <StudentMap/> */}
      {/* <MDX /> */}
    </div>
  );
}

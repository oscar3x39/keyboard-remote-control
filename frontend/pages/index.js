import React from "react"

import Title from '../components/title'
import Keyboard from '../components/keyboard'
import Navigator from "../components/navigation"

export default function Home() {
  return (
    <>
      <Title title={`REMOTE CONTROL`}></Title>
      <Keyboard></Keyboard>
      <Navigator></Navigator>
    </>
  )
}
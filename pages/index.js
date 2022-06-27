import React from "react"
import {useRouter} from 'next/router'

import Title from './title'
import Sound from './sounds'
import Channels from './channels'
import Search from './search'
import Keyboard from './keyboard'
// import QRcode from './qrcode'

export default function Home() {

  const router = useRouter()

  return (
    <>
      <Title></Title>
      <Search></Search>
      <Channels></Channels>
      <Sound></Sound>
      {/* <QRcode url="{ router.pathname }"></QRcode> */}
      <Keyboard></Keyboard>
    </>
  )
}
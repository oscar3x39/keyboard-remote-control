import React from "react"
import {useRouter} from 'next/router'

import Title from './title'
import Browser from './browser'
import Search from './search'
import Keyboard from './keyboard'
import QRcode from './qrcode'

export default function Home() {

  const router = useRouter()

  return (
    <>
      <QRcode url={`${router.pathname}`}></QRcode>
      <Title></Title>
      <Search></Search>
      <Browser></Browser>
      <Keyboard></Keyboard>
    </>
  )
}
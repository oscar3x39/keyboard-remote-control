import React, { useState } from "react"
import { has } from '../utils'

import Title from '../components/title'
import QRcode from '../components/qrcode'
import Navigator from "../components/navigation"

export default function Qr({url}) {

  const [data, setData] = useState(null)
  React.useEffect(() => {
    setData({ url: window.location.origin })
  }, [])

  return (
    <>
      <Title title={"QRCODE"}></Title>
      <QRcode url={`${ has(data, 'url') ? data['url'] : ""}`}></QRcode>
      <div className="flex">
        <Navigator></Navigator>
      </div>
    </>
  )
}
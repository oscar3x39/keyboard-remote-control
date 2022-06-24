import React from 'react';
import Keyboard from './keyboard'
import QRcode from './qrcode'

export default function Home({url}) {
  return (
    <>
      <QRcode url={ window.location.href }></QRcode>
      <Keyboard></Keyboard>
    </>
  )
}
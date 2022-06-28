import React from 'react';
import { useQRCode } from 'next-qrcode';

export default function qrcode({url}) {

    const { Canvas } = useQRCode();

    if (!url) {
      return (
        <>
          <h1>Loading...</h1>
        </>
      )
    }

    return (
      <div className='flex top100'>
        <Canvas
            text={url}
            options={{
                type: 'image/jpeg',
                quality: 0.3,
                level: 'M',
                margin: 3,
                scale: 4,
                width: 350,
                color: {
                    dark: '#000',
                    light: '#fff',
                },
            }}
        />
      </div>
    )
}
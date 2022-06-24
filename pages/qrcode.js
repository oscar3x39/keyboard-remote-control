import React from 'react';
import { useQRCode } from 'next-qrcode';

export default function qrcode({url}) {

    const { Canvas } = useQRCode();
    return (
        <Canvas
            text={url}
            options={{
                type: 'image/jpeg',
                quality: 0.3,
                level: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                    dark: '#000',
                    light: '#fff',
                },
            }}
        />
    )
}
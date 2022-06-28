
import Link from 'next/link'

export default function navigator() {

  return (
    <>
      <div className="navigation">
        <div>
          <Link href="/qr">
            <img className="invert" src="/images/scan.png" alt="" />
          </Link>
        </div>
        <div>
          <Link href="/">
            <img className="invert" src="/images/remote-control.png" alt="" />
          </Link>
        </div>
        <div>
          <Link href="/search">
          <img className="invert" src="/images/internet.png" alt="" />
          </Link>
        </div>
      </div>
    </>
  )
}
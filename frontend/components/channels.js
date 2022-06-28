import { api } from '../utils'

export default function Channels() {
    return (
        <>
            <div className="channels">
                <div>
                    <img 
                      onClick={(e)=> {api({ func: 'netflix' })}}
                      src="/images/Netflix-Logo.wine.png"
                    ></img>
                </div>
                <div>
                    <img
                      src="/images/YouTube-Logo.wine.png"
                    ></img>
                </div>
            </div>
        </>
    )

}
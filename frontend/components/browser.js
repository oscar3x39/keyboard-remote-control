export default function sounds() {

    return (
        <>
            <div className="sounds">
                <div>
                    <img
                      className="icon"
                      src="/images/tabs.png"
                      onClick={(e)=> {api({
                        func: 'tab'
                      })}}
                    ></img>
                </div>
                <div>
                    <img
                      className="icon"
                      src="/images/close.png"
                      onClick={(e)=> {api({
                        func: 'close'
                      })}}
                    ></img>
                </div>
            </div>
        </>
    )
}
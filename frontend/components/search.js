import { api } from '../utils'

export default function Search() {
    return (
      <>
        <div className="search top100">
          <input type="search" placeholder="website link type here" />
          <button type="submit"
                  onClick={(e)=> {api({
                    func: 'openUrl',
                    url: document.querySelector('.search input').value
                  })}}
          ></button>
        </div>  
      </>
    )
}
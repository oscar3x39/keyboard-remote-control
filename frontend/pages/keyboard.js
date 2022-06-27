import { api } from '../utils'

export default function keyboard() {

    return (
        <div className="keyboard flex column">
            <div className="circle-out"></div>
            <div className="circle-in"></div> 
            <div className="direction top"
              onClick={(e)=> {api({
                func: 'keyboard',
                key: 'up'
              })}}
            >↑</div>
            <div className="direction left"
              onClick={(e)=> {api({
                func: 'keyboard',
                key: 'left'
              })}}
            >←</div>
            <div className="direction down"
              onClick={(e)=> {api({
                func: 'keyboard',
                key: 'down'
              })}}
            >↓</div>
            <div className="direction right"
              onClick={(e)=> {api({
                func: 'keyboard',
                key: 'right'
              })}}
            >→</div>
            <div className="direction space"
              onClick={(e)=> {api({
                func: 'keyboard',
                key: 'space'
              })}}
            >SPACE</div>
        </div>
    );
}
export default function keyboard() {

    return (
        <div className="keyboard flex column">
            <div className="circle-out"></div>
            <div className="circle-in"></div> 
            <div className="direction top">↑</div>
            <div className="direction left">←</div>
            <div className="direction down">↓</div>
            <div className="direction right">→</div>
        </div>
    );
}
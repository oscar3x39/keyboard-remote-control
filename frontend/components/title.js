export default function Title({title}) {

    return (
        <>
            <div className="flex column">
                <h1 className="title">MEDIA CONTROLS</h1>
                <div className="status">{title}</div>
            </div>
        </>
    );
}
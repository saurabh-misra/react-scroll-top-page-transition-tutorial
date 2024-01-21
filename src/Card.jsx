export default function Card({ cardNum, className }) {
    return (
        <>
            <div className={`card mb-3 ${className}`} style={{maxWidth: "18rem"}}>
                <div className="card-header">Card {cardNum}</div>
                <div className="card-body">
                    <h5 className="card-title">Lorem ipsum</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis sem posuere, dignissim magna ut, pretium augue.</p>
                </div>
            </div>
        </>
    );
}
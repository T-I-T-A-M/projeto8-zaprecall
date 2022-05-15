export default function OpenAnswer ( {props} ) {




    return (
        <div className ="openAnswer">
            <button className="openAnswerButton">
                <>
                <h2>{props}</h2>
                <div className ="choices">
                <button className="nope">Não Lembrei</button>
                <button className="almost">Quase não lembrei</button>
                <button className="zap">Zap!</button>
                </div>
                </>
            </button>





        </div>



    )



}

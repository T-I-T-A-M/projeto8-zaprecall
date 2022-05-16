
export default function OpenAnswer ( {props, stateAnswer,setStateAnswer,setClicked,clicked,setQuestionAnswered,questionAnswered  } ) {


function Nope(){
    setStateAnswer("done-nope")
    setClicked(!clicked)
    setQuestionAnswered(questionAnswered+1)


}

function Almost (){
    setStateAnswer("done-almost")
    setClicked(!clicked)
    setQuestionAnswered(questionAnswered+1)
}

function Zap (){
    setStateAnswer("done-zap")
    setClicked(!clicked)
    setQuestionAnswered(questionAnswered+1)
}


    return (
        <div className ="openAnswer">
            <button className="openAnswerButton">
                <>
                <h2>{props}</h2>
                <div className ="choices">
                <button onClick = {() => Nope()} className="nope">Não Lembrei</button>
                <button onClick = {() => Almost()} className="almost">Quase não lembrei</button>
                <button onClick = {() => Zap()} className="zap">Zap!</button>
                </div>
                </>
            </button>





        </div>



    )



}




export default function OpenButton ( { props, clickAnswer, setClickAnswer } ) {

function renderAnswer() {
    setClickAnswer(!clickAnswer)
}


    return (

        <div className="openQuestions">
            <button  className="openQuestion">
                {props}
                <img onClick ={()=> renderAnswer()} src="./Images/setinha.png"></img>
            </button>
        </div>


    )




}
import OpenAnswer from "./OpenAnswer"
import OpenButton from "./OpenButton"

import React from "react";

export default function Question ({ question, questionAnswered, setQuestionAnswered }){

const [clicked, setClicked] = React.useState(true);
const [clickAnswer, setClickAnswer] = React.useState(true);
const [stateAnswer, setStateAnswer] = React.useState("")






    return (

        <div className ="question">
            
            {clicked ? (<button className = {stateAnswer}  >
                <h2>Pergunta {question.number} </h2>
                <div>
                    {(stateAnswer === "") ? (<ion-icon onClick={() => setClicked(!clicked)} name="play-outline"></ion-icon>): 
                    (stateAnswer === "done-nope") ? <ion-icon name="close-circle"></ion-icon>
                     : (stateAnswer === "done-almost") ? <ion-icon  name="help-circle"></ion-icon> : 
                     <ion-icon  name="checkmark-circle"></ion-icon>

}               
               </div>
            </button>) : 
            
            ( clickAnswer ? (<OpenButton clickAnswer={clickAnswer} clicked={clicked} setClicked ={setClicked} setClickAnswer={setClickAnswer} props ={question.question} />) : 
            
            (<OpenAnswer props ={question.answer}  stateAnswer={stateAnswer} setStateAnswer={setStateAnswer} setClicked ={setClicked} clicked={clicked} setQuestionAnswered={setQuestionAnswered} questionAnswered={questionAnswered}           />))


            }
            
        </div>

           
    )

}
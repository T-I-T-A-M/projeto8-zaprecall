import OpenAnswer from "./OpenAnswer"
import OpenButton from "./OpenButton"
import React from "react";

export default function Question ({ question }){

const [clicked, setClicked] = React.useState(true);
const [clickAnswer, setClickAnswer] = React.useState(true);






    return (

        <div className ="questions">
            
            {clicked ? (<button onClick={() => setClicked(!clicked)} >
                <h2>Pergunta {question.number} </h2>
                <div>
                    <ion-icon name="play-outline"></ion-icon>
               </div>
            </button>) : ( clickAnswer ? (<OpenButton clickAnswer={clickAnswer} setClickAnswer={setClickAnswer} props ={question.question} />) : (<OpenAnswer props ={question.answer} />))


            }
            
        </div>

    )

}
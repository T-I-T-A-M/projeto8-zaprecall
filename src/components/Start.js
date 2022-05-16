import React from "react"

export default function Start ({startGame, setStateGame}){

    function Letsgo(){
        setStateGame(!startGame)
    
    
    }



    return (
        <div className="start hidden">
            <img className ="logo" src="./Images/logo.png" alt="" />
            <h1>ZapRecall</h1>
            <button onClick ={() => Letsgo()} className ="startButton" >Iniciar Recall!</button>    
        </div>

    )
}
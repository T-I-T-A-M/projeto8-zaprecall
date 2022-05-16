import Start from "./components/Start";
import Game from "./components/Game";
import React from "react"

import "./components/style.css"


export default function App () {


    const [startGame, setStateGame] = React.useState(true)

    return (
            <>

            {startGame ? (<Start startGame={startGame} setStateGame={setStateGame} />) : (<Game />)}

            
            
            
            
            
            
            </>

    )
}
import OpenButton from "./OpenButton"
import OpenAnswer from "./OpenAnswer"

export default function Game () {



    return (
        <div className ="game">
            <div class ="game-header">
                <img src="./Images/logo-pequeno.png"></img>
                <h1>ZapRecall</h1>
            </div>

            <div className ="questions">
                <button>
                    <h2>Pergunta{}</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </button>
                <OpenButton />
                <OpenAnswer />
                <button>

                    <h2 className="done">Pergunta RESPONDIDA{}</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </button>
                <button>
                    <h2>Pergunta{}</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </button>
                <button>
                    <h2>Pergunta{}</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </button>

            </div>
        </div>

    )
}
import Question from "./Question"
import Footer from "./Footer"
import React from "react"


export default function Game () {

    const questions = [
        {
            number : 1,
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript"
        },
        {
            number : 2,
            question: "O React é __ ",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
    
        {
            number : 3,
            question: "Componentes devem iniciar com __",
            answer: "letra maiúscula"
        },
        {
            number : 4,
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões"
        },
        {
            number : 5,
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            number : 6,
            question: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            number : 7,
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes "
        },
        {
            number : 8,
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }

    ]

    const [questionAnswered, setQuestionAnswered] = React.useState(0)




    return (
        <><div className="game">
            <div className="game-header">
                <img src="./Images/logo-pequeno.png"></img>
                <h1>ZapRecall</h1>
            </div>

            {questions.map((question, index) => <Question key={index} question={question} questionAnswered={questionAnswered} setQuestionAnswered={setQuestionAnswered} />)}


        </div> 
        <Footer questionAnswered={questionAnswered}  questionsQtd={questions.length} /></>
    )
}
import React, {useState} from "react"
import {calculateWinner} from "../helper"
import Board from "./Board"

const Game = ()=> {
    const[history,setHistory] = useState([Array(9).fill(null)])
    const[stepNumber,setStepNumber] = useState(0)
    const[xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])
    const XO = xIsNext ? 'X' : 'O';

    const handleClick = (i) => {
        const historyPoint = history.slice(0,stepNumber+1)
        const current = historyPoint[stepNumber]
        const squares = [...current]

        if(winner || squares[i]) return

        squares[i] = XO
        setHistory([...historyPoint,squares])
        setStepNumber(historyPoint.length)
        setXisNext(!xIsNext)
    }
    const jumpTo= (step)=>{
        setStepNumber(step)
        setXisNext(step==='X' ? true:false)
    }
    const renderMoves= ()=>
        history.map((_step,move)=>{
            const detination = move ? `Go to move #${move}` : 'Go to Start'
            return(
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{detination}</button>
                </li>
            )
        })
    
    return (
        <>
            <h1>React TicTacToe</h1>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className="info-wrapper">
                <div>
                    <h3>History</h3>
                    {renderMoves()}
                </div>
                <h3>{winner ? `Winner: ${winner}`: `Next Player: ${XO}`}</h3>
            </div>
        </>
    )
}
export default Game;
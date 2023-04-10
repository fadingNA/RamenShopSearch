import {useState} from "react";
import {Button} from "react-bootstrap";
import Board from "@/components/minigame/Board";

export default function Game(){
    const [history, setHistory] = useState([Array(9).fill[null]]);
    const [currentMove, setCurrentMove] = useState(0);
    const xNext = currentMove % 2 === 0;
    const currentSquare = history[currentMove];

    function handlePlay(e){
        const nextHis = [...history.slice(0, currentMove + 1), e];
        setHistory(nextHis);
        setCurrentMove(nextHis.length - 1);
    }

    function jumpTo(nextMove){
        setCurrentMove(nextMove);
    }

    const moves = history.map((i,move) => {
        let des;
        if (move > 0) {
            des = 'Go to move #' + move;

        } else {
            des = 'Start point';
        }
        return (
            <li key={move}>
                <Button onClick={() => jumpTo(move)}>{des}</Button>
            </li>
        )
    })
    return (
        <div className="game">
            <div className="game-board">
                <Board isNext={xNext} sq={currentSquare} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );

}
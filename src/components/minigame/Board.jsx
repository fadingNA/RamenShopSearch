import React from "react";
import {Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Box from "@/components/minigame/squar";


export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
export default function Board({isNext, sq, play}){
    function handleClick(e){
        if (calculateWinner(sq) || sq[e]){
            return null;
        }
        const nextSquares = sq.slice();
        if (isNext) {
            nextSquares[e] = 'X';
        } else {
            nextSquares[e] = 'O';
        }
        play(nextSquares);
    }

    const winner = calculateWinner(sq);
    let flag;
    if (winner) {
        flag = 'Winner : ' + winner;
    } else {
        flag = 'Next player : ' + (isNext ? 'X' : 'O');
    }

    return (
        <>
            <Container>
                <Card>
                    <Card.Title> Let's Play game.</Card.Title>
                </Card>
                <Card.Body>
                    <Box value={sq[0]} onClick={() => handleClick(0)}/>
                    <Box value={sq[1]} onClick={() => handleClick(1)}/>
                    <Box value={sq[2]} onClick={() => handleClick(2)}/>
                </Card.Body>
                <Card.Body>
                    <Box value={sq[3]} onClick={() => handleClick(3)}/>
                    <Box value={sq[4]} onClick={() => handleClick(4)}/>
                    <Box value={sq[5]} onClick={() => handleClick(5)}/>
                </Card.Body>
                <Card.Body>
                    <Box value={sq[6]} onClick={() => handleClick(6)}/>
                    <Box value={sq[7]} onClick={() => handleClick(7)}/>
                    <Box value={sq[8]} onClick={() => handleClick(8)}/>
                </Card.Body>
            </Container>
        </>
    )
}
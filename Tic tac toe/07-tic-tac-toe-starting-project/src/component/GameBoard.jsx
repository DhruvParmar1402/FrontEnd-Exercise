import { useState } from "react";
import Button from "./Button";

export default function GameBoard() {
    const [count, setCount] = useState(0);
    const [matrixState, setMatrixState] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]);
    const [gameOver, setGameOver] = useState(false);

    function handleMove(row, col, symbol) {
        const newMatrix = matrixState.map(inner => [...inner]);
        newMatrix[row][col] = symbol;
        setMatrixState(newMatrix);

        if (isWinning(newMatrix)) {
            setGameOver(true);
        }
    }

    function isWinning(matrix) {
        for (let index = 0; index < 3; index++) {
            let rowCount = 0;
            let colCount = 0;

            for (let secondary = 0; secondary < 3; secondary++) {
                if (matrix[index][secondary] === 'X') rowCount++;
                else if (matrix[index][secondary] === 'O') rowCount--;

                if (matrix[secondary][index] === 'X') colCount++;
                else if (matrix[secondary][index] === 'O') colCount--;
            }

            if (rowCount === 3 || colCount === 3) return true;
        }

        let mainDiagonal = 0;
        let antiDiagonal = 0;

        for (let i = 0; i < 3; i++) {
            if (matrix[i][i] === 'X') mainDiagonal++;
            else if (matrix[i][i] === 'O') mainDiagonal--;

            if (matrix[i][2 - i] === 'X') antiDiagonal++;
            else if (matrix[i][2 - i] === 'O') antiDiagonal--;
        }

        return mainDiagonal === 3 || antiDiagonal === 3;
    }

    let mat = [];
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(
                <li key={`${i}-${j}`}>
                    <Button
                        row={i}
                        col={j}
                        count={count}
                        setCount={setCount}
                        onMove={handleMove}
                    />
                </li>
            );
        }
        mat.push(<ol key={i}>{row}</ol>);
    }

    return (
        <div id="game-board">
            {gameOver ? <h2>Game Over</h2> : mat}
        </div>
    );
}

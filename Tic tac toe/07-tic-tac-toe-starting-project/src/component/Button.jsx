import { useState } from "react";

export default function Button({ row, col, count, setCount, onMove }) {
    const [symbol, setSymbol] = useState("");

    function handleClick() {
        if (!symbol) {
            const newCount = count + 1;
            const playerSymbol = newCount % 2 === 1 ? "X" : "O";

            setCount(newCount);
            setSymbol(playerSymbol);
            onMove(row, col, playerSymbol);
        }
    }

    return <button onClick={handleClick}>{symbol}</button>;
}
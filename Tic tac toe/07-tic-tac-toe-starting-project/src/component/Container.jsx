import GameBoard from "./GameBoard";
import PlayersBoard from "./PlayersBoard";
export default function Container()

{
    return(
        <div id="game-container">
           <PlayersBoard/>
           <GameBoard/>
        </div>
    );
}
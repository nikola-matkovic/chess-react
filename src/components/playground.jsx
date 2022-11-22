import { useState } from "react";
import "./playground.scss";

class Figure {
    constructor(color, points, name) {
        this.color = color;
        this.points = points;
        this.name = name;
    }
}
const Playground = () => {
    let positons = useState([
        [
            rockBlack,
            knightBlack,
            bishopBlack,
            queenBlack,
            kingBlack,
            bishopBlack,
            knightBlack,
            rockBlack,
        ],
        Array(8).fill(pownBlack),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(pownWhite),
        [
            rockWhite,
            knightWhite,
            bishopWhite,
            queenWhite,
            kingWhite,
            bishopWhite,
            knightWhite,
            rockWhite,
        ],
    ]);

    let rockBlack = new Figure("black", 5, "rock");
    let rockWhite = new Figure("white", 5, "rock");
    let knightBlack = new Figure("black", 3, "knight");
    let knightWhite = new Figure("White", 3, "knight");
    let bishopBlack = new Figure("black", 3, "bishop");
    let bishopWhite = new Figure("White", 3, "bishop");
    let kingBlack = new Figure("black", Infinity, "king");
    let kingWhite = new Figure("white", Infinity, "king");
    let queenBlack = new Figure("black", 9, "queen");
    let queenWhite = new Figure("White", 9, "queen");
    let pownBlack = new Figure("black", 1, "pown");
    let pownWhite = new Figure("White", 1, "pown");
    let UI = [];
    for (let i = 8; i >= 1; i--) {
        for (let j = 1; j <= 8; j++) {
            UI.push(
                <div
                    className={`cell ${(i + j) % 2 != 1 ? `white` : `black`} `}
                    key={`${i}-${j}`}
                    id={`${i}-${j}`}
                ></div>
            );
        }
    }

    return <div id="cont">{UI}</div>;
};

export default Playground;

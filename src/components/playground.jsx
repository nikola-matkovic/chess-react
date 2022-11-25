import { useState } from "react";
import "./playground.scss";
import figures from "../images/export.jsx";

class Figure {
    constructor(color, points, name, image) {
        this.color = color;
        this.points = points;
        this.name = name;
        this.image = image;
    }
}
const Playground = () => {
    let rockBlack = new Figure("black", 5, "rock", figures.rockBlack);
    let rockWhite = new Figure("white", 5, "rock", figures.rockWhite);
    let knightBlack = new Figure("black", 3, "knight", figures.knightBlack);
    let knightWhite = new Figure("White", 3, "knight", figures.knightWhite);
    let bishopBlack = new Figure("black", 3, "bishop", figures.bishopBlack);
    let bishopWhite = new Figure("White", 3, "bishop", figures.bishopWhite);
    let kingBlack = new Figure("black", Infinity, "king", figures.kingBlack);
    let kingWhite = new Figure("white", Infinity, "king", figures.kingWhite);
    let queenBlack = new Figure("black", 9, "queen", figures.queenBlack);
    let queenWhite = new Figure("White", 9, "queen", figures.queenWhite);
    let pownBlack = new Figure("black", 1, "pown", figures.pownBlack);
    let pownWhite = new Figure("White", 1, "pown", figures.pownWhite);
    let UI = [];

    let [positons, setPositions] = useState([
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

    for (let i = 8; i >= 1; i--) {
        for (let j = 1; j <= 8; j++) {
            UI.push(
                <div
                    className={`cell ${(i + j) % 2 !== 1 ? `white` : `black`} `}
                    key={`${i}-${j}`}
                    id={`${i}-${j}`}
                ></div>
            );
        }
    }
    let figuresUI = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (positons[i][j]) {
                let left = `${12.5 * j}%`;
                let top = `${12.5 * i}%`;
                figuresUI.push(
                    <img
                        src={positons[i][j].image}
                        style={{
                            left,
                            top,
                        }}
                    />
                );
            }
        }
    }

    return (
        <div id="cont">
            {UI} {figuresUI}
        </div>
    );
};

export default Playground;

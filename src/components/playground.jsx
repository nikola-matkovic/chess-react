import { useState } from "react";
import "./playground.scss";

const Playground = () => {
    let cell = [];

    for (let i = 8; i >= 1; i--) {
        for (let j = 1; j <= 8; j++) {
            cell.push(
                <div
                    className={`cell ${(i + j) % 2 != 1 ? `white` : `black`} `}
                    key={`${i}-${j}`}
                    id={`${i}-${j}`}
                ></div>
            );
        }
    }

    return <div id="cont">{cell}</div>;
};

export default Playground;

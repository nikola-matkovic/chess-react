let figures = [
    "rockBlack",
    "knightBlack",
    "bishopBlack",
    "queenBlack",
    "kingBlack",
    "bishopBlack",
    "knightBlack",
    "rockBlack",
    "rockWhite",
    "knightWhite",
    "bishopWhite",
    "queenWhite",
    "kingWhite",
    "bishopWhite",
    "knightWhite",
    "rockWhite",
    "pownBlack",
    "pownBlack",
];
let unique = [...new Set(figures)];

console.log(
    unique
        .map((figure) => `import ${figure} from './images/${figure}.png';`)
        .join("\n")
);

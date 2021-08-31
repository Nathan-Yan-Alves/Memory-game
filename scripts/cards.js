const cards = document.querySelectorAll(".pieces");
const board = document.querySelector(".board");

function randomPos(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clonePos() {
    let randomNum;
    let valuePos = ["", "", "", "", "", "", "", "", "", ""];
    let clone;
    let allCloneElements = false;

    while (!allCloneElements) {
        randomNum = randomPos(0, 9);
        if (valuePos[randomNum] == "") {
            valuePos[randomNum] = "x";
            clone = cards[randomNum].cloneNode();
            board.appendChild(clone);
        }

        if (!valuePos.includes("")) {
            allCloneElements = true;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    clonePos();
});

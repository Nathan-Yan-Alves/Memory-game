const board = document.querySelector(".board");
const cards = Array.prototype.slice.call(document.querySelectorAll(".pieces"));
const gameOverScreen = document.querySelector(".gameOverScreen");
let pastCard = null;

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
            cards.push(clone);
        }

        if (!valuePos.includes("")) {
            allCloneElements = true;
        }
    }
}

function cardStyle(card) {
    let imgID = card.classList[1];

    card.style.background = `no-repeat center/cover url('../assets/images/${imgID}.jpg')`;
    flipHandler(card);
}

function compareCards(card1, card2) {
    if (card1.classList[1] != card2.classList[1]) {
        setTimeout(() => {
            flipHandler(card1, true);
        }, 300);
        flipHandler(card2, true);
    }
    pastCard = null;
}

function flipHandler(card, remove = false) {
    card.classList.toggle("flip");
    if (remove) {
        card.style.backgroundImage = "url('../assets/images/card-back.png')";
    }
}

function gameOver() {
    let flipClass = document.querySelectorAll(".flip").length;

    if (flipClass == 20) {
        gameOverScreen.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    clonePos();

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            cardStyle(card);
            if (pastCard != null) {
                compareCards(card, pastCard);
            } else {
                pastCard = card;
            }

            gameOver();
        });
    });
});

gameOverScreen.lastElementChild.addEventListener("click", () => {
    location.reload();
});

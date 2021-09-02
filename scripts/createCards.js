const board = document.querySelector(".board");
const gameOverScreen = document.querySelector(".gameOverScreen");
const cards = Array.prototype.slice.call(document.querySelectorAll(".card"));

let cardImages = [
    "artorias",
    "artorias",
    "nameless-king",
    "dancer",
    "fume-knight",
    "gael",
    "lost-sinner",
    "nashandra",
    "sister-friede",
    "sir-alonne",
    "vendrick",
    "nameless-king",
    "dancer",
    "fume-knight",
    "gael",
    "lost-sinner",
    "nashandra",
    "sister-friede",
    "sir-alonne",
    "vendrick",
];

function addCards() {
    for (let i = 0; i < 19; i++) {
        cloneCard(cards[i]);
    }
}

function changeCardImage(card) {
    let pos = randomPos(0, cardImages.length - 1);

    card.children[0].src = `../assets/images/${cardImages[pos]}.jpg`;
    card.children[0].alt = cardImages[pos];
    cardImages.splice(pos, 1);
}

function cloneCard(card) {
    let clone = card.cloneNode(true);

    changeCardImage(clone.children[0]);

    board.appendChild(clone);
    cards.push(clone);
}

function randomPos(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
    changeCardImage(cards[0].children[0]);
    addCards();
});

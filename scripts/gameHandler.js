let cardFront;
let pastCard = null;

function compareCards(card1, card2) {
    let altCard1 = card1.children[0].children[0].alt;
    let altCard2 = card2.children[0].children[0].alt;

    if (altCard1 != altCard2) {
        flipHandler(card1);
        flipHandler(card2);
    }
    pastCard = null;
}

function flipHandler(card) {
    card.classList.toggle("flip");
}

function gameOver() {
    let flipClass = document.querySelectorAll(".flip").length;

    if (flipClass == 20) {
        gameOverScreen.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            flipHandler(card);

            if (pastCard != null) {
                setTimeout(() => {
                    compareCards(card, pastCard);
                }, 600);
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

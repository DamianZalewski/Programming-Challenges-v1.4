let maxCards = 52;
let remainCards = maxCards;
let score = 0;
let cards = [0,1,2,3,4,5,6,7,8,9,10];
let actualCard = -1;

gameLogic = () => {
    drawRemainCards();
    drawScore();     
}

drawRemainCards = () => {
    let scoreDiv = document.getElementById("cardsRemain");
    scoreDiv.innerHTML = "Cards remain: " + remainCards;
}

drawScore = () => {
    let scoreDiv = document.getElementById("gameScore");
    scoreDiv.innerHTML = "Score: " + score;
}

startNewGame = () => {
    let randomCard = Math.floor(Math.random() * cards.length);
    actualCard = cards[randomCard];
    cards.splice(randomCard-1,1);
    drawCard();
}

drawCard = () => {
    let cardDiv = document.getElementById("actualCard");
    cardDiv.innerHTML = actualCard;
}



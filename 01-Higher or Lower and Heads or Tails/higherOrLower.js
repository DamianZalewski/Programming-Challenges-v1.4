let score = 0;
let originalCards = ['2C','2D','2H','2S',
             '3C','3D','3H','3S',
             '4C','4D','4H','4S',
             '5C','5D','5H','5S',
             '6C','6D','6H','6S',
             '7C','7D','7H','7S',
             '8C','8D','8H','8S',
             '9C','9D','9H','9S',
             '10C','10D','10H','10S',
             'JC','JD','JH','JS',
             'QC','QD','QH','QS',
             'KC','KD','KH','KS',
             'AC','AD','AH','AS'];
let cards = [];
originalCards.forEach((e)=>{cards.push(e)});
let maxCards = cards.length;
let remainCards = maxCards;
let actualCard = "";
let isGameStarted = false;

gameLogic = () => {
    drawRemainCards();
    drawScore();     
}

drawRemainCards = () => {
    let scoreButton = document.getElementById("cardsRemain");
    scoreButton.value = remainCards;
}

drawScore = () => {
    let scoreButton = document.getElementById("gameScore");
    scoreButton.value = score;
}

startNewGame = () => {
    cleanGameOver();
    score = 0;
    if(isGameStarted) {
        cards = [];
        originalCards.forEach((e)=>{cards.push(e)});
        remainCards = maxCards;
        
    }
    isGameStarted = true;
    let randomCard = Math.floor(Math.random() * cards.length);
    actualCard = cards[randomCard] + ".jpg";
    cards.splice(randomCard-1,1);
    remainCards = cards.length;
    drawCard();
    drawRemainCards();
}

drawCard = () => {
    let cardImg = document.getElementById("actualCard");
    cardImg.src = "assets/higherOrLower/"+actualCard;
}

handleArrowClick = (position) => {
    if(!isGameStarted) return 0;
    let previousCard = actualCard;
    let randomCard = Math.floor(Math.random() * cards.length);
    actualCard = cards[randomCard] + ".jpg";
    cards.splice(randomCard-1,1);
    remainCards = cards.length;

    previousValue = checkValue(previousCard);
    actualValue = checkValue(actualCard);
    if(position === "up") {
            if(actualValue >= previousValue) score += 100; else score -= 100;
    } else if(position === "down"){
        if(actualValue < previousValue) score += 100; else score -= 100;
    }
    
    if(remainCards === 0) {
        isGameStarted = false;
        drawGameOver();
    }
    
    drawCard();
    drawRemainCards();
    drawScore();
}

drawGameOver = () => {
    let gameOverDiv = document.getElementById("gameOver");
    gameOverDiv.innerHTML = "Game over!";
}

cleanGameOver = () => {
    let gameOverDiv = document.getElementById("gameOver");
    gameOverDiv.innerHTML = "";
}

checkValue = (card) => {
    let cardValue = 0;
    switch(card[0]) {
        case '2':
            cardValue = 2;
            break;
        case '3':
            cardValue = 3;
            break;
        case '4':
            cardValue = 4;
            break;
        case '5':
            cardValue = 5;
            break;
        case '6':
            cardValue = 6;
            break;
        case '7':
            cardValue = 7;
            break;
        case '8':
            cardValue = 8;
            break;
        case '9':
            cardValue = 9;
            break;
        case '2':
            cardValue = 2;
            break;
        case '1':
            cardValue = 10;
            break;
        case 'J':
            cardValue = 11;
            break;
        case 'Q':
            cardValue = 12;
            break;
        case 'K':
            cardValue = 13;
            break;
        case 'A':
            cardValue = 14;
            break;
    }
    return cardValue;
}
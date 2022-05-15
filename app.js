document.addEventListener('DOMContentLoaded', () => {

//card options

const cardsArray = [

    {
        name: 'fries',
        img: 'src/fries.png'
    },


    {
        name: 'cheeseburger',
        img: 'src/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'src/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'src/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'src/milkshake.png'
    },

    {
        name: 'pizza',
        img: 'src/pizza.png'
    },

    {
        name: 'fries',
        img: 'src/fries.png'
    },


    {
        name: 'cheeseburger',
        img: 'src/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'src/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'src/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'src/milkshake.png'
    },

    {
        name: 'pizza',
        img: 'src/pizza.png'
    },

    

]

cardsArray.sort(()  => 0.5 - Math.random())

console.log(cardsArray)

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector('#score');
let cardsChosen = [];
let cardsChosenIDs = [];
let cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardsArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'src/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function flipCard() {

    let cardID = this.getAttribute('data-id')
    cardsChosen.push(cardsArray[cardID].name)
    cardsChosenIDs.push(cardID)
    this.setAttribute('src', cardsArray[cardID].img)

    if (cardsChosen.length === 2){
        setTimeout(checkForMatch,500)
    }
    console.log(cardsChosenIDs)
}

function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneID = cardsChosenIDs[0];
    const optionTwoID = cardsChosenIDs[1];
    
    
    if(optionOneID == optionTwoID)
    {
        alert("You clicked the same image!")
        cards[optionOneID].setAttribute('src', 'src/blank.png');
        cards[optionTwoID].setAttribute('src', 'src/blank.png');
    } else if (cardsChosen[0] === cardsChosen[1]){
        alert("You have found a match!")
        cards[optionOneID].setAttribute('src', 'src/white.png');
        cards[optionTwoID].setAttribute('src', 'src/white.png');
        cards[optionOneID].removeEventListener('click', flipCard);
        cards[optionTwoID].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneID].setAttribute('src', 'src/blank.png');
        cards[optionTwoID].setAttribute('src', 'src/blank.png');
        alert("Sorry, that wasn't a match.")
    }

    cardsChosen = [];
    cardsChosenIDs = [];
    resultDisplay.textContent = cardsWon.length;

    if(cardsWon.length === cardsArray.length / 2){
        resultDisplay.textContent = "Congratulations! You've won!"
    }

    console.log(cardsChosen)
    console.log(cardsWon);
}

createBoard()

})
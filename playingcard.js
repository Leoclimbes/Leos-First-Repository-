
// Cards array 
let cards = [
    { suit: "h", value: "a" },
    { suit: "h", value: "2" },
    { suit: "h", value: "3" },
    { suit: "h", value: "4" },
    { suit: "h", value: "5" },
    { suit: "h", value: "6" },
    { suit: "h", value: "7" },
    { suit: "h", value: "8" },
    { suit: "h", value: "9" },
    { suit: "h", value: "10" },
    { suit: "h", value: "j" },
    { suit: "h", value: "q" },
    { suit: "h", value: "k" },
    { suit: "s", value: "a" },
    { suit: "s", value: "2" },
    { suit: "s", value: "3" },
    { suit: "s", value: "4" },
    { suit: "s", value: "5" },
    { suit: "s", value: "6" },
    { suit: "s", value: "7" },
    { suit: "s", value: "8" },
    { suit: "s", value: "9" },
    { suit: "s", value: "10" },
    { suit: "s", value: "j" },
    { suit: "s", value: "q" },
    { suit: "s", value: "k" },
    { suit: "d", value: "a" },
    { suit: "d", value: "2" },
    { suit: "d", value: "3" },
    { suit: "d", value: "4" },
    { suit: "d", value: "5" },
    { suit: "d", value: "6" },
    { suit: "d", value: "7" },
    { suit: "d", value: "8" },
    { suit: "d", value: "9" },
    { suit: "d", value: "10" },
    { suit: "d", value: "j" },
    { suit: "d", value: "q" },
    { suit: "d", value: "k" },
    { suit: "c", value: "a" },
    { suit: "c", value: "2" },
    { suit: "c", value: "3" },
    { suit: "c", value: "4" },
    { suit: "c", value: "5" },
    { suit: "c", value: "6" },
    { suit: "c", value: "7" },
    { suit: "c", value: "8" },
    { suit: "c", value: "9" },
    { suit: "c", value: "10" },
    { suit: "c", value: "j" },
    { suit: "c", value: "q" },
    { suit: "c", value: "k" },
    
]
// Logic to return just the hearts 
/*let hearts = cards.filter(deck => {
    return deck.suit === "h"
})

console.log(hearts)*/

let randomCards = []
let valuesOnly = []

for(let i = 0; i < 5; i++ ){
    let randomNum = Math.floor(Math.random() * (52 - 0) + 0);
    let randomCard = cards[randomNum];
    randomCards.push(randomCard)
    }

for(let card of randomCards ){
    valuesOnly.push(card.value)   
    }

console.log(valuesOnly)

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
let numberOfValues = []

// Gets 5 random cards from cards and puts it into an array 
for(let i = 0; i < 7; i++ ){
    let randomNum = Math.floor(Math.random() * (52 - 0) + 0);
    let randomCard = cards[randomNum];
    randomCards.push(randomCard)
    }

// Takes randomcards array and returns just the values 
for(let card of randomCards ){
    valuesOnly.push(card.value)   
    }

let counter = 0;
// Outer loop: pick each value
for (let i = 0; i < valuesOnly.length; i++) {
    let counter = 0;
    
    // Check if this value has already been counted
    let alreadyCounted = false;
    for (let j = 0; j < i; j++) {  // scan all earlier values
        if (valuesOnly[i] === valuesOnly[j]) {
            alreadyCounted = true;  // we've already counted it
            break;
        }
    }
    
    if (alreadyCounted) continue; // skip this value
    
    // Inner loop: count how many times it appears in the array
    for (let a = 0; a < valuesOnly.length; a++) {
        if (valuesOnly[i] === valuesOnly[a]) {
            counter += 1;
        }
    }
    
    // Store the count
    numberOfValues.push(counter);
}


console.log(numberOfValues); 

// assign count variables
let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0

// check to see how many of each value there are and assign that vale to its count variable 
for(let i = 0; i < numberOfValues.length; i++){
    if (numberOfValues[i] == 1) {
        count1 += 1;
    } else if (numberOfValues[i] == 2) {
        count2 += 1;
    } else if (numberOfValues[i] == 3) {
        count3 += 1;
    } else if (numberOfValues[i] == 4) {
        count4 += 1;
    }   
}

// log in the console what hand the player has 
if (count4 == 1){
    console.log("You have four of a kind")
}
else if(count3 == 1 && count2 == 1){
    console.log("You have a full house")
}
else if (count2 == 2){
    console.log("You have 2 pair")
}
else if (count3 == 1){
    console.log("You have three of a kind or trips ")
}
else if (count2 == 1){
    console.log("You have a pair")
}
else {
    console.log("You have high card")
}

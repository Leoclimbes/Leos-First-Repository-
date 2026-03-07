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

let randomCards = []
let valuesOnly = []
let numberOfValues = []
let suitsOnly = []

hasFlush = false
hasStraight = false
hasFull = false
has4 = false
has3 = false
has2 = false
has1 = false
has0 = false

// Gets 5 random cards from cards and puts it into an array 
for(let i = 0; i < 7; i++ ){
    let randomNum = Math.floor(Math.random() * (cards.length));
    let randomCard = cards[randomNum];
    randomCards.push(randomCard)
    cards.splice(randomNum, 1)
    }

// Takes randomcards array and returns just the values 
for(let card of randomCards ){
    if(card.value == "a"){
        valuesOnly.push(1)
        valuesOnly.push(14)
    }
    else if(card.value == "j"){
        valuesOnly.push(11)
    } else if(card.value == "q"){
        valuesOnly.push(12)
    }
    else if(card.value == "k"){
        valuesOnly.push(13)
    }
    else{
    valuesOnly.push(Number(card.value))  
    } 
    }


let counter = 0;
// pick each value
for (let i = 0; i < valuesOnly.length; i++) {
    let counter = 0;
    
    // Check if this value has already been counted
    let alreadyCounted = false;
    for (let j = 0; j < i; j++) {  
        if (valuesOnly[i] === valuesOnly[j]) {
            alreadyCounted = true; 
            break;
        }
    }
    
    if (alreadyCounted) continue; // skip this value
    
    // count how many times it appears in the array
    for (let a = 0; a < valuesOnly.length; a++) {
        if (valuesOnly[i] === valuesOnly[a]) {
            counter += 1;
        }
    }
    
    // Store the count
    numberOfValues.push(counter);
}

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

// assign values to true if a player has that hand 
if (count4 == 1){
    has4 = true
}
else if(count3 == 1 && count2 == 1){
    hasFull = true
}
else if (count3 == 1){
    has3 = true
    
}
else if (count2 == 2){
    has2 = true
}
else if (count2 == 1){
    has1 = true
}
else {
    has0 = true
}

let spade = 0
let diamond = 0
let club = 0
let heart = 0

// add the suits to suitsOnly 
for(let suit of randomCards){
    suitsOnly.push(suit.suit)
}

// keep track of number of suits
for(let i = 0; i < suitsOnly.length; i++){
    if(suitsOnly[i] == "s") {
        spade += 1
    }
    else if(suitsOnly[i] == "d"){
        diamond += 1
    }
    else if(suitsOnly[i] == "c"){
        club += 1
    }
    else if(suitsOnly[i] == "h"){
        heart += 1
    }
}

// check and log if someone has a flush 
if(spade >= 5){
    hasFlush = true
} 
else if(diamond >= 5){
    hasFlush = true
}
else if(club >= 5){
    hasFlush = true
}
else if(heart >= 5){
    hasFlush = true
}

valuesOnlyNoDuplicates = []

// add all the values form valuesOnly to values only no duplicates with no duplicates
for(let i = 0; i < valuesOnly.length; i++){
    if(valuesOnlyNoDuplicates.includes(valuesOnly[i])){
        continue
    }
    else{
        valuesOnlyNoDuplicates.push(valuesOnly[i])
    }
}
// sort values only no duplicates
valuesOnlyNoDuplicates.sort((a, b) => a - b)

let sorted = 1
// check check if there is a straight
for(let i = 0; i < valuesOnlyNoDuplicates.length - 1; i++){
        
        if(valuesOnlyNoDuplicates[i + 1] - valuesOnlyNoDuplicates[i] == 1){
            sorted +=1
        }
        else{
            sorted = 1
        }
        if(sorted >= 5){
            hasStraight = true
            break
        }
    }

    if (hasFlush && hasStraight){
        console.log("You have a straight flush")
    } 
    else if (has4){
        console.log("You have 4 of a kind")
    }
    else if (hasFull){
        console.log("You have a full house")
    } 
    else if (hasFlush){
        console.log("You have a flush")
    }
    else if (hasStraight){
        console.log("You have a straight")
    } 
    else if (has3){
        console.log("You have 3 of a kind")
    }
    else if (has2){
        console.log("You have 2 pair")
    }
    else if (has1){
        console.log("You have 2 of a kind")
    }
    else if (has4){
        console.log("You have high card")
    }


    



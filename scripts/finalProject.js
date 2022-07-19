const playerYou = document.getElementById("playerYou");  
const playerOpponent = document.getElementById("playerOpponent");

const playButton = document.getElementById("play");
const resetButton = document.getElementById("reset");
let i,j;      
// let j = Math.floor(Math.random()*6);

// document.getElementById("playerYou").innerHTML = `<h2><img src="images/product-images/dice-six-faces-${j+1}.png" alt=""></h2>`;

// $("playerOpponent").html(`<h2><img src="images/product-images/dice-six-faces-${j+1}.png" alt=""></h2>`);
// $("playerOpponent").css('background-color', 'red');

function runDice(){
    j = Math.floor(Math.random()*6);
    return `<img src="images/product-images/dice-six-faces-${j+1}.png" alt="">`;
}

function runSecondDice(){
    i = Math.floor(Math.random()*6);
    return `<img src="images/product-images/dice-six-faces-${i+1}.png" alt="">`;
}

// function scoring(){
//     if (i === j && i != 0 && j != 0){
//         return "<h2>Wow</h2>";
//     } else if (i == 0 || j == 0 ){
//         return "<h2>Bad</h2>";
//     } else {
//         return "<h2>ok<h2>";
//     }
// }

class Player{
    constructor (name){
        this.name = name;
        this.dice=[];
    }

    numberOfDice(aDice){
        this.dice.push(aDice);
    }

    scoring(){
        if (i === j && i != 0 && j != 0){
            return "<h2>Wow</h2>";
        } else if (i == 0 || j == 0 ){
            return "<h2>Bad</h2>";
        } else {
            return "<h2>ok<h2>";
        }
    }

    describeSelf(){
        let string = `<h2>${this.name}<h2>`;
        this.dice.forEach(function(oneDice){
            string += `<li>${oneDice}</li>`;
        })
        return string;
    }
}


const player01 = new Player("john");

player01.numberOfDice(runDice());
player01.numberOfDice(runSecondDice());
playerYou.innerHTML = player01.describeSelf();
playerYou.innerHTML += player01.scoring();


const player02 = new Player("jill");

player02.numberOfDice(runDice());
player02.numberOfDice(runSecondDice());
playerOpponent.innerHTML = player02.describeSelf();
playerOpponent.innerHTML += player02.scoring();




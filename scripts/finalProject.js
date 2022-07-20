const playerYou = document.getElementById("playerYou");
const playerOpponent = document.getElementById("playerOpponent");
const yourFinalScore = document.getElementById("yourFinalScore");
const opponentFinalScore = document.getElementById("opponentFinalScore");

const playButton = document.getElementById("play");
const resetButton = document.getElementById("reset");

let i, j, score;
let yourScore = 0;
let opponentScore = 0;
let count = 0;


function resetEverything(){
    playerYou.innerHTML = '';
    playerOpponent.innerHTML = '';
    yourFinalScore.innerHTML = '';
    opponentFinalScore.innerHTML = '';
    count = 0;
    score = 0;
    yourScore = 0;
    opponentScore = 0;
    playButton.disabled = false;
}

function runDice() {
    j = Math.floor(Math.random() * 6);
    return `<img src="images/product-images/dice-six-faces-${j + 1}.png" alt="">`;
}

function runSecondDice() {
    i = Math.floor(Math.random() * 6);
    return `<img src="images/product-images/dice-six-faces-${i + 1}.png" alt="">`;
}

class Player {

    constructor(name) {
        this.name = name;
    }

    describeSelf() {
        let string = `<h2>${this.name}<h2>`;
        string += `<ul>`;
        string += `<li>${runDice()}</li>`;
        string += `<li>${runSecondDice()}</li>`;
        string += `</ul>`;
        if (i === j && i != 0 && j != 0) {
            score = ((i+1)+(j+1))*2;
        } else if (i == 0 || j == 0) {
            score = 0;
        } else {
            score = (i+1)+(j+1);
        }
        string += `<h2>Score: ${score}</h2>`;
        return string;
    }
}

const player01 = new Player("john");
const player02 = new Player("jill");

playButton.addEventListener('click', function () {
    count ++;
    if (count <= 3 ){
    playerYou.innerHTML = player01.describeSelf();
    yourScore = yourScore + score;
    yourFinalScore.innerHTML = `<h2>Total Score: ${yourScore}</h2>`;

    playerOpponent.innerHTML = player02.describeSelf();
    opponentScore = opponentScore + score;
    opponentFinalScore.innerHTML = `<h2>Total Score: ${opponentScore}</h2>`;
    }
    
    if (count == 3)
    {
        if (yourScore > opponentScore){
        yourFinalScore.innerHTML += "You won";
        }
        else if (yourScore == opponentScore){
        yourFinalScore.innerHTML += "Tied";
        opponentFinalScore.innerHTML += "Tied";
        }
        else{
            opponentFinalScore.innerHTML += "You won";
        }
        playButton.disabled = true;
    }
})

resetButton.addEventListener('click', resetEverything);





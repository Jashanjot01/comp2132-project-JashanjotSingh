const pathToImages = "images/";

const delay = 800;

//Grabbing elements by Javascript
const playerYou = document.getElementById("playerYou");
const playerOpponent = document.getElementById("playerOpponent");
const yourFinalScore = document.getElementById("yourFinalScore");
const opponentFinalScore = document.getElementById("opponentFinalScore");

const playButton = document.getElementById("play");
const resetButton = document.getElementById("reset");

//Grabbing elements by jQuery
const $homePopup = $('#home-pop-up');
const $startGameButton = $("#start-pop-up");

const $resultPopup = $('#result-pop-up');
const $result = $('#result');
const $closeButton = $('#close-pop-up');

const $howToPlay = $('#howToPlay');
const $rules = $('#rules');

//Variables
let firstDieValue, secondDieValue, score;
let yourScore = 0;
let opponentScore = 0;
let count = 0;

//=-=-=-=-=-= Home-pop-up =-=-=-=-=-=

$homePopup.css('display', 'none');
$("#play").click(function () {
    $(this).data('clicked', true);
});

setTimeout(function () {

    if ($("#play").data('clicked')) {
        console.log("No pop-up");
    } else {
        $homePopup.fadeIn();
        $homePopup.css('display', 'block');
    }
}, delay);

$startGameButton.click(function () {
    $homePopup.fadeOut();
    $homePopup.css('display', 'none');
});

//=-=-=-=- Result popUp =-=-=-=-=

$resultPopup.css('display', 'none');

$closeButton.click(function () {
    $resultPopup.fadeOut();
    $resultPopup.css('display', 'none');
});

//=-=-=- Menu Animations =-=-=-=-=

$('#menu1').click(function () {
    $howToPlay.slideToggle();
})
$('#menu2').click(function () {
    $rules.slideToggle();
})

//=-=-=-=-=-=- Game =-=-=-=-=-=-=-=

//Function Roll 2 dices
function runDice() {
    firstDieValue = Math.floor(Math.random() * 6);
    return `<img src="images/product-images/dice-six-faces-${firstDieValue + 1}.png" alt="Dice ${firstDieValue + 1}" id='die'>`;
}

function runSecondDice() {
    secondDieValue = Math.floor(Math.random() * 6);
    return `<img src="images/product-images/dice-six-faces-${secondDieValue + 1}.png" alt="${secondDieValue + 1}" id='die'>`;
}

//Intitates a Player object who rolls the dices and does the scoring.
class Player {

    constructor(name) {
        this.name = name;
    }

    describeSelf() {
        let string = `<h2><img src="${pathToImages}${this.name}.png" alt="${this.name} id="profile">${this.name}</h2>`;
        string += `<ul id='dices'>`;
        string += `<li>${runDice()}</li>`;
        string += `<li>${runSecondDice()}</li>`;
        string += `</ul>`;
        if (firstDieValue === secondDieValue && firstDieValue != 0 && secondDieValue != 0) {
            score = ((firstDieValue + 1) + (secondDieValue + 1)) * 2;
        } else if (firstDieValue == 0 || secondDieValue == 0) {
            score = 0;
        } else {
            score = (firstDieValue + 1) + (secondDieValue + 1);
        }
        string += `<h2>Score in round ${count}: ${score}</h2>`;
        return string;
    }
}

// Defining 2 players here
const player01 = new Player('you');
const player02 = new Player('computer');

$('.youArea').css('display', 'none');
$('.opponentArea').css('display', 'none');

// Clicking of play button which calls the player object and displays final result
playButton.addEventListener('click', function () {

    // Count keeps count of number of rounds    
    if (count == 0) {
        $('.opponentArea').fadeIn(1500);
        $('.youArea').fadeIn(1500);
    }

    count++;
    if (count <= 3) {
        playerYou.innerHTML = player01.describeSelf();
        yourScore = yourScore + score;
        yourFinalScore.innerHTML = `<h2>Total Score: ${yourScore}</h2>`;

        playerOpponent.innerHTML = player02.describeSelf();
        opponentScore = opponentScore + score;
        opponentFinalScore.innerHTML = `<h2>Total Score: ${opponentScore}</h2>`;
    }

    if (count == 3) {
        if (yourScore > opponentScore) {
            console.log('You won');
            $result.html('');
            $result.append('<h2>Wohoo! 	&#127882;</h2>');
            $result.append('<p>You won !!!</p>')
            $resultPopup.css('display', 'block');
        }
        else if (yourScore == opponentScore) {
            console.log('Tied');
            $result.html('');
            $result.append('<h2>ohh!&#128542;</h2>');
            $result.append('<p>Its a tie ! <br> Better luck time</p>')
            $resultPopup.css('display', 'block');
        }
        else {
            console.log('You lost');
            $result.html('');
            $result.append('<h2>Alas!&#128542;</h2>');
            $result.append('<p>You lost ! <br> Better luck time</p>')
            $resultPopup.css('display', 'block');
        }
        playButton.disabled = true;
    }
})


// Reset Function reset everything for starting of a new game
function resetEverything() {
    $('.opponentArea').slideUp('slow');
    $('.youArea').slideUp('slow');
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

// ResetButton starts a new game
resetButton.addEventListener('click', resetEverything);





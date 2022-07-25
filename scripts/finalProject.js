const pathToImages = "images/";
const playerYou = document.getElementById("playerYou");
const playerOpponent = document.getElementById("playerOpponent");
const yourFinalScore = document.getElementById("yourFinalScore");
const opponentFinalScore = document.getElementById("opponentFinalScore");

// Home-pop-up

const delay = 800;

const $homePopup = $('#home-pop-up');
const $startGameButton = $("#start-pop-up");

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

// Result popUp

const $resultPopup = $('#result-pop-up');
const $result = $('#result');
const $closeButton = $('#close-pop-up');

$resultPopup.css('display', 'none');

$closeButton.click(function () {
    $resultPopup.fadeOut();
    $resultPopup.css('display', 'none');
});

// Menu Animations

const $howToPlay = $('#howToPlay');
const $rules = $('#rules');

$('#menu1').click(function () {
    $howToPlay.slideToggle();
})
$('#menu2').click(function () {
    $rules.slideToggle();
})

const playButton = document.getElementById("play");
const resetButton = document.getElementById("reset");

// Game

let i, j, score;
let yourScore = 0;
let opponentScore = 0;
let count = 0;

function runDice() {
    j = Math.floor(Math.random() * 6);
    return `<img src="images/product-images/dice-six-faces-${j + 1}.png" alt="Dice ${j + 1}" id='die'>`;
}

function runSecondDice() {
    i = Math.floor(Math.random() * 6);
    return `<img src="images/product-images/dice-six-faces-${i + 1}.png" alt="${i + 1}" id='die'>`;
}

class Player {

    constructor(name) {
        this.name = name;
    }

    describeSelf() {
        let string = `<h2><img src="${pathToImages}${this.name}.jpg" alt="${this.name} id="profile">${this.name}</h2>`;
        string += `<ul id='dices'>`;
        string += `<li>${runDice()}</li>`;
        string += `<li>${runSecondDice()}</li>`;
        string += `</ul>`;
        if (i === j && i != 0 && j != 0) {
            score = ((i + 1) + (j + 1)) * 2;
        } else if (i == 0 || j == 0) {
            score = 0;
        } else {
            score = (i + 1) + (j + 1);
        }
        string += `<h2>Score in round ${count}: ${score}</h2>`;
        return string;
    }
}

const player01 = new Player('jim');
const player02 = new Player("joe");

$('.youArea').css('display', 'none');
$('.opponentArea').css('display', 'none');

playButton.addEventListener('click', function () {
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

resetButton.addEventListener('click', resetEverything);





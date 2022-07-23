const playerYou = document.getElementById("playerYou");
const playerOpponent = document.getElementById("playerOpponent");
const yourFinalScore = document.getElementById("yourFinalScore");
const opponentFinalScore = document.getElementById("opponentFinalScore");

// Home-pop-up

const delay = 2000;

const $homePopup = $('#home-pop-up');
const $startGameButton = $("#start-pop-up");

$homePopup.css('display', 'none');
$("#play").click(function()
{
   $(this).data('clicked', true);
}); 

setTimeout(function () {

    if ($("#play").data('clicked')){
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
$resultPopup.css('display','none');

$closeButton.click(function () {
    $resultPopup.fadeOut();
    $resultPopup.css('display', 'none');
});

// Menu Animations

const $howToPlay = $('#howToPlay');
const $instructions = $('#instructions');

$howToPlay.css('display', 'none');
$instructions.css('display', 'none');

$('#menu1').click(function(){
    $howToPlay.slideToggle();
})
$('#menu2').click(function(){
    $instructions.slideToggle();
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
 
const player01 = new Player("John");
const player02 = new Player("Computer");

playButton.addEventListener('click', function () {
    $('#playbutton').click(function(){
        $('#playerYou').slideIn();
        $('#yourFinalScore').slideIn();
        $('#playerOpponent').slideIn();
        $('#opponentFinalScore').slideIn();
    })
    
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
            console.log('You won');
            $result.html('');
            $result.append('<h2>Congratulations!</h2>');
            $result.append('<p>You won !</p>')
            $resultPopup.css('display','block');
        }
        else if (yourScore == opponentScore){
        console.log('Tied');
        $result.html('');
        $result.append('<h2>ohh!</h2>');
        $result.append('<p>Its a tie ! <br> Better luck time</p>')
        $resultPopup.css('display','block');
        }
        else{
            console.log('You lost');
            $result.html('');
            $result.append('<h2>Sad!</h2>');
            $result.append('<p>You lost ! <br> Better luck time</p>')
            $resultPopup.css('display','block');
        }
        playButton.disabled = true;
    }
})

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

resetButton.addEventListener('click', resetEverything);





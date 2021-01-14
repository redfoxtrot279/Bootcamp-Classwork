//javascript goes here
var startButton = document.querySelector('.start-button');
var timerCountEl = document.querySelector('.timer-count');
var secondsRemainingH3 = document.querySelector('h3');
var wordBlanksEl = document.querySelector('word-blanks');

// class start-button = start button

//timer class = timer-count

var words = ['string', 'number', 'boolean', 'arrays', 'function'];
var secondsLeft = 10;
var wins = 0;
var losses = 0;
var wordToGuess = '';

function pickword() {
    var randNum = Math.floor(Math.random() *
    var wordToGuess = words[randNum];
    console.log('randNum: ', randNum, )'\nwordToGuess: ', wordToGuess;
    
}

startButton.addEventListener('click', function(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        console.log('secondsLeft: ', secondsLeft);
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timerCountEl.textcontent = 'You lose!';
        } else {
            timerCountEl.textContent = secondsLeft
        }

    }, 1000);
});
let score = 
JSON.parse(localStorage.getItem('score')) || {
wins:0,
losses:0,
ties:0,
};

updateScoreElement();

playGame();

if (!score) {
  score ={
    wins:0,
    losses:0,
    ties:0,
  }
}
let isAutoPlaying = false;
let intervalId; 

function autoPlay(){
  if(!isAutoPlaying ){
    intervalId = setInterval(() => {
    const playerMove = pickComputerMove();
    playGame(playGame); 
  }, 1000);
  isAutoPlaying = true; 
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

updateScoreElement();

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {playGame('rock');
});

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {playGame('paper');
});

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {playGame('scissors');
});
 document.querySelector('.js-auto-play-button')
   .addEventListener('click', () => {playGame('scissors');
});

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {playGame('scissors');
});

document.body.addEventListener('keydown',(event) => {
if (event.key === 'r') {
  playGame('rock');
}
else if(event.key ==='p') {
  playGame('paper');
}
else if(event.key ==='s') {
  playGame('scissors');
}
});

function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'YOU LOST!!';
  }
  else if (computerMove === 'paper') {
    result = 'YOU WON!!'; 
  }
  else if (computerMove === 'scissors') {
    result =  'TIE';
  }
}

if (playerMove === 'paper') {
  if (computerMove === 'rock') {
    result = 'YOU LOST!!';
  }
  else if (computerMove === 'scissors') {
    result = 'YOU WON!!'; 
  }
  else if (computerMove === 'paper') {
    result =  'TIE';
  }
}

if (playerMove === 'rock') {
  if (computerMove === 'scissors') {
    result = 'YOU WON!!';
  }
  else if (computerMove === 'paper') {
    result = ' YOU LOST!!'; 
  }
  else if (computerMove === 'rock') {
    result =  'TIE';
  }
}

if (result === 'YOU WON!!') {
  score.wins += 1;
}
else if (result === 'TIE') {
  score.ties +=1;
}
else if (result === 'YOU LOST!!') {
  score.losses += 1;
}
localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').
innerHTML = result;

document.querySelector('.js-moves').
innerHTML = `You ${playerMove} - ${computerMove} computer`; 
}

function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML= `Wins: ${score.wins} ,Losses: ${score.losses}, Ties: ${score.ties}`; 
}
pickComputerMove();


function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1/3){
computerMove = 'rock';
}
else if (randomNumber >= 1/3 && randomNumber < 2/3){
computerMove = 'paper';
}
else if (randomNumber >= 2/3 && randomNumber < 1){
computerMove = 'scissors';
}

return computerMove;
}  
alert(`You picked ${playerMove}. Computer picked ${computerMove}. The result is ${result}`); 
    let computerMove = ' ';
    function pickPlayerMove(){}
      const randomNumber = Math.random();
      if (randomNumber >= 0 && randomNumber < 1/3) {
        playerMove ='Rock'
      }
      else if (randomNumber >= 1/3 && randomNumber <2/3) {
        playerMove ='Paper'
      }
      else if (randomNumber >= 2/3 && randomNumber <1) {
        playerMove ='Scissors'
      }

     if (playerMove === 'Rock' && computerMove ==='Rock') {
      alert(`You picked: ${playerMove}. Computer picked: ${computerMove} The result is: ${result}`);
      }
      else if(playerMove === 'Paper' && computerMove ==='Paper') {
      alert(`You picked: ${playerMove}. Computer picked ${computerMove} The result is: ${result}`);
      }
      else if(playerMove === 'Scissors' && computerMove ==='Scissors') {
      alert(`You picked: ${playerMove}. Computer picked: ${computerMove} The result is: ${result}`);
      }
      console.log('computerMove');
    


# Projects on DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-codeczar)

# Solution Code

## Project 1 - Color Scheme Changer

```Javascript
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector("body");

    buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.id){
        body.style.backgroundColor = e.target.id;
        }
    })
    })
```

## Project 2 - BMI Calculator

```javascript
const form = document.querySelector('form');
  // This use-case i.e, before submitting values, will return empty values
  // const height = parseInt(document.querySelector('#height').value);
  // const weight = parseInt(document.querySelector('#weight').value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = "Enter a valid height";
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = "Enter a valid weight";
  }else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      //show the result
      if(bmi < 18.6){
        result.innerHTML = `Your BMI is: <span>${bmi}</span> ~ You're under-weight, try to put on some weight!`;
      } else if( bmi >= 18.6 && bmi < 24.9){
        result.innerHTML = `Your BMI is: <span>${bmi}</span> ~ You're perfectly in control of your life, well done!`;
      } else {
        result.innerHTML = `Your BMI is: <span>${bmi}</span> ~ Alert!!! You're OVERWEIGHT!!!`;
      }
  }
  
})

```

## Project 3 - Digital Clock

```javascript
const clock = document.getElementById('clock');
const btnStart=document.querySelector('.start');
const btnStop=document.querySelector('.stop');

// setInterval(() => {
//   const date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000)

let startClock;

btnStart.addEventListener('click', () => {

  btnStart.classList.add('start-active');
  btnStop.classList.remove('stop-active');

  startClock = setInterval(() => {
    const date = new Date();
      clock.innerHTML = date.toLocaleTimeString();
  }, 1000)
});

btnStop.addEventListener('click', () => {
  clearInterval(startClock);
  btnStart.classList.remove('start-active');
  btnStop.classList.add('stop-active');
})
```

## Project 4 - Guess The Number

```javascript
let randomNum = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector('#submit');
let userInput = document.querySelector('#guessField');
let prevGuesses = document.querySelector('.guesses');
let leftAttempts = document.querySelector('.leftAttempts');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

let p = document.createElement('p');
let guessArray = [];
let attempt = 0; // 1 to 10
let playGame = true;

if(playGame){
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number");
    userInput.value = '';
  }else if(guess < 1){
    alert("Please enter a number greater than 1");
  }else if(guess > 100){
    alert("Please enter a number less than 100");
  }else {
    guessArray.push(guess);
    if(attempt === 5){
      displayGuess(guess);
      displayMsg(`Game Over!!! Your last guess was: ${randomNum}`);
      abortGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess){
  if(guess === randomNum){
    displayMsg(`Spot On!!! WINNER!!! `);
    abortGame();
  }else if(guess < randomNum){
    displayMsg(`Try Again! Your guess was TOO LOW!`)
  }else if(guess > randomNum){
    displayMsg(`Try Again! Your guess was TOO HIGH!`)
  }
}
function displayGuess(guess){
  userInput.value = '';
  prevGuesses.innerHTML += `${guess} `;
  attempt++;
  leftAttempts.innerHTML = `${5 - attempt}`
}
function displayMsg(message){
  lowOrHi.innerHTML = `<h3>${message}</h3>`
}
function abortGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame(){
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', (e) => {
    randomNum = parseInt(Math.random() * 100 + 1);
    guessArray= [];
    attempt = 0;
    prevGuesses.innerHTML = '';
    leftAttempts.innerHTML = `${5 - attempt}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMsg('');
    playGame = true;
  })
}


```

## Project 6 - Change background color infinitely

```javascript
let timer;

const randomColor = () => {
    const hexCode = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hexCode[Math.floor(Math.random() * 16)];
    }
    return color;        
}

let color = randomColor();

const changeBackgroundColor = (color) => {
    document.querySelector('body').style.backgroundColor = randomColor();
}

document.querySelector('#start').addEventListener('click', () => {
    if(!timer){
      timer = setInterval(changeBackgroundColor, 500, color);
    }
});

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(timer); 
    timer = null;
})
```
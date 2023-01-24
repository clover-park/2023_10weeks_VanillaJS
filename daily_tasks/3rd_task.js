const numGame = document.querySelector("#form");
const inputMaxNum = numGame.querySelector("#generateNum");
const inputNum = numGame.querySelector("#inputNum");
const compareNum = document.querySelector("#compare");
const result = document.querySelector("#result");

const HIDDEN_CLASSNAME = "hidden";
//대문자로 쓰는 관습이 있음.
//보통 string만 저장하는 변수는 대문자로 표기
function onSubmit(event) {
  event.preventDefault(); //브라우저가 하는 기본 행동 막기
  const guessNum = parseInt(inputNum.value);
  const maxNum = inputMaxNum.value;
  const randomNum = parseInt(Math.ceil(Math.random() * maxNum));
  compareNum.innerText = `You chose: ${guessNum} ,the machine chose: ${randomNum}`;
  if (guessNum === randomNum) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
  compareNum.classList.remove(HIDDEN_CLASSNAME);
  result.classList.remove(HIDDEN_CLASSNAME);
}

numGame.addEventListener("submit", onSubmit);

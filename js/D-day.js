const text = document.querySelector("#countdownText");
const countdown = document.querySelector("#countdown");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function getClock() {
  const tripDate = new Date("Feburary 13, 2023 00:00:00");
  const today = new Date();

  const diffTime = Math.abs(tripDate - today);
  const daysLeft = Math.floor(diffTime / day);
  const hoursLeft = Math.floor((diffTime % day) / hour);
  const minutesLeft = Math.floor((diffTime % hour) / minute);
  const secondsLeft = Math.floor((diffTime % minute) / second);

  countdown.innerText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s left`;
}

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreetings(savedUsername);
  text.classList.remove(HIDDEN_CLASSNAME);
  countdown.classList.remove(HIDDEN_CLASSNAME);
}

getClock();
setInterval(getClock, 1000);

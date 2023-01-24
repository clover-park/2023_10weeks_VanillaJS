const countdown = document.querySelector("#countdown");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function getClock() {
  const christmas = new Date("December 25, 2023 00:00:00");
  const today = new Date();

  const diffTime = Math.abs(christmas - today);
  const daysLeft = Math.floor(diffTime / day);
  const hoursLeft = Math.floor((diffTime % day) / hour);
  const minutesLeft = Math.floor((diffTime % hour) / minute);
  const secondsLeft = Math.floor((diffTime % minute) / second);

  countdown.innerText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
}
getClock(); //새로고침하자마자 1초 기다리지 않고 즉시 함수 실행
setInterval(getClock, 1000);

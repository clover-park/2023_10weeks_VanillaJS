const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock(); //새로고침하자마자 1초 기다리지 않고 즉시 함수 실행
setInterval(getClock, 1000);

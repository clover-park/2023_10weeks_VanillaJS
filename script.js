//CONST, LET
const a = 5; 
const b = 2;
let myName = 'clover';
//constat=상수, 값을 나중에 업데이트 할 수 없음.
//let : 처음 변수 생성할 때'만' 씀. 
//      값을 나중에 업데이트 할 수 있음. -> let안 씀.
//보통 const를 기본으로 쓰고, variable을 업데이트하고 싶다면 let을 쓴다.
//var이라는 것도 있는데, 재선언&재할당 가능하지만 never use...
console.log(a + b); //print
console.log(a * b);
console.log(a / b);
myName = 'toby'; //-> 값 바꿀 때는 let안 씀~!
console.log('hello ' + myName);
//BOOLEAN
const amIFat = true;
let something;
console.log(something);//undefined로 나옴.
//variable은 존재하나, 값 할당을 안 함.
console.log(amIFat);
//값이 없을 때는 null
//ARRAYS
const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
//add one more day to the array->push
console.log(daysOfWeek[5]); //-> sat
daysOfWeek.push('sun');
console.log(daysOfWeek);
//OBJECTS(설명이 필요한 데이터)
const player = {
  name:'clover',
  points:10,
  fat:true
};//a object
console.log(player);
console.log(player.name);
//= console.log(player['name']);
console.log(player['points']);
player.fat = false;
//const인데, 값 재정의 할 수 있나? ㅇㅇproperty 재정의는 ok.
//const전체(object)를 바꾸지 않는 이상 괜찮음.
player.lastName = 'park';//값 추가
player.points = player.points + 10;
console.log(player);
//FUNCTIONS
function sayHello(nameOfPerson, age){
  console.log('hello my name is', nameOfPerson, 'and i am', age);
}
sayHello('nico', 30);

function plus(firstNum, secondNum){
  console.log(firstNum + secondNum);
}
console.log(firstNum); //->에러남. 인자는 함수밖에 존재 불가 
plus(1, 2);
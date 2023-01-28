const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

let toDosarray = [];

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoArray = {
    text: newToDo,
    id: Date.now(),
  };
  toDosarray.push(newToDoArray);
  createToDo(newToDoArray);
  saveToDo();
}

function createToDo(newToDo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  list.appendChild(span);
  list.appendChild(button);
  button.addEventListener("click", removeToDo);
  span.innerText = newToDo.text;
  todoList.appendChild(list);
}

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDosarray));
}

function removeToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//반복되는 건 변수로 fix
//JSON : API로부터 데이터를 가져와 데이터를 좀 더 보기 쉽게 object 형식으로 만들어진 파일
if (savedToDos !== null) {
  const parsedToDo = JSON.parse(savedToDos);
  toDosarray = parsedToDo;
  // localStorage에 toDo 들이 있으면
  // toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원하면된다.
  parsedToDo.forEach(createToDo); //그 array에 있는 각각의 item에 대해 실행
}

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

let toDosarray = [];

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };
  toDosarray.push(newToDoObject);
  //새로 생성한 todo를 array에 push
  createToDo(newToDoObject);
  saveToDos();
}

function createToDo(newToDo) {
  const list = document.createElement("li");
  list.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", removeToDo);
  todoList.appendChild(list);
  list.appendChild(span);
  list.appendChild(button);
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDosarray));
  //새로 생성한 todo를 저장한 array를 localStorage에 저장
  //localStorage에 array는 저장할 수 없어요.
  //string만 저장 가능^^
}

function removeToDo(event) {
  const toBeRemoved = event.target.parentElement;
  //이걸 쓰지 않으면 어떤 li를 제거할지 모름.
  //parentElement를 쓰는 이유: list 전체를 삭제해야하기 때문에
  toBeRemoved.remove();
  toDosarray = toDosarray.filter(
    (toDosarray) => toDosarray.id !== parseInt(toBeRemoved.id)
  );
  saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//반복되는 건 변수로 fix
//JSON : API로부터 데이터를 가져와 데이터를 좀 더 보기 쉽게 object 형식으로 만들어진 파일
if (savedToDos !== null) {
  const parsedToDo = JSON.parse(savedToDos);
  toDosarray = parsedToDo;
  // localStorage에 toDo 들어 있으면
  // toDosarray에 parsedToDos를 넣어서 전에 있던 toDo들을 복원하면된다.
  parsedToDo.forEach(createToDo); //그 array에 있는 각각의 item에 대해 createToDo함수 실행
}

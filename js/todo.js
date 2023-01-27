const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  createToDo(newToDo);
}

function createToDo(newToDo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  list.appendChild(span);
  span.innerText = newToDo;
  todoList.appendChild(list);
}

todoForm.addEventListener("submit", handleToDoSubmit);

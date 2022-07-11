const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");
// same with document.querySelector("#todo-form input");
const TODO = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODO, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    // remove li from Local Storage!!
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}

function handelTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    saveToDos();
    paintTodo(newTodoObj);
}

todoForm.addEventListener("submit", handelTodoSubmit)
const savedTodos = localStorage.getItem(TODO);
if(savedTodos !== null) {
    toDos = JSON.parse(savedTodos);
    toDos.forEach(paintTodo);
    // ArrowFunction
    // .forEach((item) => console.log("Hello", item));
}

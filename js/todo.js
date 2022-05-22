const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [ ];

function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(typeof li.id);
    toDos = toDos.filter(todo => {return todo.id !== parseInt(li.id)});
    saveTodo();
    li.remove();
}

function saveTodo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = 'x';
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    const newTodoObj =
        {text:newTodo, id:Date.now()}
    toDos.push(newTodoObj);
    saveTodo();
    paintToDo(newTodoObj);
    // const li = document.createElement("li");
    // toDoList.append(li);
    // li.innerHTML = newTodo;
}

toDoForm.addEventListener("submit",handleToDoSubmit);



const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
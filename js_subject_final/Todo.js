const toDoForm = document.getElementById("todo-form");
const todoinput = toDoForm.querySelector("#todo-form input");
const toDolist = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos()
{
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deletetodo(event)
{
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
}

function painttodo(newtodo)
{
    const li = document.createElement("li");
    li.id = newtodo.id;
    const span = document.createElement("span");
    span.innerText = newtodo.text;
    const button = document.createElement("button");
    button.innerText = "X";

    button.addEventListener("click",deletetodo);
    li.appendChild(span);
    li.appendChild(button);

    toDolist.appendChild(li);

}

function handlerTodosubmit(event)
{
    event.preventDefault();
    const newtodo = todoinput.value;
    todoinput.value = "";
    const newTodoObj = {
        text: newtodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    painttodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handlerTodosubmit);


const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parasedToDos = JSON.parse(savedTodos)
    toDos = parasedToDos;
    parasedToDos.forEach(painttodo);
}


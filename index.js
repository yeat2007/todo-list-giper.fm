let tasks = [];

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if(savedTasks){
       tasks = JSON.parse(savedTasks);
    renderTasks()
    }  
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function addTask(){
    const input = document.getElementById("task-input");
    const text = input.value.trim();

    if(text !== ""){
        tasks.push({ text, done: false});
        saveTasks();
        renderTasks();
    }

}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}


function markTask(){
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();

}

function renderTasks(){
    const list = document.getElementById("task-list");
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        
        const checkbox = document.createElement("li");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.addEventListener("изменить", () => markTask(index));

        const span = document.createElement("span");
        span.textContent = task.text;
        span.style.textDecoration= task.done ? "line-through" : "none";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить задачу";
        deleteButton.addEventListener("click", ()=> deleteTask(index));
        
        li.appendChild(checkbox)
        li.appendChild(span)
        li.appendChild(deleteButton)
        list.appendChild(li)
    });
}

loadTasks();






document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") return;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Prevent duplicate tasks
    if (tasks.some(task => task.text === taskText)) {
        alert("Task already exists!");
        return;
    }

    tasks.push({ text: taskText, completed: false });
    updateLocalStorage(tasks);
    
    taskInput.value = "";
    loadTasks();
}

function toggleTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[index].completed = !tasks[index].completed;
    updateLocalStorage(tasks);
    loadTasks();
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    updateLocalStorage(tasks);
    loadTasks();
}

function updateLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = task.text;
        span.classList.toggle("completed", task.completed);
        span.addEventListener("click", () => toggleTask(index));

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", () => deleteTa/sk(index));

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
    
}


const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const filterButtons = document.querySelectorAll(".filters button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(filter = "all") {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("task-item", `priority-${task.priority.toLowerCase()}`);
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleComplete(${index})">
      <div class="task-info">
        <h3>${task.name}</h3>
        <p>Due: ${task.dueDate} | Priority: ${task.priority}</p>
      </div>
      <div class="actions">
        <i class="fas fa-trash" onclick="deleteTask(${index})"></i>
      </div>
      <button class="delete" onclick="deleteTasks()"></button>
    `;

    taskList.appendChild(li);

    li.querySelector(".delete").addEventListener("click", () => {
      li.remove();
      deleteTask(index)
    })
  });
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("task-name").value.trim();
  const priority = document.getElementById("priority").value;
  const dueDate = document.getElementById("due-date").value;

  if (!name || !dueDate) return;

  tasks.push({
    name,
    priority,
    dueDate,
    completed: false
  });

  saveTasks();
  renderTasks();

  taskForm.reset();
});

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderTasks(button.dataset.filter);
  });
});

renderTasks();


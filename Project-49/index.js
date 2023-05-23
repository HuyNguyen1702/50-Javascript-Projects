const form = document.getElementById("form");
const input = document.getElementById("input");
const todoList = document.getElementById("todos");

// Load from LocalStorage
const todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  // For reload from localStorage
  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");

    // Load from localStorage
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLocalStorage();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLocalStorage();
    });

    todoList.appendChild(todoEl);
    input.value = "";

    updateLocalStorage();
  }
}

function updateLocalStorage() {
  todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todoEl) =>
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    })
  );

  localStorage.setItem("todos", JSON.stringify(todos));
}

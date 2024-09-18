// Function to load todos from localStorage
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
}

// Function to save todos to localStorage
function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to add a new todo
function addTodo(userId, userName, userSal) {
  const todos = loadTodos();
  todos.push({ userId, userName, userSal });
  saveTodos(todos);
  displayTodos();
}

// Function to delete a todo
function deleteTodo(index) {
  const todos = loadTodos();
  todos.splice(index, 1); // Remove the todo at the given index
  saveTodos(todos);
  displayTodos();
}

// Function to display todos
function displayTodos() {
  const todos = loadTodos();
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = `ID: ${todo.userId}, Name: ${todo.userName}, Salary: ${todo.userSal} `;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodo(index);

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

// Function to handle form submission
function submitForm() {
  const userId = document.getElementById("userId").value;
  const userName = document.getElementById("userName").value;
  const userSal = document.getElementById("userSal").value;

  if (userId && userName && userSal) {
    addTodo(userId, userName, userSal);
    document.getElementById("todoForm").reset();
  }
}

// Initial call to display todos
displayTodos();

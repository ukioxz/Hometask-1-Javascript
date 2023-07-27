// const db = require("../../db/db.json");
import myJson from "../db/db.json" assert { type: "json" };

// 👇️ {
//   name: 'Alice',
//   country: 'Austria',
//   tasks: [ 'develop', 'design', 'test' ],
//   age: 30
// }
console.log(myJson.todos);

console.log(myJson.todos[0].name); // 👉️ "Alice"

let addButton = document.querySelector(".add-btn");
// let todoItem = document.querySelector(".todo-item");
let todoContainer = document.querySelector(".todo-container");
let inputTodoName = document.querySelector(".input-todo-name");
let inputTodoCreated = document.querySelector(".input-todo-created");
let inputTodoCategory = document.querySelector(".input-todo-category");
let inputTodoContent = document.querySelector(".input-todo-content");
let inputTodoDates = document.querySelector(".input-todo-dates");

addButton.addEventListener("click", () => {
  //   let div = document.createElement("div");
  // div.innerText = document.getElementById("getText").innerText;
  //   todoItem.textContent = inputTodo.value;
  //   todoContainer.appendChild(todoItem);
  let todoItemContainer = document.createElement("div");
  let textName = document.createElement("div");
  let textCreated = document.createElement("div");
  let textCategory = document.createElement("div");
  let textContent = document.createElement("div");
  let textDates = document.createElement("div");

  let newTodo = {
    name: inputTodoName.value,
    created: inputTodoCreated.value,
    category: inputTodoCategory.value,
    content: inputTodoContent.value,
    dates: inputTodoDates.value,
  };
  myJson.todos.push(newTodo);
  console.log(myJson.todos);

  todoItemContainer.classList.add("todo-item");

  textName.classList.add("name-item");
  textName.append(inputTodoName.value);

  textCreated.classList.add("created-item");
  textCreated.append(inputTodoCreated.value);

  textCategory.classList.add("category-item");
  textCategory.append(inputTodoCategory.value);

  textContent.classList.add("content-item");
  textContent.append(inputTodoContent.value);

  textDates.classList.add("dates-item");
  textDates.append(inputTodoDates.value);

  todoContainer
    .appendChild(todoItemContainer)
    .append(textName, textCreated, textCategory, textContent, textDates);
});

import myJson from "../db/db.json" assert { type: "json" };
// import { formattedDate } from "../src/date.js";
import { createTodoItem } from "./createTodo.js";

let addButton = document.querySelector(".add-btn");
// let todoItem = document.querySelector(".todo-item");
let todoContainer = document.querySelector(".todo-container");
let inputTodoName = document.querySelector(".input-todo-name");
// let inputTodoCreated = document.querySelector(".input-todo-created");
let inputTodoCategory = document.querySelector(".input-todo-category");
let inputTodoContent = document.querySelector(".input-todo-content");
let inputTodoDates = document.querySelector(".input-todo-dates");
let dropdownBox = document.querySelector(".category-list");

inputTodoCategory.addEventListener("click", () => {
  dropdownBox.style.display = "block";
});
dropdownBox.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    inputTodoCategory.value = event.target.textContent;
    dropdownBox.style.display = "none";
  }
});
// deleteBtn.addEventListener("click", () => {
//   console.log("delete");
// });

addButton.addEventListener("click", () => {
  const selectedDate = new Date(inputTodoDates.value);
  const currentDate = new Date();

  //   let div = document.createElement("div");
  // div.innerText = document.getElementById("getText").innerText;
  //   todoItem.textContent = inputTodo.value;
  //   todoContainer.appendChild(todoItem);

  // let todoItemContainer = document.createElement("div");
  // let textName = document.createElement("div");
  // let textCreated = document.createElement("div");
  // let textCategory = document.createElement("div");
  // let textContent = document.createElement("div");
  // let textDates = document.createElement("div");

  // let newTodo = {
  //   name: inputTodoName.value,
  //   // created: inputTodoCreated.value,
  //   category: inputTodoCategory.value,
  //   content: inputTodoContent.value,
  //   dates: inputTodoDates.value,
  // };
  // myJson.todos.push(newTodo);
  // console.log(myJson.todos);

  if (selectedDate < currentDate) {
    alert("Виберіть дату, яка не є минулою.");
    inputTodoDates.value = "";
  } else {
    createTodoItem();
    // todoItemContainer.classList.add("todo-item");

    // textName.classList.add("name-item");
    // textName.append(inputTodoName.value);

    // textCreated.classList.add("created-item");
    // textCreated.append(formattedDate);

    // textCategory.classList.add("category-item");
    // textCategory.append(inputTodoCategory.value);

    // textContent.classList.add("content-item");
    // textContent.append(inputTodoContent.value);

    // textDates.classList.add("dates-item");
    // textDates.append(inputTodoDates.value);

    // todoContainer
    //   .appendChild(todoItemContainer)
    //   .append(textName, textCreated, textCategory, textContent, textDates);
  }
});

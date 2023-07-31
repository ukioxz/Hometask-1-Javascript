import { createTodoItem } from "./createTodo.js";

let addButton = document.querySelector(".add-btn");
let todoContainer = document.querySelector(".todo-container");
let inputTodoName = document.querySelector(".input-todo-name");
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

addButton.addEventListener("click", () => {
  const selectedDate = new Date(inputTodoDates.value);
  const currentDate = new Date();

  if (selectedDate < currentDate) {
    alert("Виберіть дату, яка не є минулою.");
    inputTodoDates.value = "";
  } else {
    createTodoItem();
  }
});
export { addButton };

import { formattedDate } from "./date.js";
let todoContainer = document.querySelector(".todo-container");
let inputTodoName = document.querySelector(".input-todo-name");
// let inputTodoCreated = document.querySelector(".input-todo-created");
let inputTodoCategory = document.querySelector(".input-todo-category");
let inputTodoContent = document.querySelector(".input-todo-content");
let inputTodoDates = document.querySelector(".input-todo-dates");

const createTodoItem = () => {
  let todoContainer = document.querySelector(".todo-container");
  let todoItemContainer = document.createElement("div");
  let textName = document.createElement("div");
  let textCreated = document.createElement("div");
  let textCategory = document.createElement("div");
  let textContent = document.createElement("div");
  let textDates = document.createElement("div");
  let deleteBtn = document.createElement("div");
  let archiveBtn = document.createElement("div");
  let editBtn = document.createElement("div");
  todoItemContainer.classList.add("todo-item");

  textName.classList.add("name-item");
  textName.append(inputTodoName.value);

  textCreated.classList.add("created-item");
  textCreated.append(formattedDate);

  textCategory.classList.add("category-item");
  textCategory.append(inputTodoCategory.value);

  textContent.classList.add("content-item");
  textContent.append(inputTodoContent.value);

  textDates.classList.add("dates-item");
  textDates.append(inputTodoDates.value);

  editBtn.classList.add("edit-btn");
  editBtn.append("Edit");

  archiveBtn.classList.add("archiv-btn");
  archiveBtn.append("Archive");

  deleteBtn.classList.add("delete-btn");
  deleteBtn.append("Delete");

  deleteBtn.addEventListener("click", () => {
    todoItemContainer.remove();
  });

  todoContainer
    .appendChild(todoItemContainer)
    .append(
      textName,
      textCreated,
      textCategory,
      textContent,
      textDates,
      editBtn,
      archiveBtn,
      deleteBtn
    );
};
export { createTodoItem };

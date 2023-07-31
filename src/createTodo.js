import { formattedDate } from "./date.js";
let todoContainer = document.querySelector(".todo-container");
let inputTodoName = document.querySelector(".input-todo-name");
// let inputTodoCreated = document.querySelector(".input-todo-created");
let inputTodoCategory = document.querySelector(".input-todo-category");
let inputTodoContent = document.querySelector(".input-todo-content");
let inputTodoDates = document.querySelector(".input-todo-dates");

let amountActiveTask = document.querySelector(".amount-active-task");
let amountArchiveTask = document.querySelector(".amount-archived-task");
let nArchiveTask = 0;
let nActiveTask = 0;
let amountActiveThought = document.querySelector(".amount-active-thought");
let amountArchiveThought = document.querySelector(".amount-archived-thought");
let nArchiveThought = 0;
let nActiveThought = 0;
let amountActiveIdea = document.querySelector(".amount-active-idea");
let amountArchiveIdea = document.querySelector(".amount-archived-idea");
let nArchiveIdea = 0;
let nActiveIdea = 0;

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

  archiveBtn.addEventListener("click", () => {
    if (textCategory.textContent == "Task") {
      console.log(textCategory.textContent);
      nArchiveTask++;
      amountArchiveTask.textContent = nArchiveTask;
      nActiveTask--;
      amountActiveTask.textContent = nActiveTask;
    } else if (textCategory.textContent == "Random Thought") {
      console.log(textCategory.textContent);
      nArchiveThought++;
      amountArchiveThought.textContent = nArchiveThought;
      nActiveThought--;
      amountActiveThought.textContent = nActiveThought;
    } else if (textCategory.textContent == "Idea") {
      console.log(textCategory.textContent);
      nArchiveIdea++;
      amountArchiveIdea.textContent = nArchiveIdea;
      nActiveIdea--;
      amountActiveIdea.textContent = nActiveIdea;
    }
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

  if (textCategory.textContent == "Task") {
    console.log(textCategory.textContent);
    nActiveTask++;
    amountActiveTask.textContent = nActiveTask;
  } else if (textCategory.textContent == "Random Thought") {
    console.log(textCategory.textContent);
    nActiveThought++;
    amountActiveThought.textContent = nActiveThought;
  } else if (textCategory.textContent == "Idea") {
    console.log(textCategory.textContent);
    nActiveIdea++;
    amountActiveIdea.textContent = nActiveIdea;
  }
};
export { createTodoItem };

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
let todoItem = document.querySelector(".todo-item");
let todoContainer = document.querySelector(".todo-container");
addButton.addEventListener("click", () => {
  //   let div = document.createElement("div");
  // div.innerText = document.getElementById("getText").innerText;
  todoItem.textContent = "lala";
  todoContainer.appendChild(todoItem);
});

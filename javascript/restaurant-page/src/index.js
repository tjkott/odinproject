// index.js
import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";

// selecting the buttons.
const anchor = document.querySelector("#content");

// fucntion for clearing page.
const clearFunction = () => {
  anchor.textContent = "";
};

// put one listener for all buttons in <nav>
document.querySelector("nav").addEventListener("click", (event) => {
  if (event.target.id === "home") {
    clearFunction();
    loadHome();
  }
  if (event.target.id === "menu") {
    clearFunction();
    loadMenu();
  }
});

loadHome();
console.log("Served!");

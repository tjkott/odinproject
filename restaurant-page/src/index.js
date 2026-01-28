// index.js
import "./styles.css";

const herocard = document.createElement("div");
herocard.classList.add("herocard");

const headline = document.createElement("h1");
headline.textContent = "Look how great this restaurant is";
headline.classList.add("headline"); // for css styling (now can do .headline {})

const content = document.createElement("p");
content.textContent = "Content wrapped in a new div.";

// NESTING
herocard.appendChild(headline);
herocard.appendChild(content);

const anchor = document.querySelector("#content");
anchor.appendChild(herocard);

console.log("Served!");

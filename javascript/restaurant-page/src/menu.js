export const loadMenu = () => {
  const anchor = document.querySelector("#content");

  const container = document.createElement("div"); // main container/card for the page.
  container.classList.add("menu-container");

  const headline = document.createElement("h1");
  headline.textContent = "MENU";

  const content = document.createElement("p");
  content.textContent = "Menu content";

  //nest
  container.appendChild(headline);
  container.appendChild(content);

  anchor.appendChild(container); // put container in the anchor
  // draw a full contianer rather than an empty container first.
};

let gifElement = document.createElement("img");
let gifContainer = document.querySelector(".gif-container");
let floatsBtn = document.querySelector("#floats");
let networkingBtn = document.querySelector("#networking");
let shayBtn = document.querySelector("#shay");
let flexboxBtn = document.querySelector("#flexbox");
let breakBtn = document.querySelector("#break");
let javascriptBtn = document.querySelector("#javascript");
let grindBtn = document.querySelector("#grind");
let farewellBtn = document.querySelector("#bye");

floatsBtn.addEventListener("click", () => {
  gifElement.src = "images/floats.gif";
  gifContainer.appendChild(gifElement);
});

networkingBtn.addEventListener("click", () => {
  gifElement.src = "images/networking.gif";
  gifContainer.appendChild(gifElement);
});

shayBtn.addEventListener("click", () => {
  gifElement.src = "images/shay.gif";
  gifContainer.appendChild(gifElement);
});

flexboxBtn.addEventListener("click", () => {
  gifElement.src = "images/flexbox.gif";
  gifContainer.appendChild(gifElement);
});

breakBtn.addEventListener("click", () => {
  gifElement.src = "images/break.gif";
  gifContainer.appendChild(gifElement);
});

javascriptBtn.addEventListener("click", () => {
  gifElement.src = "images/javascript.gif";
  gifContainer.appendChild(gifElement);
});

grindBtn.addEventListener("click", () => {
  gifElement.src = "images/grind.gif";
  gifContainer.appendChild(gifElement);
});

farewellBtn.addEventListener("click", () => {
  gifElement.src = "images/bye.gif";
  gifContainer.appendChild(gifElement);
});

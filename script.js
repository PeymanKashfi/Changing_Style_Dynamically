"use strict";

document.querySelector(".btn-colour").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#0000ff";
});

document.querySelector(".btn-colour").addEventListener("click", () => {
  let x = document.createElement("label");
  let t = document.createTextNode("Test!");
  x.appendChild(t);
  document.body.appendChild(x);
  document.querySelector("body").appendChild();
});
/*const changeBColour = () => {
  /*let x = document.createElement("label");
  let t = document.createTextNode("Test!");
  x.appendChild(t);
  document.body.appendChild(x);
  document.querySelector("body").style.backgroundColor = "#ff0A22";
  //document.body.style.backgroundColor = "red";
};*/

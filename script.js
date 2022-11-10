"use strict";

const changeBackgroundColour = function () {
  document.querySelector("body").style.backgroundColor = "#ff0000";
};

const addTestLabel = function () {
  let x = document.createElement("label");
  let t = document.createTextNode("Test!");
  x.appendChild(t);
  document.body.appendChild(x);
  document.querySelector("body").appendChild();
};

document
  .querySelector(".btn-colour")
  .addEventListener("click", changeBackgroundColour);

document.querySelector(".btn-colour").addEventListener("click", addTestLabel);
/*const changeBColour = () => {
  /*let x = document.createElement("label");
  let t = document.createTextNode("Test!");
  x.appendChild(t);
  document.body.appendChild(x);
  document.querySelector("body").style.backgroundColor = "#ff0A22";
  //document.body.style.backgroundColor = "red";
};*/

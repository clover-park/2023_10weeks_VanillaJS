const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("h2");
const body = document.querySelector("body");

const superEventHandler = {
  handleResize: function () {
    title.innerHTML = "You just resized!";
    title.style.color = colors[0];
  },
  handleRightClick: function () {
    title.innerHTML = "That was a right click!";
    title.style.color = colors[1];
  },
  mouseOver: function () {
    title.innerHTML = "The mouse is here!";
    title.style.color = colors[2];
  },
  mouseOut: function () {
    title.innerHTML = " The mouse is gone!";
    title.style.color = colors[4];
  },
};

window.addEventListener("resize", superEventHandler.handleResize);
title.addEventListener("contextmenu", superEventHandler.handleRightClick);
title.addEventListener("mouseover", superEventHandler.mouseOver);
title.addEventListener("mouseout", superEventHandler.mouseOut);

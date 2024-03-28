/*
Gamelet: a starting point for writing games
Author: Sara Azizova
Version: 1.0
Instructions:

*/

const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // update the ball position
}
/* 
refresh 
changes the position of the ball
*/

function refresh() {
  ball.style.left = position + "px";
}

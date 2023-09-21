const btn = document.querySelector("#btn");
const cntr_two = document.querySelector("#cntr-two");
const cntr_three = document.querySelector("#cntr-two");
const ball_btn = document.querySelector("#ball-btn");
const ball = document.querySelector("#ball");

btn.addEventListener("mouseover", (e) => {
  e.target.style.scale = "1.5";
});

btn.addEventListener("mouseout", (e) => {
  e.target.style.scale = "";
});

cntr_two.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "yellow";

  setInterval(() => {
    e.target.style.backgroundColor = "";
  }, 2000);
});
var c = 0;
ball_btn.addEventListener("click", () => {
  if (c == 0) {
    ball.setAttribute("style", "left: 93%; transition: linear 3s");
    c++;
  } else {
    ball.setAttribute("style", "left: 1%; transition: linear 3s");
    c--;
  }
});

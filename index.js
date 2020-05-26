const draw = document.querySelector(".draw");
console.log(draw.innerHTML);
const start = document.getElementsByTagName("button")[0];
const stop = document.getElementsByTagName("button")[1];
const reset = document.getElementsByTagName("button")[2];
const shape = document.getElementsByTagName("button")[3];
const color = document.getElementsByTagName("button")[4];
const buttons = document.querySelector(".buttons");
console.log(buttons);

// function for drawing
let action = function(e) {
  let circle = document.createElement("div");
  draw.appendChild(circle);
  //style
  circle.style.height = "20px";
  circle.style.width = "20px";
  circle.style.borderRadius = "50%";
  circle.style.position = "absolute";
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";
  circle.style.backgroundColor = "purple";
  console.log(draw);
};

// event starts
draw.addEventListener("mousemove", action);
// button stop
stop.addEventListener("click", () => {
  draw.removeEventListener("mousemove", action);
});
// button start
start.addEventListener("click", () => {
  draw.addEventListener("mousemove", action);
});
// button reset
reset.addEventListener("click", () => {
  draw.innerHTML = "";
});
// button shape

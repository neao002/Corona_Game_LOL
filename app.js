const container = document.querySelector("#container");
const injection = document.querySelector("#injection");
const pointsDiv = document.querySelector("#pointsDiv");

container.addEventListener("mousemove", (e) => {
  //console.log(e);
  injection.style.left = e.clientX - 12.5 + "px";
});

setInterval(() => {}, 1000);

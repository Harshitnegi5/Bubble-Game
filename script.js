var timer = 60;
var score = 0;
var hit = 0;

function bubbleMaker() {
  let clutter = "";

  for (let i = 1; i < 180; i++) {
    let random = ~~(Math.random() * 10);
    clutter = clutter + `<div class="bubble">${random}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function timerValue() {
  let timeint = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      document.querySelector(".pbtm").innerHTML = `<h1>Game Over <br> score : ${score}</h1>`;
      clearInterval(timeint);
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function hitvalue() {
  hit = Math.floor(Math.random() * 10);

  document.querySelector("#hitval").textContent = hit;
}

bubbleMaker();
timerValue();
hitvalue();

document.querySelector(".pbtm").addEventListener("click", (dets) => {
  var targetval = +(dets.target.textContent);

  if (targetval === hit) {
    increaseScore();
    bubbleMaker();
    hitvalue();
  }
});

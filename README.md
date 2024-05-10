# BUBBLE GAME USING HTML CSS AND JAVASCRIPT:-
 


##  HTML code-

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="main">

        <div class="panel">
            <div class="ptop">
                <div class="elem">
                      <h2>Hit</h2>
                      <div id="hitval" class="box">10</div>
                </div>
                <div class="elem">
                    <h2>Timer</h2>
                    <div id="timerval" class="box">60</div>
                </div>
                <div class="elem">
                    <h2>Score</h2>
                    <div id="scoreval" class="box">0</div>
                </div>
            </div>
            <div class="pbtm">
            </div>
        </div>
    </div>
   


    <script src="script.js"></script>
</body>
</html>

```










## Css code-



```css

*{
    margin:0;
    padding:0;
    box-sizing:border-box; 
    font-family: "gilroy";
}
html,body{
    height:100%;
    width:100%;
}

.main{
    height: 100vh;
    width: 100%;
    background-color: rgba(120, 211, 129, 0.68);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.main > .panel{
    border-radius: 10px;
    height: 80%;
    width: 80%;

    overflow: hidden;

   
    .ptop{
        height: 100px;
        width: 100%;
        background-color: green;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 20vw;

        .elem{
            display: flex;
            align-items: center;
            gap: 10px;

            .box{
                height: 50px;
                width: 50px;
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
            }
        }
    }

    .pbtm{
        width: 100%;
        height: calc(100% - 100px);
        background-color: #fff;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 10px;
        flex-wrap: wrap;

        
    }
}

.pbtm > .bubble{
    height: 50px;
    width: 50px;
    background-color: #214723;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: #fff;
    flex-shrink: 0;
    cursor: pointer;
}
```

## javascript code-

```javascript
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

```




var chara = document.querySelector("#chara");
var core = document.querySelector("html");
var body = document.querySelector("body");
var block = document.querySelector("#block");
var screenbox = document.querySelector("#screen");
var score = document.querySelector("#score");
var counter = 0;

//Melakukan lompatan
core.addEventListener("click", jump);
function jump() {
  chara.classList.add("jumping");
  core.removeEventListener("click", jump);

  //Menghapus kondisi jumping dan membuat komando ulang
  setTimeout(() => {
    chara.classList.remove("jumping");
    core.addEventListener("click", jump);
  }, 500);
  console.log("Lompat");
}

//function kekalahan
function lose() {
  //Some Component
  let chara_jump = parseInt(
    window.getComputedStyle(chara).getPropertyValue("top")
  );
  let chara_position = parseInt(
    window.getComputedStyle(chara).getPropertyValue("left")
  );
  let block_left = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  //Untuk syarat game over
  if (
    chara_jump >= 200 &&
    block_left >= chara_position &&
    block_left <= chara_position + 50
  ) {
    game_over();
  }
  //Terdapat penambahan skor
  else {
    counter++;
    score.innerText = "score = " + counter;
  }
}

function game_over() {
  //Create a gameover text and last score
  let text = document.createElement("h1");
  text.innerText = "GAME OVER\n" + "SCORE = " + counter;
  screenbox.style.display = "flex";
  screenbox.style.justifyContent = "center";
  screenbox.style.alignItems = "center";
  screenbox.appendChild(text);

  //create some text to refresh
  let refresh = document.createElement("p");
  refresh.innerText = "Please refresh to continue...";
  body.appendChild(refresh);

  //Remove a chara and block
  block.style.display = "none";
  chara.style.display = "none";
  score.style.display = "none";
}

//Pengecekan kondisi setiap 10 ms
setInterval(() => {
  lose();
}, 10);

//Pergantian frame karakter
var shift_walk = 0;
setInterval(() => {
  shift_walk++;
  if (shift_walk % 2 == 0) {
    chara.style.backgroundImage = "url('img/Front_Walk_01.png')";
  } else {
    chara.style.backgroundImage = "url('img/Front_Walk_02.png')";
  }
}, 250);

//Menambahkan speed balok
var speed_block = 1000;
setInterval(() => {
  block.style.animation = "block_move " + speed_block + "ms infinite linear";
  speed_block -= 5;
}, 1000);

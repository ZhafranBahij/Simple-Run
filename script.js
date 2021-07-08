var chara = document.querySelector("#chara");
var core = document.querySelector("html");
var block = document.querySelector("#block");

//Melakukan lompatan
core.addEventListener("click", jump);
function jump() {
  chara.classList.add("jumping");
  core.removeEventListener("click", jump);
  setTimeout(() => {
    chara.classList.remove("jumping");
    core.addEventListener("click", jump);
  }, 500);
  console.log("Lompat");
}

//function kekalahan
function lose() {
  let chara_jump = parseInt(
    window.getComputedStyle(chara).getPropertyValue("top")
  );
  let block_left = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  //Untuk syarat game over
  if (chara_jump >= 200 && block_left >= 100 && block_left <= 150) {
    block.style.display = "none";
    alert("Gagal");
  }
}

//Pengecekan kondisi setiap 10 ms
setInterval(() => {
  lose();
}, 10);

var chara = document.querySelector("#chara");
var core = document.querySelector("html");
var block = document.querySelector("#block");

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

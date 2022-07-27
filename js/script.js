const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const goonba = document.querySelector(".goonba")

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const goonbaPosition = goonba.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", ""); //o + aqui transforma a string em number
  console.log(marioPosition);

  if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 80 ||goonbaPosition <= 50 && goonbaPosition > 0 && marioPosition < 80) {
    //depois do pipe -35
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    goonba.style.animation = "none";
    goonba.style.left = `${goonbaPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./img/game-over.png";
    mario.style.width = "50px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  }
}, 10);
document.addEventListener("keydown", jump);

// restart
const restart = document.querySelector("#refresh");

restart.addEventListener("click", function () {
  location.reload();
});

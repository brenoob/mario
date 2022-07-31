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
  /* console.log(marioPosition); */ //verificando altura do pulo do mario

  if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 80 ||goonbaPosition <= 90 && goonbaPosition > 0 && marioPosition < 50) {
    
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

// button jump
window.addEventListener("keydown", function(mario) {
  if(mario.key === "p" || mario.key ==="ArrowUp" ){
  return jump()
}});

// restart
const restart = document.querySelector("#refresh");

window.addEventListener("keydown", function (restart) {
  if(restart.key === "r"){
    location.reload();
  }
});
restart.addEventListener("click", function () {
  location.reload();
});/* 
window.addEventListener("keydown", function(mario) {
  console.log(mario.key)
}); */ //verificando eventos do teclado
function alterarCor(e) {
  document.querySelector("#img").src = e;
}

function alterarCirculo(color) {
  const circulo = document.querySelector(".circulo");
  circulo.style.background = color;
}

const small = window.matchMedia("(max-width: 720px)").matches;

if (small) {
  const img = document.querySelector(".lista-imagens img");
  const preco = document.querySelector(".div");

  preco.appendChild(img);
}

const menuHamburguer = document.querySelector(".menu-hamburguer");

function menuAtivo() {
  const menu = document.querySelector(".nav");
  menu.classList.toggle("mostrar");

  console.log(menu);
}

menuHamburguer.addEventListener("click", menuAtivo);

const comprar = document.querySelector("button");

comprar.addEventListener("click", function () {
  alert("Parabéns pela compra");
});

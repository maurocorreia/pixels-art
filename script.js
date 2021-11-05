const pixels = document.querySelectorAll(".pixel");
const board = document.getElementById('pixel-board');
const button = document.querySelector("#clear-board");
const corUm = document.querySelector("#corUm");
const corDois = document.querySelector("#corDois");
const corTres = document.querySelector("#corTres");
const corQuatro = document.querySelector("#corQuatro");
const colors = document.querySelectorAll(".color");

colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = 'seagreen';
colors[2].style.backgroundColor = '#2ec4b6';
colors[3].style.backgroundColor = '#bee1e6';


for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  board.appendChild(pixel);
  pixel.className = 'pixel';
  pixel.addEventListener('click', function () {
    const colorSelected = document.querySelector('.selected');
    console.log(colorSelected.style.backgroundColor)
    pixel.style.backgroundColor = colorSelected.style.backgroundColor;
  })
}

corUm.addEventListener('click', function () {
  for (i = 0; i < colors.length; i += 1) {
    colors[i].className = 'color';
  }
  corUm.className = 'color selected';
})

corDois.addEventListener('click', function () {
  for (i = 0; i < colors.length; i += 1) {
    colors[i].className = 'color';
  }
  corDois.className = 'color selected';
})

corTres.addEventListener('click', function () {
  for (i = 0; i < colors.length; i += 1) {
    colors[i].className = 'color';
  }
  corTres.className = 'color selected';
})

corQuatro.addEventListener('click', function () {
  for (i = 0; i < colors.length; i += 1) {
    colors[i].className = 'color';
  }
  corQuatro.className = 'color selected';
})



button.addEventListener('click', function (event) {
  const pixels = document.querySelectorAll(".pixel");  
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
})


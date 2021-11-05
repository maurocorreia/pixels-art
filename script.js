const pixels = document.querySelectorAll(".pixel");
const button = document.querySelector("#clear-board");
const corUm = document.querySelector("#corUm")
const corDois = document.querySelector("#corDois")
const corTres = document.querySelector("#corTres")
const corQuatro = document.querySelector("#corQuatro")
const colors = document.querySelectorAll(".color")
const colorSelected = document.getElementsByClassName('selected');

corUm.addEventListener('click', function(){
  for(i = 0; i < colors.length; i+= 1){
    colors[i].className = 'color';
  }
  corUm.className = 'color selected';
})

corDois.addEventListener('click', function(){
  for(i = 0; i < colors.length; i+= 1){
    colors[i].className = 'color';
  }
  corDois.className = 'color selected';
})

corTres.addEventListener('click', function(){
  for(i = 0; i < colors.length; i+= 1){
    colors[i].className = 'color';
  }
  corTres.className = 'color selected';
})

corQuatro.addEventListener('click', function(){
  for(i = 0; i < colors.length; i+= 1){
    colors[i].className = 'color';
  }
  corQuatro.className = 'color selected';
})


button.addEventListener('click', function (event) {

    for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.backgroundColor = 'white';

    }
})


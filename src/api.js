
function setup() {
  iniciar();
}

function preload() {
  crossImage = loadImage('cross.png');
  circleImage = loadImage('circle.png');
}

function colorLinea(r,g,b){
  stroke(r,g,b);
}

function dibujarFicha(img,origenX,origenY,tamano){
  image(img,origenX,origenY,tamano,tamano);
}



function iniciar(){
  dibujarTablero();
  state = getInicialState();
}

function dibujarTablero(){
  createCanvas(600,600)
  background(210)
  line(0,200,600,200);
  line(0,400,600,400);
  line(200,0,200,600);
  line(400,0,400,600);
}

function jugar(){
  
  if(state.isEnd){
    alert("el juego está terminado, reiniciar!"); return;
  }
  
  let celda = obtenerCelda();
  
  if( state.tablero[celda] != 0 ){
     alert("La celda ya está ocupada!"); return;
  }
  
  if( state.player == 1){
    dibujarFichaEnCelda(crossImage,celda);
    state.player = 2;
    state.tablero[celda] = 1;
  }else{
    // play machine
    /* 1) calcular el mejor estado para jugar 
     2) dibujar la jugada a partir del nuevo estado, idea:
      recorrer con un ciclo todo el tablero del estado y redibujar las posiciones (celdas)
     que sean iguales a la ficha de la máquina (igual a 2) 
    for (....){
      if( ....  == 2)
        dibujarFichaEnCelda(circleImage,i);
    }
    */
  }
  
  let ganador = verificarGanador(state.tablero);
  if (ganador == -1 || ganador == 1){
    alert("Ganó el jugador "+ganador);
    state.isEnd = true;
    return;
  }
  if (ganador == 0 && esFinal(state) ){
    alert("juego empatado!");
    state.isEnd = true;
    return;
  }

}


function dibujarFichaEnCelda(image, numCelda){
  
  const PRIMERA = 0;
  const SEGUNDA = 200;
  const TERCERA = 400;
  
  var desp = 50;
  
  if(numCelda == 1){
    dibujarFicha(image , PRIMERA + desp , PRIMERA + desp  ,100)
  }
  
  if(numCelda == 2){
      dibujarFicha(image , SEGUNDA + desp , PRIMERA + desp  ,100)
  }
  
  if(numCelda == 3){
      dibujarFicha(image , TERCERA + desp , PRIMERA + desp  ,100)
  }
  
  // DE 4 A 6
  
  if(numCelda == 4){
    dibujarFicha(image , PRIMERA + desp , SEGUNDA + desp  ,100)
  }
  
  if(numCelda == 5){
      dibujarFicha(image , SEGUNDA + desp , SEGUNDA + desp  ,100)
  }
  
  if(numCelda == 6){
      dibujarFicha(image , TERCERA + desp , SEGUNDA + desp  ,100)
  }
  
  if(numCelda == 7){
    dibujarFicha(image , PRIMERA + desp , TERCERA + desp  ,100)
  }
  
  if(numCelda == 8){
      dibujarFicha(image , SEGUNDA + desp , TERCERA + desp  ,100)
  }
  
  if(numCelda == 9){
      dibujarFicha(image , TERCERA + desp , TERCERA + desp  ,100)
  }
  
}


function obtenerCelda(){
  
  if(mouseX < 200 && mouseY < 200){
     return 1;
  }
  if(mouseX > 200 && mouseX < 400 && mouseY > 0 && mouseY < 200){
     return 2;
  }
  if(mouseX > 400 && mouseX < 600 && mouseY > 0 && mouseY < 200){
     return 3;
  }
  if(mouseX > 0 && mouseX < 200 && mouseY > 200 && mouseY < 400){
     return 4;
  }
  if(mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 400){
     return 5;
  }
  if(mouseX > 400 && mouseX < 600 && mouseY > 200 && mouseY < 400){
     return 6;
  }
  if(mouseX > 0 && mouseX < 200 && mouseY > 400 && mouseY < 600){
     return 7;
  }
  if(mouseX > 200 && mouseX < 400 && mouseY > 400 && mouseY < 600){
     return 8;
  }
  if(mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 600){
     return 9;
  }
  
}







function mouseMoved(){
 // console.log(mouseX,mouseY);
}

function mouseClicked(){
  jugar();
}



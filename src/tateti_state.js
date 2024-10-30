
/*
Constructor del estado inicial
*/
function getInicialState(){
  return {
    tablero: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    player: 1,
    isEnd: false,
  }
}


/*
Retorna el valor de un estado, posiblemente no final, mediante
el algoritmo minmax.
*/
function minMax(state) {
  if (state.isEnd === true) {
    return getValue(state);
  }
  let resultMax = -1;
  let resultMin = +1;
  let successors = getSuccessors(state);
  for (var i = 0; i < successors.length; i++) {
    if (state.player === 1) {
      resultMax = Math.max(resultMax, minMax(successors[i]));
    } else {
      resultMin = Math.min(resultMin, minMax(successors[i]));
    }
  }
  return (state.player === 1) ? resultMax: resultMin;
}

/*
Retorna el mejor estado siguiente para el jugador actual
*/
function getBest(tatetiState){
  successors = getSuccessors(tatetiState);
  let best = null;
  if(tatetiState.player === 1){
    let bestVal = -1;
    for(s of successors){
      if (bestVal < minMax(s)){
        bestVal = minMax(s);
        best = s;
      }
    }
  }else{
    let bestVal = 1;
    for(s of successors){
      if (bestVal > minMax(s)){
        bestVal = minMax(s);
        best = s;
      }
    }
  }
  return best;
}

function getSuccessors(tatetiState) {
  var result = new Array();
  if(tatetiState.isEnd){
    return result
  }
  for (var i = 1; i < tatetiState.tablero.length; i++) {
    if (tatetiState.tablero[i] === 0) {
      let nuevo = clone(tatetiState);
      nuevo.tablero[i] = tatetiState.player;
      nuevo.player = (tatetiState.player % 2) + 1;
      nuevo.isEnd = esFinal(nuevo);
      result.push(nuevo);
    }
  }
  return result;
}

/*
Retorna el valor de un estado 1, -1 o 0 según si ha ganado el player 1,
el player 2 o si es empate o no finalizado.
*/
function getValue(state) {
  return verificarGanador(state.tablero);
}

/*
Retorna 1 si es ganador jugador 1, -1 si gana jugador 2, 0 si
hay empate o no está terminado el juego
*/
function verificarGanador(tablero) {
  // análisis de primera fila
  if (tablero[1] == 1 && tablero[2] == 1 && tablero[3] == 1) {
    return 1;
  }
  if (tablero[1] == 2 && tablero[2] == 2 && tablero[3] == 2) {
    return -1;
  }
  // análisis de primera segunda
  if (tablero[4] == 1 && tablero[5] == 1 && tablero[6] == 1) {
    return 1;
  }
  if (tablero[4] == 2 && tablero[5] == 2 && tablero[6] == 2) {
    return -1;
  }
  // análisis de primera 3ra
  if (tablero[7] == 1 && tablero[8] == 1 && tablero[9] == 1) {
    return 1;
  }
  if (tablero[7] == 2 && tablero[8] == 2 && tablero[9] == 2) {
    return -1;
  }
  // columna 1
  if (tablero[1] == 1 && tablero[4] == 1 && tablero[7] == 1) {
    return 1;
  }
  if (tablero[1] == 2 && tablero[4] == 2 && tablero[7] == 2) {
    return -1;
  }
  //columna 2
  if (tablero[2] == 1 && tablero[5] == 1 && tablero[8] == 1) {
    return 1;
  }
  if (tablero[2] == 2 && tablero[5] == 2 && tablero[8] == 2) {
    return -1;
  }
  // columna 3
  if (tablero[3] == 1 && tablero[6] == 1 && tablero[9] == 1) {
    return 1;
  }
  if (tablero[3] == 2 && tablero[6] == 2 && tablero[9] == 2) {
    return -1;
  }
  // diagonales
  if (tablero[1] == 1 && tablero[5] == 1 && tablero[9] == 1) {
    return 1;
  }
  if (tablero[1] == 2 && tablero[5] == 2 && tablero[9] == 2) {
    return -1;
  }
  if (tablero[3] == 1 && tablero[5] == 1 && tablero[7] == 1) {
    return 1;
  }
  if (tablero[3] == 2 && tablero[5] == 2 && tablero[7] == 2) {
    return -1;
  }
  // empate
  if (tablero[1] != 0 && tablero[2] != 0 && tablero[3] != 0 &&
    tablero[4] != 0 && tablero[5] != 0 && tablero[6] != 0 &&
    tablero[7] != 0 && tablero[8] != 0 && tablero[9] != 0
  ) {
    return 0;
  }
  // no finalizado
  return 0;
}

/*
Retorna true si es estado final, falso si no
*/
function esFinal(state) {
  tablero = state.tablero;
  // análisis de primera fila
  if (tablero[1] == 1 && tablero[2] == 1 && tablero[3] == 1) {
    return true;
  }
  if (tablero[1] == 2 && tablero[2] == 2 && tablero[3] == 2) {
    return true;
  }
  // análisis de primera segunda
  if (tablero[4] == 1 && tablero[5] == 1 && tablero[6] == 1) {
    return true;
  }
  if (tablero[4] == 2 && tablero[5] == 2 && tablero[6] == 2) {
    return true;
  }
  // análisis de primera 3ra
  if (tablero[7] == 1 && tablero[8] == 1 && tablero[9] == 1) {
    return true;
  }
  if (tablero[7] == 2 && tablero[8] == 2 && tablero[9] == 2) {
    return true;
  }
  // columna 1
  if (tablero[1] == 1 && tablero[4] == 1 && tablero[7] == 1) {
    return true;
  }
  if (tablero[1] == 2 && tablero[4] == 2 && tablero[7] == 2) {
    return true;
  }
  //columna 2
  if (tablero[2] == 1 && tablero[5] == 1 && tablero[8] == 1) {
    return true;
  }
  if (tablero[2] == 2 && tablero[5] == 2 && tablero[8] == 2) {
    return true;
  }
  // columna 3
  if (tablero[3] == 1 && tablero[6] == 1 && tablero[9] == 1) {
    return true;
  }
  if (tablero[3] == 2 && tablero[6] == 2 && tablero[9] == 2) {
    return true;
  }
  // diagonales
  if (tablero[1] == 1 && tablero[5] == 1 && tablero[9] == 1) {
    return true;
  }
  if (tablero[1] == 2 && tablero[5] == 2 && tablero[9] == 2) {
    return true;
  }
  if (tablero[3] == 1 && tablero[5] == 1 && tablero[7] == 1) {
    return true;
  }
  if (tablero[3] == 2 && tablero[5] == 2 && tablero[7] == 2) {
    return true;
  }
  // empate
  if (tablero[1] != 0 && tablero[2] != 0 && tablero[3] != 0 &&
    tablero[4] != 0 && tablero[5] != 0 && tablero[6] != 0 &&
    tablero[7] != 0 && tablero[8] != 0 && tablero[9] != 0
  ) {
    return true;
  }
  // no finalizado
  return false;
}

// auxiliar functions


function clone(tablero) {
  return JSON.parse(JSON.stringify(tablero));
}

// test functions

function testSuccessors() {
  successors = getSuccessors(getInicialState());
  console.log(successors);
  while (successors.length > 0) {
    console.log("Value: "+minMax(successors[0])+" for:");
    console.log(successors[0]);
    successors = getSuccessors(successors[0]);
    console.log(successors);
  }
}
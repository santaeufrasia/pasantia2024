var inicialState = {
  tablero : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  jugador : 1,
  isEnd : false,
}

console.log(inicialState);

estado = inicialState;
while (!estado.isEnd){

  var sucesores = getSuccessors(estado);
  estado = sucesores[sucesores.length-1];
  console.log(estado);
}


/*
Retorna un arreglo con los tableros (arreglos) sucesores inmediatos
del tablero pasado como parametro
*/
function getSuccessors(estado){
  var result = new Array();
  
  for(i=1; i < estado.tablero.length;i++){
    if(estado.tablero[i] == 0){
      nuevoEstado = clone(estado);
      nuevoEstado.tablero[i] = estado.jugador
      nuevoEstado.jugador =  (estado.jugador == 1)? 2 : 1;  
      // ver si es final
      nuevoEstado.isEnd = esFinal(nuevoEstado);
      result.push(nuevoEstado);
    }    
  } 
  return result;
}





// funciones auxiliares

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







/*
Retorna una nueva copia del objeto pasado como parametro.
*/
function clone(object) {
  return JSON.parse(JSON.stringify(object));
}

function test(){
  inicial = [0,0,0]
  
  result = getSuccessors(inicial,1);
  if (JSON.stringify(result) === JSON.stringify([[0,1,0],[0,0,1]])){
    console.log("pasó test");
  }else{
    console.log("falló test");
  }
  
  result = getSuccessors(inicial,2);
  if (JSON.stringify(result) === JSON.stringify([[0,2,0],[0,0,2]])){
    console.log("pasó test");
  }else{
    console.log("falló test");
  }

  inicial = [0,1,0,0,0]
  result = getSuccessors(inicial,2);
  if (JSON.stringify(result) === JSON.stringify([[0,1,2,0,0],[0,1,0,2,0],[0,1,0,0,2]])){
    console.log("pasó test");
  }else{
    console.log("falló test");
  }

}

var tableroInicial = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var jugador = 1;

console.log(tableroInicial);
var sucesores = getSuccessors(tableroInicial, 1);
console.log(sucesores);
test();

/*
Retorna un arreglo con los tableros (arreglos) sucesores inmediatos
del tablero pasado como parametro
*/
function getSuccessors(board, player){
  var result = new Array();
for(i=1;i < board.length;i++){
  board2 = clone(board)
  board2[i]=player
  result.push(board2)

}




  // TODO: implementar solución...

  /* Idea: a partir de la posición 1 del tablero de entrada (board), por cada
  posición libre (igual a 0) que el tablero tenga, crear un nuevo tablero copia
  y en la copia colocar la ficha (player) en esa misma posición. Luego agregar
  esa nueva copia al arreglo de tableros que se retornará como resultado (result).
  Para copiar el arreglo board de entrada usar la función clone. Para agregar un
  elemento al arreglo result se puede usar la función push de arreglos.
  */
  
  return result;
}





// funciones auxiliares

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
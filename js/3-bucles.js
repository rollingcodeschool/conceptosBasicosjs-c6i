/* Bucles

while(condicion logica){
    todas las lineas de codigo que quiero que repita el programa
    cambiar la condicion logica
}

*/

let cantidad = 1;
let opcion = 1;

while (cantidad <= 20) {
  document.write(
    "<br>preparar mate y entregarlo al siguiente compañero, mate cebado n: " +
      cantidad
  );
  console.log((opcion += opcion));
  cantidad++; //cantidad= cantidad+1;  //cantidad += cantidad;
}

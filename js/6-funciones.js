//funcion sin parametros
function saludar(){
    //todo el codigo que quiero que tenga esta funcion
    document.write('<p>Hola mundo</p>')
};

//funcion con parametro
function saludoNuevo(nombre, apellido){
    document.write(`<p>Hola mi nombre es ${nombre}, mi apellido es ${apellido}</p>`)
}


//invocar o llamar a un funcion
saludar();

let nombre = prompt('Ingrese un nombre');
let apellido = prompt('Ingrese un apellido');


saludoNuevo(nombre, apellido);



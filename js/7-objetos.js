//objetos con notacion literal

let motorola = {
    //propiedades -> clave: valor
    modelo: 'G31',
    SO:'Android',
    resitenteAgua: false,
    pantalla: 9,
    color: ['celeste','negro','plateado'],
    // conectividad: {
    //     bluetooth: true,
    //     red: '4g'
    // }
    //metodos son similares a funciones
    navegar: ()=>{ document.write(`<p>Se abrio el navegador...</p>`)},
    apagar: ()=>{ document.write(`<p>el dispositivo se apago</p>`)}
}

//mostrar un objeto
console.log(motorola);

// document.write(motorola); esta forma no usamos
document.write(`<p>Modelo del celular: ${motorola.modelo}</p>`)
document.write(`<p>SO: ${ motorola['SO']}</p>`)
document.write(`<p>Pantalla original: ${motorola.pantalla}</p>`)
//modificar una propiedad de un objeto
motorola.pantalla = 10;

document.write(`<p>Pantalla modificada: ${motorola.pantalla}</p>`)

//borrar una propiedad de un objeto
delete motorola.resitenteAgua;

console.log(motorola);

//agregar una nueva propiedad a un objeto existente
motorola.precio = 90000;

document.write(`<p>Precio: $${motorola.precio}</p>`)
console.log(motorola);

// usar un metodo de un objeto
motorola.navegar();

document.write(`<p>Celular:${motorola.modelo} Color:${motorola.color[1]} </p>`)
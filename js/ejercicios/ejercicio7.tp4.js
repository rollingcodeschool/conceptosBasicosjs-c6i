//  agenda telefónica de contactos, Un contacto está definido por un nombre y un teléfono. el nombre es unico
// la agenda contiene contactos y sera creada con un tamaño por defecto de 10 o el usuario puede modificar el tamaño

// metodos

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades.

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamanio = 10) {
    this.contactos = [];
    this.tamanio = tamanio;
  }

  agregarContacto(contactoNuevo) {
    //verificar si el contacto existe
    if (this.existeContacto(contactoNuevo.nombre) === true) {
      console.log("El contacto ya existe, no lo agrego");
    } else {
      //verificar si  el metodo agendaLlena retorna false
        if(!this.agendaLlena()){ //  if(this.agendaLlena() === false){
            this.contactos.push(contactoNuevo);
        }
    }
    console.log(this.contactos);
  }

  existeContacto(nombre) {
    // es porque el contacto existe
    const contactoExistente = this.contactos.find((itemContacto) => {
      return nombre === itemContacto.nombre;
    });
    console.log(contactoExistente);
    if (contactoExistente) {
      console.log("el contacto existe");
      return true;
    } else {
      console.log("el contacto no existe");
      return false;
    }
  }

  agendaLlena(){
    if(this.contactos.length === this.tamanio){
        console.log('La agenda esta llena')
        return true;
    }else{
        console.log('Hay espacio disponible')
        return false;
    }
  }

  eliminarContacto(nombre){
    let contactosFiltrados = this.contactos.filter((itemContacto)=>{return itemContacto.nombre != nombre })
    this.contactos = contactosFiltrados;
    console.log('elemento eliminado '+nombre)
    console.log(this.contactos);

  }
}

//crear la agenda
let agendaTelefonica = new Agenda();
console.log(agendaTelefonica);
//menu de opciones
do {
  let opcion = parseInt(
    prompt(`Seleccione una opcion:
    1- Agregar un contacto, *
    2- Consultar si el contacto existe, *
    3- Listar los contactos,
    4- Buscar un contacto,
    5- Eliminar un contacto, *
    6- Consultar si la agenda esta llena, *
    7- Consultar si la agenda tiene huecos libres,
    8- cambiar el tamaño de la agenda
    `)
  );

  switch (opcion) {
    case 1:
      // 1- Agregar un contacto,
      //pedir nombre y telefono
      let nombre = prompt("Ingrese un nombre").toLowerCase();
      let telefono = prompt("Ingrese un telefono");
      //crear el contacto
      let nuevoContacto = new Contacto(nombre, telefono);
      //invocar a agregarContacto
      agendaTelefonica.agregarContacto(nuevoContacto);
      break;
    case 2:
      // 2- Consultar si el contacto existe,
      let nombreBuscado = prompt("Ingrese un nombre").toLowerCase();
      agendaTelefonica.existeContacto(nombreBuscado);
      break;
    case 3:
      // 3- Listar los contactos,
      break;
    case 4:
      // 4- Buscar un contacto,
      break;
    case 5:
      // 5- Eliminar un contacto,
      let contactoBorrar = prompt("Ingrese un nombre").toLowerCase();
      agendaTelefonica.eliminarContacto(contactoBorrar);
      break;
    case 6:
      // 6- Consultar si la agenda esta llena,
      break;
    case 7:
      // 7- Consultar si la agenda tiene huecos libres,
      break;
    case 8:
      // 8- cambiar el tamaño de la agenda
      break;
    default:
      alert("Ingreso una opcion incorrecta");
  }
} while (confirm("¿Quiere realizar otra operación?"));

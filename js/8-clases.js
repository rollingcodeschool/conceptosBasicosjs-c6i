// usuario, nombre, mail, fechaNacimiento, password, estado

class Usuario{
    // primer metodo que se ejecuta en una clase
    constructor(useName, nombre, mail, fechaNacimiento, password){
        this.nombre = nombre;
        this.mail = mail;
        this.fechaNacimiento = fechaNacimiento;
        this.password = password;
        this.estado = true; //parametro por defecto
        this.nombreUsuario = useName;
    }
    //agregaria todos los metodos que considero necesario
    cambiarPassword(){}
    
    mostrarDatos(){
        document.write(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Email: ${this.mail}</li>
        <li>Fecha de Nacimiento: ${this.fechaNacimiento}</li>
        <li>Nombre de usuario: ${this.nombreUsuario}</li>
        </ul>`)
    }

    //propiedades conmutas
    set modificarPassword(nuevoPass){
        this.password = nuevoPass;
    }
}

// crear un usuario, instanciar
let jose = new Usuario('joseGM','Jose Luis GM','joseluis@gmail.com','07/1989','A%3438dfd');
let lucia = new Usuario('luciaS','Lucia Soraire','luciaSoraire@gmail.com','07/1989','BJI%3438dfd');

console.log(jose);
jose.mostrarDatos();

lucia.mostrarDatos();

jose.modificarPassword = '12345678'
console.log(jose);
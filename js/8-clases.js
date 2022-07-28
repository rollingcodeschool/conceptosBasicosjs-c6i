// usuario, nombre, mail, fechaNacimiento, password, estado
//mentores: antiguedad, cursosDictados o comisionesACargo = [] 
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
    cambiarPassword(){ }
    
    mostrarDatos(){
        document.write(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Email: ${this.mail}</li>
        <li>Fecha de Nacimiento: ${this.fechaNacimiento}</li>
        <li>Nombre de usuario: ${this.nombreUsuario}</li>
        </ul>`)
    }

    //propiedades conmutadas setters y getters
    set modificarPassword(nuevoPass){
        this.password = nuevoPass;
    }
    
    set modificarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    get mostrarNombre(){
        return this.nombre;
    }

}
//alumnos: calificaciones, matricula, curso fullstack, estadoCurso: aprobado, en curso, no definido.
class Alumno extends Usuario {
    constructor(matricula, curso, useName, nombre, mail, fechaNacimiento, password){
        //invocar al metodo constructor de la clase superior
        super(useName,nombre, mail, fechaNacimiento, password);
        //agregar propiedades
        this.matricula = matricula;
        this.curso = curso;
        this.estadoCursado = 'En curso';
        this.calificaciones= [];
    }
    // metodos
    recibirCalificacion(nota){
        this.calificaciones.push(nota);
    }

    obtenerPromedio(){
        let cantidadNotas = this.calificaciones.length;
        let sumatoriaNotas= 0;
        for(let i=0; i < this.calificaciones.length; i++){
            sumatoriaNotas += this.calificaciones[i]//sumatoriaNotas = this.calificaciones[i] + sumatoriaNotas
        }
        let promedio = sumatoriaNotas / cantidadNotas;
        document.write(`<p>El alumno ${this.nombre} tiene de promedio ${promedio}<p>`)
    }

    mostrarDatosAlumno(){
        document.write(`<ul>
        <li>Matricula: ${this.matricula}</li>
        <li>Curso: ${this.curso}</li>
        <li>Estado de cursado: ${this.estadoCursado}</li>
        </ul>`)
    }

    mostrarDatos(){
        document.write('<h3>Datos personales</h3>')
        document.write(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Email: ${this.mail}</li>
        <li>Fecha de Nacimiento: ${this.fechaNacimiento}</li>
        <li>Nombre de usuario: ${this.nombreUsuario}</li>
        </ul>`)
        document.write('<h3>Datos Academicos</h3>')
        document.write(`<ul>
        <li>Matricula: ${this.matricula}</li>
        <li>Curso: ${this.curso}</li>
        <li>Estado de cursado: ${this.estadoCursado}</li>
        </ul>`)
    }
    // get y set

}


// crear un usuario, instanciar
let jose = new Usuario('joseGM','Jose Luis GM','joseluis@gmail.com','07/1989','A%3438dfd');
let lucia = new Usuario('luciaS','Lucia Soraire','luciaSoraire@gmail.com','07/1989','BJI%3438dfd');

console.log(jose);
jose.mostrarDatos();

lucia.mostrarDatos();

jose.modificarPassword = '12345678'
console.log(jose);

// usamos los get y set
document.write(`<p>El objeto jose tiene de nombre: ${jose.mostrarNombre}</p>`);
jose.modificarNombre = 'Jose Luis Gomez Marigliano';
document.write(`<p>El objeto jose tiene de nombre: ${jose.mostrarNombre}</p>`);

//crear un objeto alumno
let nicolas = new Alumno(123,'FullStack','nicoGM','Nico GM','rodnicgm@gmail.com', '07/12/1991','34324sdfsdf');

let notaBootstrap = parseInt(prompt('Ingrese la nota correspondiente'));
let notaGit = parseInt(prompt('Ingrese la nota correspondiente'));

nicolas.recibirCalificacion(notaBootstrap);
nicolas.recibirCalificacion(notaGit);
nicolas.obtenerPromedio();
nicolas.mostrarDatosAlumno();

nicolas.mostrarDatos();
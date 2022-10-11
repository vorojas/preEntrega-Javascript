let name = prompt('Cual es el nombre del niño/a?');

let sala = prompt('Edad del niño');

let telefono= prompt('Ingrese telefono de contacto');

let numero = prompt('Cuantas horas asistirá el niño al jardín? o ingresa 0 para salir');


let multiplicacion = 300

while (numero !=0){ // condicion que se cumple hasta que el numero ingresado sea cero
    if (isNaN(numero)) {
        alert("El valor ingresado no es un numero")
        numero = 0
    } else {
        alert ('el precio por día es de: ' + numero*multiplicacion)
        numero = prompt('Ingrese un numero, ingresa 0 para salir')
    }
 
}

let valorhora = 300;

class solicitudEstudiante {
    constructor (name, sala, telefono, horas) {
        this.name = name;
        this.sala = sala;
        this.telefono = telefono;
        this.horas = horas;
    }

    imprimir() {
        alert(`El/La alumno/a ${this.name} de ${this.sala} años ha solicitado una vacante para dicha sala, con una cuota mensual de ${this.horas * valorhora}. Su acudiente puede ser contactado en el ${this.telefono}`);
        return `El/La alumno/a ${this.name} de ${this.sala} años ha solicitado una vacante para dicha sala, con una cuota mensual de ${this.horas * valorhora}. Su acudiente puede ser contactado en el ${this.telefono}`
    }
}

const solicitarDatos = () => {
    let masestudiantes = 1;
    while (masestudiantes !=0) { // condicion que se cumple hasta que el numero ingresado sea cero
        let name = prompt('Cual es el nombre del niño/a?');
        let sala = prompt('Edad del niño');
        let telefono= prompt('Ingrese telefono de contacto');
        let horas = prompt('Cuantas horas asistirá el niño al jardín? o ingresa 0 para salir');
        masestudiantes = prompt('Vas a ingresar mas estudiantes? 0 para NO');
        if (isNaN(horas)) {
            alert("El valor ingresado no es un numero")
            horas = 0;
        } else {
            const alumno = new solicitudEstudiante(name, sala, telefono, horas);
            console.log(alumno);
            console.log(alumno.imprimir());
        };
    };
};

solicitarDatos();



function solicitud(apellido,telefono,alumno){
    this.apellido = apellido;
    this.telefono = telefono;
    this.alumno = alumno;
}

function Alumno(nombre,edad){
    this.nombre = nombre
    this.edad = edad
    

    this.presentar = function(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
    }
}
var alumno1 = new Alumno('Florencia',3)
var solicitud1 = new solicitud('Lopez','3513997507', alumno1)

var alumno2 = new Alumno('Nicolas',5)
var solicitud2 = new solicitud('Rojas','3514031099', alumno2)

var alumno3 = new Alumno('Bautista',2)
var solicitud3 = new solicitud('Lovero','3516151806', alumno3)



console.log(solicitud1)
console.log(alumno1)
alumno1.presentar()
console.log(solicitud2)
console.log(alumno2)
alumno2.presentar()
console.log(solicitud3)
console.log(alumno3)
alumno3.presentar()


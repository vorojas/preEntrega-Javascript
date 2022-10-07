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





class Alumno {

    constructor( alumno, horas ) {
        this.alumno = alumno
        this.horas = horas
    }

    calcularHoras(){
        return (`El valor total por la cantidad de horas a pagar es: ${ (this.cantidad_horas) * this.Valor_hora }`);
    }
}

class Horas {
    constructor( cantidad_horas, Valor_hora ){
        this.cantidad_horas = cantidad_horas;
        this.Valor_hora = Valor_hora;
    }
}

let horario1 = new Horario( 6, 300 );
let alumno1 = new Alumno1('Juan', impuesto1);
console.log( alumno1.calcularHoras() );
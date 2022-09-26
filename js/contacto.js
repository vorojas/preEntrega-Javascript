let name = prompt('Cual es el nombre del niño/a?');
let numero = prompt('Cuantas horas asistirá el niño al jardín? o ingresa 0 para salir');
let multiplicacion = 300

while (numero !=0){ // condicion que se cumple hasta que el numero ingresado sea cero
    if (isNaN(numero)) {
        alert("El valor ingresado no es un numero")
        numero = 0
    } else {
        alert ('el valor de la multiplicacion es' + numero*multiplicacion)
        numero = prompt('Ingrese un numero, ingresa 0 para salir')
    }
 
}


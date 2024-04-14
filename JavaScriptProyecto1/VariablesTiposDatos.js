const prompt = require('prompt-sync')();

//calculo de celsius a fareheint
function calcularCelsciusAfar(){
    //variable temperatura
    let temperatura = prompt("Por favor ingrese el valor de su temperatura en Celsius: ");
    let resultado = (9/5 * temperatura) + 32;
    console.log(temperatura + "°C son " + resultado + " grados en Farehenint");
};

calcularCelsciusAfar()


//input funcion calculadora IMC
function calcularIMC (){
    let peso = prompt("Por favor, ingresa tu peso en kilogramos: ");
    let altura = prompt("Por favor, ingresa tu altura en metro: ");
    let resultado = peso/(altura)**2
    console.log("Su indice de masa corporal es: " + resultado.toFixed(2));
}

calcularIMC()


//generar nombre de usuario
function generarNombreUsuario (){
    let nombre = prompt("Nombre: ")
    let apellido = prompt("Apellido: ")
    let anoDenacimiento = prompt("Año de nacimiento: ")
    console.log(nombre + apellido + anoDenacimiento)
}

generarNombreUsuario()

//Sucesion de fibonacci

function mostrarPosicionFibo(number){
    let a=0,b=1,c,s=1
    for(i = 3; i<=number; i++){
    c=a+b
    s = s + c;
    a = b;
    b = c;
   }
   console.log("El " + number + "-esimo numero de la sucesion de Fibonacci es: " + c)
}

mostrarPosicionFibo(prompt("Por favor ingrese el numero n: "))

//PENDIENTE MENU
const prompt = require('prompt-sync')();


//Adivina el numero 0-100
function getRamdomInt() {
    let numeroAleatorio = Math.floor(Math.random() * 100);
    console.log('Adivina un número entre 1 y 100');
    
    let numeroUsuario =  prompt('Selecciona el número el cual crees más probable a salir:');
    
    
    //convertir la entrada del usuario a un valor númerico
    numeroUsuario = parseInt(numeroUsuario);
    console.log('Muy bien! Tu número es:' +numeroUsuario);
    
    
    
        if (numeroUsuario == numeroAleatorio) {
            console.log('¡Nice! Adivinaste el número, el número era:'+ numeroAleatorio);
            process.exit(); 
        } else {
            console.log(numeroUsuario < numeroAleatorio ? 'El número es más bajo': 'El número es más grande');
        }
        
    getRamdomInt();
    }
    getRamdomInt();


//Calculadora de Factorial
function CalcularFactorial() {
    let n = prompt("Ingrese el numero para calcular su factorial: ")
    let factorial = 1
    let resultado = 1

    while(factorial <= n) {
        resultado = factorial * resultado
        factorial ++
        console.log("el factorial del numero " + n + " es: " + resultado)
    }
}

CalcularFactorial()

//Contador de Vocales

function contarVocales(){
    let cadena = prompt("Por favor ingrese un frase para contar sus vocales: ");
    let numeroA = (cadena.match(/[a]/gi ?? [])).length;
    let numeroE = (cadena.match(/[e]/gi) ?? []).length;
    let numeroI = (cadena.match(/[i]/gi) ?? []).length;
    let numeroO = (cadena.match(/[o]/gi) ?? []).length;
    let numeroU = (cadena.match(/[u]/gi) ?? []).length;

    console.log("a esta " + numeroA + " vez");
    console.log("e esta " + numeroE + " veces");
    console.log("i esta " + numeroI + " veces");
    console.log("o esta " + numeroO + " veces");
    console.log("u esta " + numeroU + " veces");
    }

contarVocales()


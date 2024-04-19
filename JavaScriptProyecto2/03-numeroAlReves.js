/*
- Fecha de publicación: 19 de abril del 2024
- Hora: 6:00 AM
- Versión de su codigo: 03
- Autores del lenguaje utilizado: ECMASCRIPT 6.0 (javascrit 6.0)
- Versión del lenguaje utilizado: 6.0
- Presentado por:   
                    Ingeniera Luisa Victoria
                    Ingeniera Lizeth 
                    Ingeniera Andrea
                    Ingeniero Juan Manuel
                    Ingeniero Santiago Castaño
                    Ingeniero Andres
                    Ingeniero Camilo

- Universidad Tecnológica de Pereira
- Programa de Ingenieria de Sistemas y Computación
- Descripcion del programa:
Este programa pide por teclado una secuencia de numeros y devuelve la secuencia inversa.

//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo

*/


const prompt = require('prompt-sync')();

function ReversarNumero() {
    //variable de numero entero
    let integerNumber = prompt("Ingrese un numero entero: ")
    
    //si el numero es entero
    if (Number.isInteger((parseInt(integerNumber)))) {
        //convertir numero a array
        let integerNumberArray = Array.from(integerNumber)
        //reversar array
        let integerNumberArrayReversed = integerNumberArray.reverse()
        console.log("Este programa lee desde el teclado un número entero y lo imprime al revés.")
        console.log("Entre el numero: " + integerNumber)
        //convertir numero a string
        console.log(integerNumberArrayReversed.join(''))
    }
    
    // si no se ingresa un numero
    else {
       while(!Number.isInteger((parseInt(integerNumber))) )
        integerNumber = prompt("Ingrese un numero entero: ")

         //convertir numero a array
         let integerNumberArray = Array.from(integerNumber)
         //reversar array
         let integerNumberArrayReversed = integerNumberArray.reverse()
         console.log("Este programa lee desde el teclado un número entero y lo imprime al revés.")
         console.log("Entre el numero: " + integerNumber)
         //convertir numero a string
         console.log(integerNumberArrayReversed.join(''))
    }
}

ReversarNumero()
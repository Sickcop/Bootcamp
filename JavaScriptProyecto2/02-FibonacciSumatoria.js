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
Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.

//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo

*/
// Sumatoria de la serie de Fiboncci hasta el 100

function ContarFibo() {

    //definicion de variables

    let primerNum = 0, segundoNum = 1, tercerNum = 0; sumatoria = 1
    let contador= 3;
    process.stdout.write(primerNum.toString() + " , ");
    process.stdout.write(segundoNum.toString() + " , ");  

    while (contador <= 12) {
        tercerNum = primerNum + segundoNum
        process.stdout.write(tercerNum.toString() + " , ")

        //acumulador de sumatoria
        sumatoria = tercerNum + sumatoria

        //Intercambio de posiciones entre variables

        primerNum = segundoNum
        segundoNum = tercerNum
        contador++
    }
    console.log("y su suma es: " + sumatoria)

}

ContarFibo()
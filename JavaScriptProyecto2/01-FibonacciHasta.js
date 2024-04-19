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
Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......
Para este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.

//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo

*/

// Serie de Fibonacci hasta el 10.000
function ContarFibo() {
    let primerNum = 0, segundoNum = 1, tercerNum = 0;
    //Primeros outputs segun el contrato
    console.log("Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......")
    console.log("Para este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.");
    //impresion de la primera y segunda posicion
    process.stdout.write(primerNum.toString() + " , ");
    process.stdout.write(segundoNum.toString() + " , "); 
    
    //ciclo que calcula la sucesion de fibonacci
    while (tercerNum < 6765) {
        tercerNum = primerNum + segundoNum
        if (tercerNum < 6765) {3223
            process.stdout.write(tercerNum.toString() + " , ")
        }
        //condicion para no imprimir , justo en la ultima posicion
        else {
            process.stdout.write(tercerNum.toString())
        }
        //se cambian los numeros de posicion
        primerNum = segundoNum
        segundoNum = tercerNum
        
    }
}

ContarFibo()
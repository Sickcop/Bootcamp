console.log('')

/*
- Fecha de publicación: 22 de abril del 2024
- Hora: 2PM
- Versión de su codigo: 01
- Versión del lenguaje utilizado: 6.0
- Presentado por:   
                    Ingeniera Luisa Victoria
                    Ingeniero Juan Manuel

- Universidad Tecnológica de Pereira
- Programa de Ingenieria de Sistemas y Computación
- Descripcion del programa:
En el programa se puede jugar el juego triqui o 3 en raya


//Salvedad: 

-El segundo QR no esta exactamente como en el contrato
*/

let binarioRadom = 0

function generarBinario() {
     binarioRadom = Math.floor(Math.random()*2)
            if (binarioRadom == 1) {
                binarioRadom = '█'
            }

            else {
                binarioRadom = ' '
            }
}



const matrix = []

//llena el array de arrays
for (let filas = 0 ; filas < 34 ; filas ++){
    matrix[filas] = [0]
}
//llena todos los arrays de 0 y 1

let numeratorSides = -3
let numeratorUpDown = 0

for (let y = 0 ; y < matrix.length ; y++) {
    
    
    numeratorSides ++
    for (let x = 0; x < 36 ; x++) {
        
        generarBinario()
        
       
        // periferia arriba y abajo
        if (y == 1 || y == 32) {
            matrix[y][x] = '-'

            if (x == 4 || x == 35) {
                matrix[y][x] = '+'
            }

            else if ( x <= 3) {
                matrix[y][x] = ' '
               } 
        }

        else if (y == 0 || y == 33) {

        //numerador superior e inferior
           if ( x <= 4) {
            matrix[y][x] = ' '
           } 

           else if (x >= 4 && x <= 34) {
            
            if (numeratorUpDown == 10) { numeratorUpDown = 0}

           matrix[y][x] = numeratorUpDown
           numeratorUpDown ++
           }

        }
        
        //espacios de la izquierda
        else if (1 <= x && x <= 1) { 
            matrix[y][x] = ' '
           } 
        //numerador lateral

        else if (x == 2) {
            matrix[y][x] = ' '
        }

        else if (x == 3 || x == 34) { //delimitador lateral derecho
            matrix[y][x] = '|'
        }

        else if (x == 0 || x == 35) { 

            if (numeratorSides <= 9) {

                if (x == 34) {//CONNECTADA CON LA LINEA 94
                    matrix[y][x] = numeratorSides + '-' //----
                    }

                else {//este lo agarra
                    matrix[y][x] = ' ' + numeratorSides //---
                }
            }

            else if (numeratorSides >= 9) {

                //numeros despues del 10 x=0
                if (x == 0) {
                    matrix[y][x] = numeratorSides //---
                    }

                else if (x == 35) { //CONNECTADA CON LA LINEA 78
                    matrix[y][x] = numeratorSides 
                    }    

                }
            }

            else if (x == 4 || x == 33) {// Periferia final laterales
                matrix[y][x] = ' '
            }

            else if ( y == 31 || y == 2 && x > 3) { // Periferia final superior e inferior
                matrix[y][x] = ' '
            }

            else {
                matrix[y][x] = binarioRadom 
            }
        }
        
    }

//verificar cuadrado de 7x7
let count7x7 = 0
for(y=2 ; y <= 9 ; y++) { 
    for(x=36 ; x >= 26 ; x--) {
        if (matrix[y][x] == '█') {
           // matrix[y][x] = '☻'
            count7x7++
        }
    }
}
//verifica Columna 6
countColumn6th = 0
 for(x = 0 ; x < 30 ; x++) {

    if (matrix[9][6] == '█' && x == 6) {
        //matrix[9][6] = '☺'
        countColumn6th++
    }

    else if (matrix[9][8] == '█' && x == 8) {
        //matrix[9][8] = '☺'
        countColumn6th++
    }

    else if (matrix[9][29] == '█' && x == 29) {
        //matrix[9][29] = '☺'
        countColumn6th++
    }
}



console.log('')




//imprime todo como un string
for(let row of matrix) {
    let rwoString = row.join('')
    console.log(rwoString)
}

//console.log(matrix)
console.log('')



//QR con simbolos

//QR con simbolos

let acumulador = 0
let acumuladorlateral = 0

for (y = 0 ; y < 63 ; y ++) {//imprime las filas

    for(x = 0 ; x < 61 ; x ++) {//imprime las columnas
        
        if (y == 0 || y==62) {//imprime los numeros de arriba y abajo

                // if (x == 0 || x == 63) {// imprime la primera y ultima columna
                //     process.stdout.write('o')
                // }

                if ( x % 2 !== 0 ) {//imprime los numeros

                    if (acumulador == 10) {acumulador = 0}
            
                    process.stdout.write(`${acumulador ++}`)
                }

            else if (x % 2 == 0) { //imprime las filas intermedias solo arriba
                process.stdout.write('|')
            }
        
    } 
        else if (y == 1 || y == 61) { // periferia arriba y abajo

            if (x % 2 === 0){//imprime las columnas intermedias | arriba y bajoa
                process.stdout.write('|')
            }
            else {
            process.stdout.write(' ')}//imprime la periferia de arriba
        }
        
        //imprime las filas intermedias de +

        else if (y % 2 == 0 ) {

            if (x % 2 == 0 ){
            process.stdout.write('+')
            }
                else if (x % 2 != 0){
                    process.stdout.write('-')
                }
            

        }

        else if ( x == 1 || x == 59) { //imprime los espacios de la periferia lateral
            process.stdout.write(' ') 
        }

        else if (x == 0 || x == 60){
            process.stdout.write(`${acumuladorlateral ++}`)
        }
//----------------------
        else if (x % 2 === 0){
            process.stdout.write('|')//imprime los | intermedios entre fila
        }

        else {
            
            let binarioRadom = Math.floor(Math.random()*2)//genera el numero random

            if (binarioRadom == 1) {
                process.stdout.write(' ')
            }

            else {
                process.stdout.write('█')
            }
        }
    }
    
    console.log('')
    
}

console.log('')
// console.log(count7x7 + ' 7x7\n')
// console.log(countColumn6th + ' columna 6\n')

console.log('Condicion a: Se cumple')

if (count7x7 >= 25) {
    console.log('Condicion b: Se cumple. Numero de pixeles negros= ' + count7x7)
}

if (count7x7 < 25) {
    console.log('Condicion b: No cumple. Numero de pixeles negros= ' + count7x7)
}

if (countColumn6th >= 3) {
    console.log('Condicion c: Se cumple.')
}

if (countColumn6th < 3) {
    console.log('Condicion c: No se cumple.')
}



if (x % 2 == 0 && x <= 2) {
    process.stdout.write(' ')
}

`${acumulador ++}`
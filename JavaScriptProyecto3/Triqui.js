const prompt = require('prompt-sync')();

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

-Si y solo si se garantizan resultados sin cambios en el codigo 
-El juego solamente termina cuando se completan 0 turnos
-No se garantizan resultados si se repiten numeros
-No se garantizan resultados si se ingresa algo que no sea un numero de el 1 al 9

*/



let player1Option = []
let player2Option = []
let contadorPantalla = 0


for (ganador = 0 ; ganador < 5; ganador ++)  {
arrayPadre = []
let count4 = 0
let turno = 0
player1OptionVar = prompt('Jugador 1 ingrese la posicion que desea jugar: ')
player1Option.push(parseInt(player1OptionVar))

if (ganador < 4) {
player2OptionVar = prompt('Jugador 2 ingrese la posicion que desea jugar: ')
player2Option.push(parseInt(player2OptionVar)) }

//Llenar Array padre de arrays
for (let Numfilas = 0 ; Numfilas <= 4 ; Numfilas ++) {
    arrayPadre[Numfilas] = []
}
//Llenar posiciones de Arrays

for (let y = 0 ; y < arrayPadre.length ; y ++) {
    //count4 = 0
    for (let x = 0 ; x < 11 ; x ++) {
        count4 = x + 1 // hay que hacer este arreglo para que el contador de x no empiece desde 0
        arrayPadre[y][x] == 0

        if (count4 % 4 == 0 && y % 2 == 0 ) {
            
            arrayPadre[y][x] = '|'
            
        }

        else if (y % 2 != 0 && count4 % 4 == 0  ) {
            arrayPadre[y][x] = '+'
        }

        //AQUI HAY QUE PONER LA DE LOS NUMEROS
        else if (x % 2 != 0 && y % 2 == 0) {

            turno ++
            contadorPantalla = contadorPantalla <= 9 ? ++contadorPantalla : 0
            arrayPadre[y][x] = contadorPantalla
 
            if (turno % 2 != 0) { // turno uno 'X'

                for (i = 0 ; i <= 5 ; i++) {

                    if (player1Option[i] == 1) {
                        arrayPadre[0][1] = 'X'
                    }
                
                    if (player1Option[i] == 2) {
                        arrayPadre[0][5] = 'X'
                    }
                
                    if (player1Option[i] == 3) {
                        arrayPadre[0][9] = 'X'
                    }
                
                    if (player1Option[i] == 4) {
                        arrayPadre[2][1] = 'X'
                    }
                
                    if (player1Option[i] == 5) {
                        arrayPadre[2][5] = 'X'
                    }
                
                    if (player1Option[i] == 6) {
                        arrayPadre[2][9] = 'X'
                    }
                
                    if (player1Option[i] == 7) {
                        arrayPadre[4][1] = 'X'
                    }
                
                    if (player1Option[i] == 8) {
                        arrayPadre[4][5] = 'X'
                    }
                
                    if (player1Option[i] == 9) {
                        arrayPadre[4][9] = 'X'
                    }

                }

                if (player1Option == 1) {
                    arrayPadre[0][1] = 'X'
                }

                else if (player1Option == 2) {
                    arrayPadre[0][5] = 'X'
                }

                else if (player1Option == 3) {
                    arrayPadre[0][9] = 'X'
                }
                
                else if (player1Option == 4) {
                    arrayPadre[2][1] = 'X'
                }

                else if (player1Option == 5) {
                    arrayPadre[2][5] = 'X'
                }

                else if (player1Option == 6) {
                    arrayPadre[2][9] = 'X'
                }
                
                else if (player1Option == 7) {
                    arrayPadre[4][1] = 'X'
                }

                else if (player1Option == 8) {
                    arrayPadre[4][5] = 'X'
                }

                else if (player1Option == 9) {
                    arrayPadre[4][9] = 'X'
                }

            }

            else if (turno % 2 == 0) {// turno dos 'O'
//---------------------------------------------------------------
                for (i = 0 ; i <= 10 ; i++) {

                    if (player2Option[i] == 1) {
                        arrayPadre[0][1] = 'O'
                    }
                
                    if (player2Option[i] == 2) {
                        arrayPadre[0][5] = 'O'
                    }
                
                    if (player2Option[i] == 3) {
                        arrayPadre[0][9] = 'O'
                    }
                
                    if (player2Option[i] == 4) {
                        arrayPadre[2][1] = 'O'
                    }
                
                    if (player2Option[i] == 5) {
                        arrayPadre[2][5] = 'O'
                    }
                
                    if (player2Option[i] == 6) {
                        arrayPadre[2][9] = 'O'
                    }
                
                    if (player2Option[i] == 7) {
                        arrayPadre[4][1] = 'O'
                    }
                
                    if (player2Option[i] == 8) {
                        arrayPadre[4][5] = 'O'
                    }
                
                    if (player2Option[i] == 9) {
                        arrayPadre[4][9] = 'O'
                    }
                }
//------------------------------------------------------------------                

                if (player2Option == 1  ) {
                    arrayPadre[0][1] = 'O'
                }

                else if (player2Option == 2 ) {
                    arrayPadre[0][5] = 'O'
                }

                else if (player2Option == 3 ) {
                    arrayPadre[0][9] = 'O'
                }
                
                else if (player2Option == 4 ) {
                    arrayPadre[2][1] = 'O'
                }

                else if (player2Option == 5 ) {
                    arrayPadre[2][5] = 'O'
                }

                else if (player2Option == 6 ) {
                    arrayPadre[2][9] = 'O'
                }
                
                else if (player2Option == 7 ) {
                    arrayPadre[4][1] = 'O'
                }

                else if (player2Option == 8 ) {
                    arrayPadre[4][5] = 'O'
                }

                else if (player2Option == 9 ) {
                    arrayPadre[4][9] = 'O'
                }
            }
            
            

        }

        else if (y % 2 == 0) {
            arrayPadre[y][x] = ' '
        }

        else {
            arrayPadre[y][x] = '-'
        }

    }
}


//Imprimir Array
//console.log(arrayPadre)

for(row of arrayPadre) {
    rowString = row.join('')
    console.log(rowString)
}

console.log('opciones escogidas por jugador 1 : ' + player1Option + ' ')
console.log('opciones escogidas por jugador 2 : ' +player2Option + ' ')

}// ciclo for grande


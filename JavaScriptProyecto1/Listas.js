// Mayores y menores
function MayorMenorLista() {
    let listaNumero = [1, 2, 5, 45, 86, 97, 15, 4];

    let maximo = 0
    for (let i = 0; i < listaNumero.length; i++) {
        if(maximo <= listaNumero[i]){
            maximo = listaNumero[i]
        }
    }
    console.log(maximo)
}

MayorMenorLista()

 //Concatenación de Listas:

//Apertura de espacio de memoria
const prompt = require('prompt-sync')()
//Listas a combinar
let lista1 = ["4", "9", "2"];
let lista2 = ["7", "5", "1"];
//Combinacion de lista1 y lista2
let lista3 = lista1.concat(lista2);
//Función para organizar
lista3.sort(); 

//Mostrar en pantalla
console.log(lista3);
/*

// store input numbers
let num1 = document.getElementById("input1");
let sum1 = document.getElementById("input1");
const num2 = document.getElementById("input2").value;
const num3 = document.getElementById("input3").value;

//add two numbers
const sum = num1 + num2 + num3;

// display the sum
console.log(sum);

*/
/*
var op1 = document.querySelector('#input1').value;
var op2 = document.querySelector('#input2').value;
var op3 = document.querySelector('#input3').value;
totalcards = (op1 + op2 + op3);
console.log(totalcards);
*/

/*
let opcionUno = document.querySelector('#selecc1').value;
console.log('este es el valor de opcionUno ', opcionUno);
let opcionDos = document.querySelector('#selecc2').value;
let opcionTres = document.querySelector('#selecc3').value;
let totalCards = Number(opcionUno) + Number(opcionDos) + Number(opcionTres);
let texto = '';
console.log('esta es la suma de los cards', totalCards)
*/


function validarCantidad() {
    let opcionUno = document.querySelector('#selecc1').value;
    console.log('este es el valor de opcionUno ', opcionUno);
    let opcionDos = document.querySelector('#selecc2').value;
    let opcionTres = document.querySelector('#selecc3').value;
    let totalCards = Number(opcionUno) + Number(opcionDos) + Number(opcionTres);
    let texto = '';
    console.log('esta es la suma de los cards', totalCards)

    if (totalCards >= 10) {
        texto = 'Puedes elegir hasta 10 stickers';
    } else {
        texto = '¡Sigue agregando, aún puedes elegir más stickers!';
    }
    document.getElementById("verificar").innerHTML = texto;
}
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
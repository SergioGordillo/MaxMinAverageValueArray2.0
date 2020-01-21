let array = [];
var resultado = "";

function calcular() {


    let texto = document.getElementById("input").value;
    var reg = new RegExp(/[0-9]+(\s\,)*/); //Expresión regular que significa que tiene que haber mínimo un número y puede haber más (+), que pueden aparecer espacios y , con frecuencia 0 o más (*). 


    if (reg.test(texto)) { 

        var enteros = document.getElementById("input").value.split(/\,(?:\s)*/); //Córtame por las comas y los espacios que haya delante, sean 0 o varios. El split me genera array.

        for (let i = 0; i < enteros.length; i++) {
            let enterosParseado=parseInt(enteros[i].trim()); //Parseo los enteros y le quito los espacios con trim
            array.push(enterosParseado);
        }

        let mayor = Math.max.apply(null, array); //Calcula el mayor del array
        let menor = Math.min.apply(null, array); //Calcula el menor del array

        resultado = "El mayor número del array es " + mayor + " y el menor número del array es " + menor + " . La media de los números que componen el array es de ";
        resultado += calcularMedia();
        resultado += ".";
        output.innerHTML = resultado;

        array = []; //Con esto reinicio el array tras mostrar el resultado


    } else {

        output.innerHTML="Los valores insertados no cumplen el formato exigido"; 

    }




}

function calcularMedia() {

    var tamanioArray = array.length; //Saco el tamaño del array
    var sumatorioNumeros = 0;
    var media = 0;

    for (let i = 0; i < array.length; i++) {
        sumatorioNumeros = sumatorioNumeros + array[i];
    }
    media = sumatorioNumeros / tamanioArray;
    return media;
}

function esNumero(num) { //Función que me comprueba que un valor no sea NaN, es decir, que sea número
    return !isNaN(num);
}

function generarNumerosAleatorios() {
    let minimo = 0;
    let maximo = 100;
    let numeros = 5;

    let resultado = "";

    for (let i = 0; i < numeros; i++) {
        let valorAleatorio = (Math.floor(Math.random() * (maximo - minimo)) + minimo);

        if (i == numeros - 1) {
            resultado += valorAleatorio;
        } else {
            resultado += valorAleatorio + ",";
        }
    }
    document.getElementById("input").value = resultado;
}

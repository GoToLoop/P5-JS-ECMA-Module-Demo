var operand1= "0";

document.addEventListener('DOMContentLoaded', function() {
    operand1="0";
    document.getElementById("pantallaResultat").value = operand1;
});

function tractarUn() {
    operand1 = operand1 + "1";
    pantalla = document.getElementById("pantallaResultat");
    pantalla.value = operand1;
}

function tractarDos() {
    operand1 = operand1 + "2";
    pantalla = document.getElementById("pantallaResultat");
    pantalla.value = operand1;
}

function tractarTres() {
    operand1 = operand1 + "3";
    pantalla = document.getElementById("pantallaResultat");
    pantalla.value = operand1;
}

var result = (function () {
    var name = "Barry";
    return name;
})();

console.log(result);

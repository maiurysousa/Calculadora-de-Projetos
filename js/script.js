var spanProjeto = document.querySelector("#resposta");

var inputValorHora = document.querySelector("#valor-hora")

var inputHorasProjeto = document.querySelector("#horas-projeto")

function calcular(){
    var valorTotalProjeto = (inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber).toFixed(2);
    console.log(valorTotalProjeto)
    spanProjeto.textContent = "R$" + valorTotalProjeto
}

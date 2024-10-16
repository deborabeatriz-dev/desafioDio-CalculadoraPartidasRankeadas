const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var quantVitorias;
var quantDerrotas;
var classificao;

console.log(" ");

input.question('Informe a quantidade de vitórias: ', (resposta) => {
    quantVitorias = resposta;
    console.log(" ");

    input.question('Informe a quantidade de derrotas: ', (resposta) => {
        quantDerrotas = resposta;
        console.log(" ");

        calculaPartidas(quantVitorias, quantDerrotas);

        input.close();
    });

});

function calculaPartidas(vitorias, derrotas){
    saldoRankeadas = vitorias - derrotas;

    if (saldoRankeadas <= 10) {
        classificao = "Ferro"
    } else if (saldoRankeadas >= 11 && saldoRankeadas <= 20){
        classificao = "Bronze"
    } else if (saldoRankeadas >= 21 && saldoRankeadas <= 50){
        classificao = "Prata"
    } else if (saldoRankeadas >= 51 && saldoRankeadas <= 80){
        classificao = "Ouro"
    } else if (saldoRankeadas >= 81 && saldoRankeadas <= 90){
        classificao = "Diamante"
    } else if (saldoRankeadas >= 91 && saldoRankeadas <= 100){
        classificao = "Lendário"
    } else if (saldoRankeadas <= 101){
        classificao = "Imortal"
    }

    console.log("********************************")
    console.log(" ")
    console.log ("O Herói tem de saldo de " + saldoRankeadas + " está no nível de " + classificao);
    console.log(" ")
    console.log("********************************")
};
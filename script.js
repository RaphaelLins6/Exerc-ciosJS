/*
1- Calcule o dobro de um número indicado pelo usúario
2- Calcule a média após solicitar duas notas para o usuário
3- Calcule a quantidade de horas de uma viagem em dias
4- Calcule o valor da conta de um restaurante, recebendo o valor principal e calculando 10% do garçom
5- Calcule quantas horas você já viveu
*/

//1-
let num1 = prompt("Digite um número");
let dob = (num1 * 2);
alert('O dobro do seu número é: ' + dob);

//2-
let num2 = Number(prompt('Digite a primeira nota : '));
let num3 = Number(prompt('Digite a segunda nota: '));
let media = ((num2 + num3) / 2);
alert('A sua média é: ' + media);

//3-
let viagem = Number(prompt('Digite quantas horas sua viagem terá: '));
let horas = (viagem / 24);
alert('Sua viagem vai durar: ' + horas + ' dias.');

//4-
let valorConta = Number(prompt('Qual o valor da conta ?'));
let taxa = ((valorConta / 100) * 10);
let valorTotal = (valorConta + taxa);
alert('O valor da conta é de: ' + valorTotal + ' Reais');

//5-
let idade = Number(prompt('Qual a sua idade ?'));
let ano = 8760
let hor = (idade * ano);
alert('Você já viveu ' + hor + ' horas.');
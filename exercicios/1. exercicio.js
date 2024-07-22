// Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve 
// calcular a média alcançada por aluno e apresentar:
//  - A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//  - A mensagem "Reprovado", se a média for menor do que sete;
//  - A mensagem "Aprovado com Distinção", se a média for igual a dez. 

var nota1 = parseFloat(prompt('digite a primeira nota: '));
var nota2 = parseFloat(prompt('digite a segunda nota: '));
var media = (nota1 + nota2) / 2;

if (media >= 7 && media < 10) { 
    document.write('Aprovado') } 
else if (media < 7) { 
    document.write('Reprovado') } 
else if (media === 10) {
     document.write('Aprovado com Distinção') } 
else { 
    document.write('Média invalida') } 
// Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo
// usuário. Considere os seguintes critérios:
// Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”.
// Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”.
// Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”.
// Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”. 

var idade = parseInt(prompt('Digite sua idade: '))
if (idade >= 0 && idade < 15) {
    document.write('Criança.');
}
else if (idade >= 15 && idade < 30) {
    document.write('Jovem.');
}
else if (idade >= 30 && idade < 60) {
    document.write('Adulto.');
}
else if (idade >= 60) {
    document.write('Idoso.');
}
else {
    document.write('Idade Inválida.');
}
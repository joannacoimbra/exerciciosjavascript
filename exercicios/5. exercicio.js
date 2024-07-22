// Faça um Programa que leia três números e mostre o maior deles.
var x = parseFloat(prompt('digite um número: '))
var y = parseFloat(prompt('digite outro número: '))
var z = parseFloat(prompt('digite outro número: '))
switch (true){
    case (x>y && x>z):
        document.write(x + ' é o maior número entre os números informados.')
    break;
    case (y>x && y>z):
        document.write(y + ' é o maior número entre os números informados.')
    break;
    case (z>x && z>y):
        document.write(z + ' é o maior número entre os números informados.')
    break;
    default:
        document.write(' os números informados não são válidos.')
}
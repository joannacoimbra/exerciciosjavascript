// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
var letra = prompt ('digite uma letra: ')
switch (letra){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        document.write('A letra digitada é VOGAL.')
        break;
    default:
        document.write('A letra digitada é CONSOANTE.')
        break;
}
"use strict";
// função de soma
function multiplicaSimples(num1, num2) {
    return num1 * num2;
}
console.log(multiplicaSimples(12, 12));
/* ******* */
// Olá! Fiz essa função pensando em previnir contra o recebimento de argumentos como string, 
// mas ainda assim manter funcional o retorno de um número. É só um teste, mas gostaria de saber se é válida, ou se ainda é arriscado deixar
// a tipagem ambígua nesse caso.
function multiplicaStringOuNumber(a, b) {
    return parseFloat(a) * parseFloat(b);
}
console.log(multiplicaStringOuNumber('12', 12));
/* ******* */
// função de saudação
function saudacao(nome) {
    return `Olá, ${nome}, como vai?`;
}
console.log(saudacao('Monitor'));

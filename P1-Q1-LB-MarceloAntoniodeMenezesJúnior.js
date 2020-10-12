/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Marcelo Antonio de Menezes Júnior
 * Curso: TSI 
 * Aula: Aula 18 - Primeira Avaliação Individual
 * Questão: 1
 * Letra: b
 *
 */

function calculaf(a,b,c){
    var a = a;
    var b = b;
    var c = c;
    var resultado = 0;
    resultado = (a**3) - (c**2) + b + ((a*c)/b);

    return resultado;
}

var impressao = calculaf(4,2,1);
console.log(impressao);
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
 * Questão: 2
 * Letra:b
 *
 */

function verificarIguais(a,b,c){
    var resultado = false;
    if(a == b && b == c){
        resultado = true;
    }
    return resultado;
}

var impressao = verificarIguais(0,0,0);
console.log(impressao);
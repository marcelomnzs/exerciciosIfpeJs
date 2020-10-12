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
 * Questão: 3
 * Letra: b
 *
 */

function somaImpar(x){
    var a = x;
    var soma = 0;
    for(var i = -x; i<=0; i++){
        if(i % 2 !=0){
            soma += i;   
        }
    }
    return soma;
}

var impressao = somaImpar(10);
console.log(impressao);
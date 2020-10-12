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
 * Questão: 4
 *
 */

function elevar(b) {  //Não é necessário o uso do var, pois aqui é necessário explicitar a passagem de um parâmetro
    a = 7;
    Resultado = 1;     //Mudança de sinal da variável !
    for (let i = b; i > 0; i--) {
        Resultado *= a // Erro de sintaxe, pois o operador (*=) já explicita o a multiplicação pelo valor de resultado! 
    }

    return Resultado;  //Erro de sintaxe pois o return não usa o R maiúsculo && o retorno da função estava incorreto, pois iria retornar o valor de a!
}

var impressao = elevar(2);
console.log(impressao);
/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Allan Diego Silva Lima
 * Curso: responder TSI ou IPI
 * Aula: Aula 22 - Exercício Individual - Arrays
 * Questão: 1a
 *
 */

//Dado um arrays de duas dimensões como parâmetro, imprimir todos os elementos ímpares do vetor em ordem inversa;

function imparInverso(vetor){
    for (var i = (vetor.length - 1); i >= 0 ; i--) {
        for (var j = (vetor[i].length - 1); j >= 0 ; j--) {
            if(vetor[i][j] % 2 != 0){
                process.stdout.write(`${vetor[i][j]} \t`);
            }
        }
    }
}

var x = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
]

var impressao = imparInverso(x);







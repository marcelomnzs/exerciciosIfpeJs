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
 * Questão: 2
 *
 */

function f(x) {                 //Comando escrito errado, erro de sintaxe
    var total = 0
    for (var i = 0; i < x.length; i++) {        //Operadores de incremento errado, o que faria com que o programa entrasse em um loop infinito
        for (var j = 0; j < x.length; j++) {
            if (x[i][j] == 0) {     //Verificação do index errada
                total += 1    //Operador aritmético errado, erro de sintaxe
            }
        }
    }
    return total        //Return dentro do laço de repetição
}                     //Função sem fim, erro de compilação


var x = [
    [1,2,3],
    [0,1,3]
]

var impressao = f(x)        //Chamada para a função
console.log(impressao)
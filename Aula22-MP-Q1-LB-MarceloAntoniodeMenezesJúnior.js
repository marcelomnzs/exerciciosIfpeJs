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
 * Questão: 1b
 *
 */

function inversao(arr1,arr2){

    if(arr1.length == arr2.length){
        for (var i = (arr1.length - 1); i >= 0 ; i--) {
            for (var j = (arr1[i].length - 1); j >= 0 ; j--) {
                if(arr1[i][j] == arr2[0][0] && arr1[0][0] == arr2[arr2.length-1][arr2.length[i]]){
                    console.log("a")
                        
                                        
                }
            }
        }
    }
}
    
var arr1=[
    [1,2,3],
    [4,5,6]
]
var arr2 = [
    [6,5,4],
    [3,2,1]
]

var impressao = inversao(arr1,arr2);

console.log(impressao)

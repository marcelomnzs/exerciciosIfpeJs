/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Marcelo Antonio de Menezes Júnior 
 * Curso: TSI
 * Aula: Aula 20 - Exercício Individual - Vetores
 * Questão: 1a
 *
 */

function imparInverso(vetor){
    var a = vetor

    for(var i = a.length - 1; i >= 0; i--){
        if(a[i] % 2 != 0){
            process.stdout.write(a[i] + " "); 
        }
    }
}

var impressao = imparInverso([1,3,5,4,6,7,9,11,12,46]);


    
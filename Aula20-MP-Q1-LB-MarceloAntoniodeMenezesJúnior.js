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
 * Questão: 1b
 *
 */

//Dados dois vetores como parâmetro, retornar true se o primeiro for o inverso do outro, ou false, caso contrário.

function verificaInverso(vetor_a,vetor_b){
    var arr1 = vetor_a;
    var arr2 = vetor_b;
    var igual = 0;
    
    if(arr1.length == arr2.length){
        if(arr1[0] == arr2[arr2.length - 1] && arr2[0] == arr1[arr1.length - 1]){
            for(var i = arr1.length - 2; i > 0; i-- ){
                for(var j = 1; j <= (arr2.length - 2); j++){
                    if(arr1[i] - arr2[j] == 0){
                        igual++;
                    }
                }
            }
        }
    }
    
    if(igual == arr1.length - 2){
        return true;
    }  else {
        return false;
    }
}

var impressao = verificaInverso([1,2,3,4,5,6,7], [7,6,5,4,3,2,1]);
console.log(impressao);





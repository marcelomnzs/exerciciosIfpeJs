/*
*
* Instituto Federal de Educação, Ciência e Tecnologia - IFPE
* Cursos: Informática para Internet | Sistemas para Internet
* Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
* Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
*
* Nome completo: Marcelo Antonio de Menezes Júnior
* Curso: TSI
* Aula: Aula 19 - Vetores
* Número: 7
* Nível: 1
*
*/

function divideVetor(a,b){
    var vetor = a;
    var divisor = b;

    for(let i = 0; i < vetor.length; i++){
        vetor[i] /= divisor;
    }
    return vetor;
}


var impressao = divideVetor([3,9,6,12],3);
console.log(impressao);


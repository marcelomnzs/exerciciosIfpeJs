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
* Nível: 2
*
*/

//Implementar um subprograma que dado um vetor de booleans, retorna true se ao menos um dos elementos do vetor for verdadeiro e false, caso contrário

function confereVetor(vetor){
    var apoio = vetor;
    if(apoio.includes(true)){
        return true;
    } else {
        return false;
    }
}

var x = [false, false, false]
var resultado = confereVetor(x);

console.log(resultado);
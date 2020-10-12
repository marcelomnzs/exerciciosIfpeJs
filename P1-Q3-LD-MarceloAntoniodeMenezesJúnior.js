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
 * Letra: d
 *
 */

function somaPrima(x){
    var num = x;
    var soma = 0;
    let primo = 0;

    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            soma += i;
        }
    }
    for(var j = 1; j<=soma;j++){
        if(soma % j == 0){
            primo++;
        }
    }
    
    if(primo == 2){
        return"A soma é um número primo!";
    } else{
        return "Não é primo!";
    }
}

var impressao = somaPrima(4);
console.log(impressao);
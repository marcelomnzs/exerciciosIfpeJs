/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Marcelo Antonio de Menezes Júnior
 * Curso: TSI 
 * Aula: Aula 27 - Segunda Avaliação Individual
 * Questão: 1
 * Letra: b
 *
 */

//Modificar o código da letra anterior para transformá-lo em um subprograma que, dado um vetor e um número como parâmetros, retorne quantas vezes o número ocorre no vetor;

function verificaRepeticao(vetor, num){
    var iguais = 0;

    for(var i = 0; i < vetor.length; i++){
        if(vetor[i] == num){      
            iguais++
        }
    }
    return `O número ${num} apareceu ${iguais} vezes`

}

console.log(verificaRepeticao([0,0,0,0,1] , 0));
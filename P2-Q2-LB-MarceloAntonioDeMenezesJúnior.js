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
 * Questão: 2
 * Letra: b
 *
 */

// Modificar o código da letra anterior para transformá-lo em um subprograma que, dado um array de duas dimensões e um número como parâmetros, retorne quantas vezes o número ocorre no array;

function repeticaoArrayBi(arrayBi , num){
    var contador = 0;

    for(var i = 0; i < arrayBi.length; i++){            
        for(var j = 0; j < arrayBi[i].length; j++){
            if(arrayBi[i][j] == num){                   
                contador++
            }
        }
    }
    return(`O número ${num} se repetiu ${contador} vezes`);
}

console.log(repeticaoArrayBi([[0,10,2,3,0],[5,6,8,0,0]] , 2))





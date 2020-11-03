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
 * Letra: a
 *
 */

//Contar quantas vezes um número ocorre dentro de um array de duas dimensões;


var arrayBi = [
    [0,10,2,3,0],
    [5,6,8,0,0]
]
var num = 0;    //Número a ser escolhido para a verificação de sua repetição
var contador = 0;

for(var i = 0; i < arrayBi.length; i++){            //Laços aninhados que percorrem o array
    for(var j = 0; j < arrayBi[i].length; j++){
        if(arrayBi[i][j] == num){                   //Se o valor na posição i,j for igual ao valor da variável num o contador é incrementado
            contador++
        }
    }
}

console.log(`O número ${num} se repetiu ${contador} vezes`);
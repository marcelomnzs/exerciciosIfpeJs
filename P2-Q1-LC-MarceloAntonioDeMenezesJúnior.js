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
 * Letra: c
 *
 */

//Testar se dois vetores são idênticos


var vetor_1 = [1,2,3,4];
var vetor_2 = [1,2,3,4];
var posicoesIguais = 0;

//Faz a verificação do tamanho dos vetors, pois se eles forem iguais eles possuem o mesmo tamanho.
if(vetor_1.length == vetor_2.length){               
    for(var i = 0 ; i< vetor_1.length; i++){
        //Percorre o primeiro vetor e verifica se no mesmo indíce os valores são iguais.
        if(vetor_1[i] == vetor_2[i]){
            posicoesIguais++
        }
    }
    //Verifica se o número de valores iguais é igual ao tamanho do vetor.
    if(posicoesIguais == vetor_1.length){
        console.log(`Os vetores são iguais`)
    } else {
        console.log(`Os vetores não iguais`);
    }
} else {
    console.log(`Os vetores não iguais`);
}
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
 * Letra: d
 *
 */

//Modificar o código da letra anterior para transformá-lo em um subprograma que, dados dois vetores como parâmetros, retornar true se ambos forem iguais, ou false, caso contrário

function verificaIgualdadeEntreVetores(vetor_1, vetor_2){
    var posicoesIguais = 0;
    if(vetor_1.length == vetor_2.length){               
        for(var i = 0 ; i< vetor_1.length; i++){
            if(vetor_1[i] == vetor_2[i]){
                posicoesIguais++
            }
        }
        if(posicoesIguais == vetor_1.length){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(verificaIgualdadeEntreVetores([1,2,3,4] , [1,2,3,4]))
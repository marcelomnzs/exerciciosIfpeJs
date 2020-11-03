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
 * Letra: a
 *
 */

//Contar quantas vezes um número ocorre dentro de um vetor

var vetor = [0,1,2,0,5,5];
var iguais = 0;
var subtracao = 1;
var operacaoPossivel = true;

for(var i = 0; i < vetor.length; i++){
    if((vetor.length - subtracao) < 0 ){
        console.log(`Valor de subtração muito alto para o tamanho do vetor`)
        operacaoPossivel = false
        break;
    }
    if(vetor[i] == vetor[vetor.length - subtracao]){       //Neste caso o programa está verificando pela repetição do número '5' que está no último índice do array(length - 1), caso o usuário queira verificar outro valor, ele vai adicionar mais unidades na variável subtracao (EX: vetor.length - 3 , para o índice : 3 (== 0))
        iguais++
    }
}

if(operacaoPossivel == true){           // Verificação para a impressão do resultado, para que o mesmo não aparecesse sem haver a possíbilidade de fazer a verificação
    console.log(`O número ${vetor[vetor.length - subtracao]} apareceu ${iguais} vezes`)
}
/*
*
* Instituto Federal de Educação, Ciência e Tecnologia - IFPE
* Cursos: Informática para Internet | Sistemas para Internet
* Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
* Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
*
* Nome completo: Marcelo Antonio de Menezes Júnior
* Curso: TSI
* Aula: Aula 21 - Arrays
* Número: 8         
* Nível: 1
*
*/

//Implementar um subprograma que, dados um array bidimensional de booleans, imprime true se ao menos um dos elementos do array forem verdadeiros ou false, caso contrário

function verificaArray(a){
    arrbi = a;
    var verdade = 0;

    for(var i = 0; i < arrbi.length; i++){
        for(var j = 0; j < arrbi[i].length; j++){
            if(arrbi[i][j] == true){
                verdade++;
            }
        }
    }

    if(verdade >= 1){
        return verdade;
    } else{
        return false;
    }
}

var x = [
    [false,false,false],
    [false,false,false]
]

var impressao = verificaArray(x)
console.log(impressao)



/*
*
* Instituto Federal de Educação, Ciência e Tecnologia - IFPE
* Cursos: Informática para Internet | Sistemas para Internet
* Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
* Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
*
* Nome completo: Marcelo Antonio de Menezes Júnior
* Curso: TSI
* Aula: Aula 21 - Array 
* Número: 8
* Nível: 2
*
*/

//Implementar um programa que, dado um array bidimensional, atribui 0 a todos os elementos presentes em suas diagonais

var diagonal = [
    ["X","X","X"],
    ["X","X","X"],
    ["X","X","X"]
]

for(var i = 0; i < diagonal.length; i++){
    for(var j = 0; j < diagonal[i].length; j++){
        if(i == j){
            diagonal[i][j] = 0;
        } else if(i == 0 && j == (diagonal.length - 1)){
            diagonal[i][j] = 0;
     
        } else if(i == (diagonal.length - 1) && j == 0){
            diagonal[i][j] = 0;
        }
    }
}   


for (i = 0; i < diagonal.length; i++) {
    for (j = 0; j < diagonal[i].length; j++) {
        process.stdout.write(`${diagonal[i][j]}\t`) 
    }
    console.log() 
}

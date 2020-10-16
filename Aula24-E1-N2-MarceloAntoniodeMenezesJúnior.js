/*
*
* Instituto Federal de Educação, Ciência e Tecnologia - IFPE
* Cursos: Informática para Internet | Sistemas para Internet
* Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
* Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
*
* Nome completo: Marcelo Antonio de Menezes Júnior
* Curso: TSI
* Aula: Aula 23 - Registros
* Número: 1
* Nível: 2
*
*/  

class Quadrado {
    constructor(lado){
        this.lado = lado; 
    }
}

function retornaPosicao(sqr){
    for(var i = 0; i < colecao.length; i++){
        if(colecao[i] == sqr) {
            return colecao[i];
        }
    }
}

var q1 = new Quadrado(5);
var q2 = new Quadrado(7);
var q3 = new Quadrado(1);
var q4 = new Quadrado(8);
var q5 = new Quadrado(3);

colecao = []

colecao[0] = q1
colecao[1] = q2
colecao[2] = q3
colecao[3] = q4
colecao[4] = q5

console.log(retornaPosicao(q5));
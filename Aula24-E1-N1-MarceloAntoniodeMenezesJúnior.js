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
* Nível: 1
*
*/  

class Quadrado{
    constructor(lado){
        this.lado = lado;
    } 
}

function area(sqr){
    return `A área do quadrado é: ${sqr.lado ** 2}`; 
}

function perimetro(sqr){
    return `O perímetro do quadrado é: ${sqr.lado * 4}`;
}

var q1 = new Quadrado(2);
console.log(area(q1));

var q2 = new Quadrado(5);
console.log(perimetro(q2));

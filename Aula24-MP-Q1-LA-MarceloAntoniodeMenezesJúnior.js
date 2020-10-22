/*
*
* Instituto Federal de Educação, Ciência e Tecnologia - IFPE
* Cursos: Informática para Internet | Sistemas para Internet
* Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
* Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
*
* Nome completo: Marcelo Antonio de Menezes Júnior
* Curso: TSI
* Aula: Aula 24 - Exercício Individual - Registros
* Questão: 1a
*
*/

class Bicicleta {
    constructor(modelo, fabricante, cor){
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.cor = cor;
    }
}

function bikeIguais(bike_1 , bike_2){
    if(bike_1.modelo == bike_2.modelo && bike_1.cor == bike_2.cor && bike_1.fabricante == bike_2.fabricante){
        return true;
    }  else {
        return false;
    }
}

var b1 = new Bicicleta ("BMX", "Caloi", "Rosa");
var b2 = new Bicicleta ("BMX", "Caloi", "Vermelho");

console.log(bikeIguais(b1,b2));


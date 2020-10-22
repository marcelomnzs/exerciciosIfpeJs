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
* Questão: 1b
*
*/

class Bicicleta {
    constructor(modelo, fabricante, cor){
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.cor = cor;
    }
}

class EstoqueLoja{
    constructor(loja, quantidade , bicicletas){
        this.loja = loja;
        this.quantidade = quantidade;
        this.bicicletas = bicicletas;
    }
}

function bikeIguais(bike_1 , bike_2){
    if(bike_1.modelo == bike_2.modelo && bike_1.cor == bike_2.cor && bike_1.fabricante == bike_2.fabricante){
        return true;
    }  else {
        return false;
    }
}

function disponibilidade(bike){
    var contadorIguais = 0;
    for(var i = 0; i < estoque.bicicletas.length;i++){
        for(var j = 0; j < estoque.bicicletas[i].length;j++){
            if(bikeIguais(bike,estoque.bicicletas[i][j]) == true){
                contadorIguais++;
            }
        }
    }

    return `Há ${contadorIguais} bicicleta(s) desse modelo no estoque!`;
}

var b1 = new Bicicleta ("BMX", "Caloi", "Verde");
var b2 = new Bicicleta ("BMX", "Hunter", "Vermelho");
var b3 = new Bicicleta ("Mountain-Bike", "Caloi", "Preto");
var b4 = new Bicicleta ("Mountain-Bike", "Caloi", "Preto");
var b5 = new Bicicleta ("Speed", "Caloi", "Vermelho");
var b6 = new Bicicleta ("BMX", "Colli Bikes", "Azul-Marinho");
var b7 = new Bicicleta ("Passeio", "Monark", "Vermelho");

/*Declaração do estoque
    Primeiro parâmetro = Loja
    Array1 = Modelos e quantidades de bicicletas
    Array2 = Bicicletas;
*/ 
var estoque = new EstoqueLoja("Centro - Igarassu", 
[
    ["Bmx", 3],   
    ["Mountain-Bike" , 2], 
    ["Speed", 1],  
    ["Passeio", 1]  
]
 , 
[
    [b1,b2,b6],
    [b3,b4],    
    [b5],     
    [b7],      
]);

console.log(disponibilidade(b7));


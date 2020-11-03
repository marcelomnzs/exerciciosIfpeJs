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
 * Questão: 3
 * Letra: d
 *
 */

//Crie uma operação que dado um estoque como parâmetro, retorna a sombrinha mais barata disponível no estoque.

class Sombrinha {
	constructor(cor, tamanho, preco){
		this.cor = cor;
		this.tamanho = tamanho;
		this.preco = preco;
	}
}

function exibeSombrinha(sombrinha){
	return `Sombrinha(COR/TAMANHO/PREÇO): ${sombrinha.cor}/${sombrinha.tamanho}/${sombrinha.preco}`
} 

class Estoque {
	constructor(nome, espacoTotal, sombrinhas){
		this.nome = nome;
		this.espacoTotal = espacoTotal;
		this.sombrinhas = sombrinhas;
	}
}

function sombrinhaMaisBarata(estoque){
	var menorPreco = estoque.sombrinhas[0].preco;
	var menorPrecoIgual =0;
	for(var i = 1; i < estoque.sombrinhas.length; i++){	//Percorre o estoque e compara o mesmo com o valor da primeira posição do array de sombrinhas, caso ele seja menor, a variavel menorPreco receberá o valor da posição atual!
		if(estoque.sombrinhas[i].preco < menorPreco){
			menorPreco = estoque.sombrinhas[i].preco;
		} else if(estoque.sombrinhas[i].preco == menorPreco){
			menorPrecoIgual++;
		}
	}

	if(menorPrecoIgual !=0){			
		return `Há mais de um produto com o menor preço (${menorPreco}) no estoque`
	} else{
		for(var j = 0; j < estoque.sombrinhas.length; j++){
			if(menorPreco == estoque.sombrinhas[j].preco){
				return estoque.sombrinhas[j];
			}
		}
	}	
}	

var s1 = new Sombrinha("Azul", "20,5cm", 9);
var s2 = new Sombrinha("Vermelha", "30,5cm", 12.50);
var s3 = new Sombrinha("Amarela", "35cm", 15);
var s4 = new Sombrinha("Rosa", "50cm", 20);

var estoqueCentro = new Estoque("Centro", 10, [s1,s2,s3,s4]);

console.log(sombrinhaMaisBarata(estoqueCentro));
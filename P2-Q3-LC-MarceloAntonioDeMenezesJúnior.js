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
 * Letra: c
 *
 */

//Crie um tipo chamado estoque contendo uma lista de sombrinhas, no mesmo programa declare, inicialize e imprima os valores e uma variável do tipo sombrinha

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

var s1 = new Sombrinha("Azul", "20,5cm", 9);
var s2 = new Sombrinha("Vermelha", "30,5cm", 12.50);
var s3 = new Sombrinha("Amarela", "35cm", 15);
var s4 = new Sombrinha("Rosa", "50cm", 13);

var estoqueCentro = new Estoque("Centro", 10, [s1,s2,s3,s4]);

console.log(`Nome do estoque: ${estoqueCentro.nome}`);
console.log(`Espaço total do estoque: ${estoqueCentro.espacoTotal}`);
console.log(`Sombrinhas no estoque` , estoqueCentro.sombrinhas);
console.log(`Sombrinha s1:` , estoqueCentro.sombrinhas[0]);








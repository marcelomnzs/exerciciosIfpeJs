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
 * Letra: b
 *
 */

//Crie uma operação que, dada uma sombrinha como parâmetro, imprime todos seus atributos

class Sombrinha {
	constructor(cor, tamanho, preco){
		this.cor = cor;
		this.tamanho = tamanho;
		this.preco = preco;
	}
}

function exibeSombrinha(sombrinha){
	return `Sombrinha(COR/TAMANHO/PREÇO): ${s1.cor}/${s1.tamanho}/R$${s1.preco}`;
} 

var s1 = new Sombrinha("Amarela", "50cm", 13);
console.log(exibeSombrinha(s1));


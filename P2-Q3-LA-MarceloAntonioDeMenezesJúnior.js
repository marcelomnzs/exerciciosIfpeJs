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
 * Letra: a
 *
 */

//Crie um programa definindo um tipo sombrinha, e no mesmo programa declare, inicialize e imprima os valores e uma variável do tipo sombrinha.

class Sombrinha {
	constructor(cor, tamanho, preco){
		this.cor = cor;
		this.tamanho = tamanho;
		this.preco = preco;
	}
}

var s1 = new Sombrinha("Amarela", "50cm", 13);

console.log(`A sombrinha é ${s1.cor}`);
console.log(`O tamanho é ${s1.tamanho} de comprimento`);
console.log(`O preço é R$${s1.preco}`);


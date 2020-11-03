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
 * Questão: 2
 * Letra: d
 *
 */

// Modificar o código da letra anterior para transformá-lo em um subprograma que, dada um array tridimensional como parâmetro, retornar quantos elementos ímpares há nele.

function retornaQuantidadeImpares(arrayTri){
	var elementosImpares = 0;

	for (i = 0; i < numeros.length; i++) {              
		for (j = 0; j < numeros[i].length; j++) { 
			for (k = 0; k < numeros[i][j].length; k++) { 
				if(numeros[i][j][k] %2 != 0){
					elementosImpares++;
				}
			}
		}
	}
	return(`Há ${elementosImpares} ímpares nesse array`);
}

var numeros = [];

for (i = 0; i < 3; i++) {          
	numeros[i] = [];
	for (j = 0; j < 2; j++) { 
		numeros[i][j] = [];
		for (k = 0; k < 5; k++) { 
            numeros[i][j][k] = i + j + k;
		}
	}
}

console.log(retornaQuantidadeImpares(numeros))





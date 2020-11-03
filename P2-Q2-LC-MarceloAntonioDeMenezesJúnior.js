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
 * Letra: c
 *
 */

// Dado um array de três dimensões, contar quantos elementos ímpares há nele;


var numeros = [];
var elementosImpares = 0;

for (i = 0; i < 3; i++) {          //Laços responsáveis pela criação de um array 3d
	numeros[i] = [];
	for (j = 0; j < 2; j++) { 
		numeros[i][j] = [];
		for (k = 0; k < 5; k++) { 
            numeros[i][j][k] = i + j + k;
		}
	}
}

for (i = 0; i < numeros.length; i++) {              // Verificação do valor ímpar na posição i,j,k
	for (j = 0; j < numeros[i].length; j++) { 
		for (k = 0; k < numeros[i][j].length; k++) { 
            if(numeros[i][j][k] %2 != 0){
                elementosImpares++;
            }
		}
    }
}

console.log(numeros);
console.log(`O array possui ${elementosImpares} elementos ímpares`);
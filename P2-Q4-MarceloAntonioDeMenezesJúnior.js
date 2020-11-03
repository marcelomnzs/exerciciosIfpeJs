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
 * Questão: 4
 *
 */

 //O programa abaixo deveria criar o tipo Componente Curricular e declarar uma operação que retorna a nota de um estudantes no componente curricular. Encontre e corrija os erros do código, para cada correção escreva um comentário na linha modificada explicando qual o erro e como ele foi corrigido.


 class ComponenteCurricular {
    constructor(nome, professor, estudantes) {	//Erro de sintaxe, para declarar o function não é necessário o uso do function.
       this.nome = nome
       this.professor = professor
       this.estudantes = estudantes		//Erro de sintaxe na declaração dos estudantes, corrigido adicionando o s (estudanteS)
   }
}


function notaEstudante(componente, estudante) {
   var nota = 0
   for (var i = 0; i < componente.estudantes.length; i++) {
       for(var j = 0; j < componente.estudantes[i].length; j++){ //Criação de um outro for para percorrer o array bidimensional de [estudantes][notas]
           if(estudante == componente.estudantes[i][j]) { //Verificação recebe a variável do segundo for
               nota = componente.estudantes[i][j + 1];	//Nota agora recebe os valores na posição [i][j + 1], o j acrescido em uma unidade para pegar o índice da nota.  
           } 
       }	
   }
   return nota;
}

var notaMatematica = new ComponenteCurricular("Matemática", "Maurício", [["Marcelo" , 5.5], ["Arthur", 6.0], ["Bertonni", 8.0], ["Simeia", 7.0],["Pecris", 6.0]]);	//Criação de um ComponenteCurrucular 


console.log(notaEstudante(notaMatematica, "Bertonni"))	//Chamada + impressão do resultado da função



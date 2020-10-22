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
* Questão: 2
*
*/

//(3.0) Reescreva corretamente o programa que deveria implementar o tipo Balança e a função imprimirBalanca que imprime todos os seus atributos. Para cada alteração feita no código escreva uma frase justificando a mesma como comentário no código-fonte.


class Balanca {                             //Erro de Sintaxe, register não existe em JS, deve ser substítuido por class
    constructor(marca, pesoMaximo) {
        this.marca = marca
        this.pesoMaximo = pesoMaximo
    }
}


function imprimirBalanca(balanca) {              //Erro de sintaxe, function estava escrito errado
    console.log("peso máximo:", balanca.pesoMaximo)     //Erro de sintaxe, para definir uma string, é usado aspas simples ou duplas
    console.log("marca: ", balanca.marca)             //Erro de sintaxe, para definir uma string, é usado aspas simples ou duplas && o atributo chamado para impressão do peso estava errado.
}


b1 = new Balanca("toledo", 105.5);          //Criação de uma nova balança para ser o parâmetro passado para a função
imprimirBalanca(b1)                          //A função não era chamada, portanto sua saída era sempre vazia
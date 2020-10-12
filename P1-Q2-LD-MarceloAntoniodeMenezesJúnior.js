/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Marcelo Antonio de Menezes Júnior
 * Curso: TSI 
 * Aula: Aula 18 - Primeira Avaliação Individual
 * Questão: 2
 * Letra: d
 *
 */

function comparaData(a,b,c,d,e,f){
    var dia_1 = a;
    var mes_1 = b;
    var ano_1 = c;
    var dia_2 = d;
    var mes_2 = e;
    var ano_2 = f;
    var resultado = 0;
    var retorno = 0;

    resultado = (dia_1 - dia_2) + ((mes_1 - mes_2) * 30) + ((ano_1 - ano_2)*365);

    if(resultado > 0 ){
        retorno = -1; 
     } else if (resultado == 0){
         retorno = 0;
     } else {
         retorno = 1;
     }   

    return retorno;
}

var impressao = comparaData(25,07,2020,25,07,2020);
console.log(impressao);
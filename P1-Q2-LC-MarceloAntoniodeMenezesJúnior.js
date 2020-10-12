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
 * Letra: c
 *
 */

var dia_1 = 25;
var mes_1 = 07;
var ano_1 = 2020; 
var dia_2 = 12;
var mes_2 = 07;
var ano_2 = 2020;
var resultado = 0;

resultado = (dia_1 - dia_2) + ((mes_1 - mes_2) * 30) + ((ano_1 - ano_2)*365);

if(resultado > 0 ){
   console.log("A primeira data é mais recente!") 
} else{
    console.log("A segunda data é mais recente!")
}
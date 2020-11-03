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
 * Questão: 5
 *
 */


var readlineSync = require('readline-sync');
var amigos = [];
var usuarioAtual;
let resposta = "";
let confirmacao = false;
let contadorAmigos = 0;
let textos = [];

class Usuario {
    constructor(nome, estilo, instrumento) {
        this.Nome = nome;
        this.Estilo = estilo;
        this.Instrumento = instrumento;

    }
}

var u1 = new Usuario("Robson Costa", "Rock", "Baixo");
var u2 = new Usuario("Ludwig van Beethoven", "Música Clássica", "Piano");
var u3 = new Usuario("Mateus Asato", "Pop", "Guitarra");
var u4 = new Usuario("John Frusciante", "Rock", "Guitarra");
var u5 = new Usuario("Riquelme", "Forró", "Bateria");
var u6 = new Usuario("Stevie Wonder", "Soul", "Teclado");
var u7 = new Usuario("Jimi Hendrix", "Rock", "Guitarra");
var u8 = new Usuario("Yamandu Costa", "Música Clássica", "Violão");
var u9 = new Usuario("Flea", "Punk", "Baixo");
var u10 = new Usuario("Ringo Star", "Rock", "Baixo");


var usuarios = [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10];


function cabecalhos(valor) {

    if (valor == "intro") {
        console.log("================================================================================");
        console.log("\t \t   MUSICIANFINDER");
        console.log("\t Porque a boa música é feita em grupo!");
        console.log("================================================================================");
    }

    if (valor == 1) {
        console.log("================================================================================");
        console.log("\t \t   Seja bem-vindo ao MusiciansFinder,\n \t   o lugar feito para encontrar um parceiro musical!");
        console.log("\t Nós acreditamos que a música foi feita para ser tocada em grupo,\n \t   digite seu nome e ache amigos para fazer aquele som massa!");
        console.log("================================================================================");
    }

    if (valor == 2) {
        console.log("================================================================================");
        console.log("\t \t   Seja bem-vindo ao MusiciansFinder,\n \t   o lugar feito para encontrar um parceiro musical!");
        console.log("================================================================================");
    }

    if (valor == 4) {
        console.log("  Parece que você não tem amigos, eis aqui algumas sugestões! ");
    }

    if (valor == 5) {
        console.log("================================================================================");
        console.log("  Parece que você encontrou um amigo, para o adicionar basta escrever os seus dados!\n (Caixa alta nas iniciais)");
        console.log("================================================================================");
    }

    if(valor == 6){
        console.log("  Textos publicados");
    }
}

function recomendarAmigos(usuarioAtual) {
    var recomendacoes = [];
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarioAtual.Estilo == usuarios[i].Estilo) {
            recomendacoes.push(usuarios[i]);
        }
    }

    return (recomendacoes);
}

function adicionarAmigo(nome, estilo) {
    let usuarioExiste = false;
    
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].Nome == nome && usuarios[i].Estilo == estilo) {
            contadorAmigos++;
            usuarioExiste = true;
            return amigos.push = usuarios[i];;
        }
    }
    if (usuarioExiste == false) {
        return `O usuário não existe!`;
    }
}

function publicarTexto(texto){
    var data = new Date();
    var dataFormatada = (data.getDay() + "/" + (data.getMonth()+ 1) + "/" + data.getFullYear());
    textos.push(`\t`,texto , "Publicado no dia" , dataFormatada);
    return `Texto publicado!`
}

function mostrarTextos(){
    for(var i = 0; i < textos.length; i++){
        console.log(textos[i]);
    }
}

let nav = Number(readlineSync.question('O que deseja fazer? \n [1-Login]-[2-Sair]: '));

switch (nav) {
    case 1:
        console.clear()
        cabecalhos(1)
        usuarioAtual = new Usuario(readlineSync.question("Primeiro, nos diga, qual o seu nome e Sobrenome? : "), readlineSync.question("Qual o seu estilo de música favorito? : "), readlineSync.question("O que você toca? : "));
        console.clear();
        cabecalhos(2);
        break;

    case 2:
        console.log("Ok, saindo! \n Até o próximo Jam!");
        process.exit();
        break;

}

let destino;

do {
    destino = Number(readlineSync.question('O que deseja fazer? \n [1-Publicar texto]-[2-Adicionar amigo][3-Mostrar textos publicados][4-Sair]: '));

    switch (destino) {
        case 1:
            publicarTexto(readlineSync.question('O que deseja escrever: '));
            break;

        case 2:
            if (contadorAmigos == 0) {
                cabecalhos(4);
                console.log(recomendarAmigos(usuarioAtual));
                while (confirmacao == false) {
                    resposta = readlineSync.question("Deseja adicionar algum desses como seu amigo?[S/N]: ");
                    if (resposta == "S" || resposta == "s") {
                        confirmacao = true;
                    } else if (resposta == "N" || resposta == "n") {
                        console.log("\n Ok, deixa pra depois!");
                        confirmacao = false;
                        break;
                    } else {
                        console.log('Essa não é uma resposta válida, tente novamente!');
                        confirmacao = false;
                    }

                    if (resposta == "S" || resposta == "s" && confirmacao == true) {
                        console.clear();
                        cabecalhos(5)
                        adicionarAmigo(readlineSync.question('Nome: '), readlineSync.question('Estilo: '));
                        console.log("Amigos",amigos);
                    
                    }
                }
            } else if (contadorAmigos > 0) {
                console.clear();
                cabecalhos(5)
                adicionarAmigo(readlineSync.question('Nome: '), readlineSync.question('Estilo: '));
                console.log("Amigos",amigos);
            }  else if (resposta == "N" || resposta == "n") {
                console.log("\n Ok, deixa pra depois!");
                confirmacao = false;
                break;
            }
            break;

        case 3:
            console.clear();
            mostrarTextos();
            break;

        case 4:
            console.clear();
            console.log("Ok, saindo! \n Até o próximo Jam!");
            process.exit();
            break;    
    }
} while (destino != 4)


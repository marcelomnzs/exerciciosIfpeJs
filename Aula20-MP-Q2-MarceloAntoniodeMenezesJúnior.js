    function f(x) {                 //Function estava escrito errado, erro de sintaxe
        var total = 0             //Var responsável por computar o total já inicia com valor, quando neste caso, ela deve ser neutra
        for (var i = x.length - 1; i > -1; i--) {
            if (x[i] == 0) {
                total += 1               //Operador aritmético errado
        }                 
    }
    console.log(total);                  //Impressão era feita dentro do laço de repetição, o que resultava em multiplas saídas
}                                       //Function sem a chave de fechamento, erro de compilação

f([0,2,0,5,0]);

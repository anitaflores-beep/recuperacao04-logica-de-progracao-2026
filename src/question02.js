import leia from "readline-sync";

var alunos = [];
 var maiorOuIgual60 = 0;
var menor60 = 0;

for(var i = 0; i < 3; i++){

    var nome = leia.question("digite o nome do aluno: ");

    var pontuacao = leia.questionInt("digite a pontuacao: ");

    while(pontuacao < 0 || pontuacao > 100){

        console.log("pontuacao invalidada");

        pontuacao = leia.questionInt("digite um pontuacao entre 0 a 100:");
    }

    var aluno = {
        nome : nome,
        pontuacao : pontuacao
    };
    alunos.push(aluno);

    if(pontuacao >= 60){
        maiorOuIgual60++;
    }else {
        menor60++;
    }
}

console.log("\n===== alunos =====");

for (var i = 0; i < alunos.length; i++){
    
    console.log("nome: " + alunos[i].nome + " || pontuacao: " + alunos[i].pontuacao);
}

console.log("\nQuantidade com pontuacao maior ou igual a 60: " + maiorOuIgual60);
console.log("quantidade com pontuacao menor que  60: " + menor60);
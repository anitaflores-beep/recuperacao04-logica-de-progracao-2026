import leia from "readline-sync";

var professores = [];
var cincoAnosOuMais = 0;
var menosCinco = 0;
var maiorTempo = 0;
var professoresMaiorTempo = leia.questionInt("digite a quantidade de professores: ");

for (var i = 0; i < quantidade; i++) {

    var nome = leia.question("digite o nome do professore: ");
    var tempo = leia.questionInt("digite o tempo  de trabalho: ");

    var professor = {
        nome : nome,
        tempo : tempo
    };

    professores.push(professor);

    if (tempo >= 5){
        cincoAnosOuMais++;
    }else{
        menosCinco++;
    }

    if(i == 0){
        maiorTempo = tempo;
        professoresMaiorTempo = nome;
    }else{
        if (tempo > maiorTempo){
            maiorTempo = tempo;
            professoresMaiorTempo = nome;
        }
    }

}

console.log("\n==== professores =====");

for (var i = 0; i < professores.length; i++){

    console.log("nome:" + professores[i].nome + "| tempo de trabalho: " + professores[i].tempo + "anos");
}

console.log("\nQuantidade com 5 anos ou mais" + cincoAnosOuMais);
console.log("Quantidade com menos de 5 anos: " + menosCinco);
console.log("professores com maior tempo de trabalho: " + professoresMaiorTempo);
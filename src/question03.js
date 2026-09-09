import leia, { questionInt } from "readline-sync";

var filmes = [];

var quantidade = leia.questionInt("digite a quantidade de filmes: ");

for ( var i = 0; i < quantidade; i ++){

    var titulos = leia.question("digte o titulo dos filmes: ");
var ano = leia.questionInt("digite o ano de lançamento: ");

var filmes = {
    titulos : titulos,
    ano : ano
};
filmes.push(filmes);

}

var pesquisa = leia.question("\nDigite o titulo do filme para pesquisar: ");

var encontrado = false;

for(var i = 0; i < filmes.length; i++){
    if (filmes[i].titulos == pesquisa){

console.log("\nTitulos: " + filmes[i].titulos);
console.log("ano de lancamento: " + filmes[i].ano);

encontrado = true;

  }
}

if (encontrado == false){
    console.log("filmes nao encontrado ");
}
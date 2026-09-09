import leia from "readline-sync";

var jogos = [];
var opcao = 0;

while (opcao != 0){

    console.log("\n======MENU======");
    console.log("1 - Cadastar jogos");
    console.log("2 - listar jogos");
    console.log("3 - Pesquisar jogos");
    console.log("0 - sair");

    opcao = leia.questionInt("escolha uma opcao: ");
     
   switch (opcao){
    case 1:
        var nome = leia.question("digite o nome do jogo: ");

        var plataforma = leia.question("digite a plataforma");

    var jogo = {
        nome: nome,
        plataforma: plataforma
    };

    jogos.push(jogo);

    console.log("jogo cadastrado com sucesso");
    break;

    case 2:
    console.log("\n ==== jogos cadastrados ===")

    for (var i = 0; i < jogos.length; i++) {
        console.log("nome:" + jogos[i].nome + "| plataforma: " + jogos[i].plataforma);
    }
    break;

    case 3:

    var pesquisa = leia.question("digite o nome do jogo: ");

    var encontrado = false;

    for( var i = 0; i < jogos.length; i++) {

        if ( jogos[i].nome == pesquisa) {

            console.log("\nNome do jogo: " + jogos[i].nome);

            console.log("plataforma: " + jogos[i].plataforma);

            encontrado = true;
        }
    }

    if(encontrado == false){
        console.log("jogo nao encontrado");
    }
    break;

    case 0:
        console.log("programa encerrado");
        break;

        default: console.log("opcao invalida");

 }
}
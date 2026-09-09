import leia, { questionFloat } from "readline-sync";

var pedidos = [];
var total = 0;
var menor;

for (var i = 0; i < 5; i++){
    
    var valor = questionFloat("digite o valor do pedido: ");

    pedidos.push(valor);

    total = total + valor;

    if (i == 0) {
        menor = valor
    }else{
        if(valor < menor){
            menor = valor;
        }
    }
}

var media = total / 5;
console.log("\n==== valores cadastrados====");

for (var i = 0; i < pedidos.lengt; i++){
    console.log("pedidos" + (i + 1) + "R$" + pedidos[i]);
}

console.log("\nVALOR TOTAL: R$ " + total);
console.log("media dos valores : R$" + media);
console.log("menor valor registrados: R$" + menor);
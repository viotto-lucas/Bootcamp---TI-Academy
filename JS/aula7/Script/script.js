//Exercício8
function verificarMaiorNum(num1, num2){

    //if
    //operadores
    if(num1 >= num2)
        if(num1 == num2){
            console.log("Os dois valores são iguais");
        } else {
        console.log("O número "+num1+" é maior que o número "+ num2);
    } else {
        console.log("O número "+num1+" é menor que o número "+ num2);
    }

}

// verificarMaiorNum(3, 3);

function teste (){
    alert("Estou na function teste");
    return nome;
}

// teste();

//teste();
// console.log ( teste() );
// let msg = (nome)=>{
//    return nome;
// }
//console.log (msg("Lucas Viotto"));

// (function(produto, preço){
//     alert("O produto é "+ produto + " e o preço é de R$ "+ preço);
// })("Biscoito", 2.35)

let v1 = prompt("Digite o valor 1");
let v2 = prompt("Digite o valor 2");

const soma = (valor, valor2)=>{
    let resultado = Number(valor) + Number(valor2);
    console.log(resultado);
}

soma(v1, v2);
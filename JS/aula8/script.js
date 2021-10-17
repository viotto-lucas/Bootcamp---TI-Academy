let str = `Qualquer conteúdo!`;

let str2 = `Uma outra string ${str}`;

// // let str = "Qualquer conteúdo ";
// // let str2 = 'Uma outra string ' + str;

// console.log (str2);

// //Arrays uma coleção de dados.
// //O array é constituído de elementos.
// const frutas = ["Uva","Banana","Laranja","Melancia"]; //4

// let euGosto = `eu gosto de ${frutas[2]}`;

// // console.log(euGosto); //Uva

// console.log(frutas[0]); //Uva
// console.log(frutas[1]); //Banana
// console.log(frutas[2]); //Laranja
// console.log(frutas[3]); //Melancia

const Pessoa = [
    "Lucas", //0
    23, //1
    "Solteiro", //2
    "Bola", //3
    1.77, //4
    cores = ["azul","preto","vermelho","salmão","ocre"] //5
];

let key = 3;

key++; //4

console.log("Lucas"[4]);
console.log(Pessoa[5][key]); //array bidimensional

// (function(Pessoa){
// const lucas = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]} anos e estou ${Pessoa[2]}
// eu também gosto de jogar ${Pessoa[3]}. Minha altura é de ${Pessoa[4]}`;
// document.write(lucas);    
// })(Pessoa)


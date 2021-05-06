const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 6, 8, 11, 12, 22, 27, 33];

// const numMaior10 = [];

// // for (let index = 0; index < numbers.length; index += 1) {
// //     if (numbers[index] > 10) {
// //         numMaior10.push(numbers[index]);
// //     }
// // }
// // console.log(numMaior10);

const numMaioresQ10 = numbers.filter(value => value > 10);
console.log(numMaioresQ10);

const pessoas = [
    { nome:'Luís', idade: 62},
    { nome: 'Stephanie', idade: 23},
    { nome: 'Thaís', idade: 55},
    { nome: 'Caio', idade: 19},
    { nome: 'Nerimar', idade: 32},
    { nome:'Rita', idade: 47},
];

const nomes5LetrasOuMais = pessoas.filter(value => value.nome.length >= 5);
const pessoasComMaisDe50 = pessoas.filter(value => value.idade > 50);
const nomesQterminaComA = pessoas.filter(value => value.nome.endsWith('a'));

console.log(nomes5LetrasOuMais);
console.log(pessoasComMaisDe50);
console.log(nomesQterminaComA);

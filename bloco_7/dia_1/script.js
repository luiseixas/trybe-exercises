// Parte I

// Exercício I

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
}

testingScope(true);

// Exercício II

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  
// Seu código aqui.
oddsAndEvens.sort((a, b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

//parte II

// Exercício I

const calcFactorial = (num) => {
  if(num === 0 || num === 1) {
    return 1;
  //recursive case
  } else {
    return num * calcFactorial(num - 1);
  }
}
let num = 4;
console.log(`O fatorial de ${num} é: ${calcFactorial(num)}`);

// Exercício II 

function longestWord(phrase) {

  let words = phrase.split(' ');
  let sizeWord = 0;
  let result = '';
  
  for (let index of words) {
    if(index.length > sizeWord) {
      sizeWord = index.length;
      result = index;
    } 
  } 
  return result;
}
console.log(longestWord('Minha terra tem palmeiras onde canta o sabiá'));

// Exercício III

let clickCount = 0;
let textToAppear = document.getElementById('text');
const buttonClick = document.getElementById('btn-1');

buttonClick.addEventListener('click', () => {
  textToAppear.innerHTML = clickCount+=1;
});


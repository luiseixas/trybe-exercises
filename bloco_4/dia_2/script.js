let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

let soma = 0;
let media = 0;
for (i = 0; i < numbers.length; i+=1) {
    soma = numbers[i] + soma;
    media = (soma / numbers.length)  
}
console.log(soma);
console.log(media);

if (media > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor que 20')
}

let maiorNum = 0;
for (let i = 0; i < numbers.length; i += 1){
    
    if (numbers[i] > maiorNum) {
      maiorNum = numbers[i];
   }
}
console.log(maiorNum);


let qtdOddNumber = 0;
for (let i = 0; i < numbers.length; i += 1){
    if(numbers[i] % 2 == 1){
        qtdOddNumber += 1;
    }
}
console.log(qtdOddNumber);

let menorNum = numbers[0];
for (let i = 0; i < numbers.length; i += 1){
    
    if (numbers[i] < menorNum) {
      menorNum = numbers[i];
   }
}
console.log(menorNum);

let numberList = [];
for (let i = 1; i <= 25; i +=1){
    numberList.push(i)
    
}
console.log(numberList);

for (let i = 0; i < numberList.length; i+=1){
     console.log(numberList[i] / 2) 
}
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

let soma = 0;
let media = 0;
for (i = 0; i < numbers.length; i +=1) {
    soma = numbers[i] + soma;
    media = (soma / numbers.length)  
}
console.log(soma);
console.log(media);

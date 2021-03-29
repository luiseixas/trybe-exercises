let n = 5;

for (let i = 0; i < n; i+=1){
    let linha = '';
    for (let indexL = 0; indexL < n; indexL+=1){
        linha = linha + '*'
    }
    console.log(linha)
}

let row = '';
for (let i = 0; i < n; i+=1) {
    row += '*';
    console.log(row);
}

let rowInverse = '';
let linhas = '';
for (let j = 0; j < n-1; j+=1){
    linhas += ' ';
}

for (let i = 0; i < n; i+=1) {
    rowInverse += '*';
    console.log(linhas.substr(i) + rowInverse);
}

let n = prompt('Dime un número');

let factorial = 1;

for(i=1; i<=n; i++) {
    factorial = factorial * i;
    console.log(`i:${i} - factorial:${factorial}`)
}

console.log(`Tu número era el ${n} y su factorial es ${factorial}`);

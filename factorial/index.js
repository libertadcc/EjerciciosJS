let n = prompt('Dime un número');

let number = 1;
for(i=1; i<=n; i++) {
    number = number * i;
}

console.log(`Tu número era el ${n} y su factorial es el ${number}`);

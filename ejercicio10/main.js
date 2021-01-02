const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const pares = number.filter(each => each%2 === 0);
const impares = number.filter(each => each%2 !== 0);

console.log('pares', pares);
console.log('impares', impares);

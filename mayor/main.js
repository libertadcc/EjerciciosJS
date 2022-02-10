const numbers = [20, 2, 58, 35, 13];
let mayor = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > mayor) {
        mayor = numbers[i];
    }
}
alert(`El número más grande del array es ${mayor}`);
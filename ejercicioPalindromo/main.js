
const frase = prompt();
frase.toLowerCase();

const arrayEntrada = frase.split("");

let stringEntradaSinEspacios = '';
for (indice = 0; indice < arrayEntrada.length; indice++) {
  if (arrayEntrada[indice] !== " ") {
    stringEntradaSinEspacios += arrayEntrada[indice];
  }
}

let arrayReverseSinEspacios = stringEntradaSinEspacios.split("");
let arrayEntradaSinEspacios = stringEntradaSinEspacios.split("");
arrayReverseSinEspacios.reverse();

let esPalindromo = true;
for (i = 0; i < arrayEntradaSinEspacios.length; i++) {
  if(arrayEntradaSinEspacios[i] !== arrayReverseSinEspacios[i]) {
    esPalindromo = false;
  }  
};

if (esPalindromo) {
  alert('Es un palíndromo');
} else {
  alert('No es un palíndromo')
}
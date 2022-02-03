const dni = prompt('Tu DNI');

console.log('dni', dni);
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (dni < 0 || dni > 99999999) {
  alert('El número introducido no es correcto');
} else {
  const letterSelected = letras[dni%23];
  alert('Tu letra del DNI es '+ letterSelected);
};

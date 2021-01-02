const frase = prompt('Escribe una frase');

function info(cadena) {
  var resultado = `La cadena "${cadena}" está formada por `;
  if (cadena === cadena.toUpperCase()) {
    resultado += "solo mayúsculas";
  } else if (cadena === cadena.toLowerCase()) {
    resultado += "solo minúsculas";
  } else {
    resultado += "minúsculas y mayúsculas";
  }
  return resultado
}

alert(info(frase));

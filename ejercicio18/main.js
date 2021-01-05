// -	Número de enlaces de la página.
const links = document.getElementsByTagName('a');

// -	Dirección a la que enlanza el penúltimo enlace.
const penultimate = links[links.length - 1].href;

// -	Número de enlaces del tercer párrafo.
const third = document.getElementById('third-paragraph');
const numberLinks = third.getElementsByTagName('a').length;

// Mostrar el primer resultado 
const firstResult = document.querySelector('#number-links');
firstResult.innerHTML = `En esta página hay ${links.length} enlaces`;

// Crear un nodo para el segundo 
const secondResult = document.createElement('p');
const contentSecondResult = document.createTextNode(penultimate);
secondResult.appendChild(contentSecondResult);

const resultsParagraph = document.querySelector('.results');
resultsParagraph.appendChild(secondResult);

// Mostrar el tercer resultado
const thirdResult = document.querySelector('#third-result');
thirdResult.innerHTML = `En el tercer párrafo hay ${numberLinks} enlaces.`;

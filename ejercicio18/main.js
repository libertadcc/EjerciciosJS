// -	Número de enlaces de la página.
const links = document.getElementsByTagName('a');
console.log('links', links);
// -	Dirección a la que enlanza el penúltimo enlace.
const penultimate = links[links.length - 2].href;
console.log(penultimate);

// -	Número de enlaces del tercer párrafo.
const third = document.getElementById('third-paragraph');
const numberLinks = third.getElementsByTagName('a').length;

// Mostrar el primer resultado 
const firstResult = document.querySelector('#number-links');
firstResult.innerHTML = `En esta página hay ${links.length} enlaces`;

// Crear un nodo para el segundo <p></p>
const secondResult = document.createElement('p');
// 'ey que tal'
const contentSecondResult = document.createTextNode('ey que tal');
//<p>ey que tal</p>
secondResult.appendChild(contentSecondResult);

// const resultsParagraph = document.querySelector('.results');
// resultsParagraph.appendChild(secondResult);

//Añade a la pagina <p>ey que tal</p>
document.body.appendChild(secondResult);
// Mostrar el tercer resultado
const thirdResult = document.querySelector('#third-result');
thirdResult.innerHTML = `En el tercer párrafo hay ${numberLinks} enlaces.`;

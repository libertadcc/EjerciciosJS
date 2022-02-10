// Por id
// Name
// Tag name 
// clase CSS

var element1 = document.getElementById('dewey');
console.log('id', element1);

// Opt 1
var nameFirst = document.getElementById('nameFirst')
nameFirst.innerHTML = "Hola";
// Opt 2
document.getElementById('nameFirst').innerHTML = 'Chao'

var labels = document.getElementsByTagName('label');
console.log('label', labels);

var labelsCSS = document.getElementsByClassName('label-input');
console.log('labelCSS', labelsCSS);

var ab = document.getElementsByName('drone');
console.log('ab', ab);

var element = document.querySelectorAll('.label-input');
console.log('element', element);

// Parentnode
console.log('padre', nameFirst.parentNode);

// Borrar nodos: seleccionar padre e hijo + removeChild()

let firstOption = document.getElementById('first-option');
let inputDelete = document.getElementById('huey');

firstOption.removeChild(inputDelete);
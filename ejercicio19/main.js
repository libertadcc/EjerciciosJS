// Al hacer click sobre el botón de Guardar salta un alert
//opt 1
document.querySelector(".save").addEventListener("click", saveData);
function saveData() {
  alert('Se han guardado los datos');
};

// opt 2
document.querySelector(".save").addEventListener("click", function(){ alert('guardar')});


// Al quitar el foco del input cambia de color
const inputName = document.querySelector(".name");

inputName.addEventListener('focus', changeColorFocus);
function changeColorFocus() {
  inputName.style.backgroundColor = '#fff666';
};

inputName.addEventListener('focusout', changeColorNoFocus);
function changeColorNoFocus() {
  inputName.style.backgroundColor = '#9999FF';
};

// Si la letra que pulsemos es vocal lo pintaremos de rojo y de verde si es consonante
const inputRandom = document.querySelector('.random');

// inputRandom.addEventListener('keypress', checkLetter);
// function checkLetter(event){
//   const currentLetter = event.keyCode;
//   if (currentLetter === 97 || currentLetter === 101 || currentLetter === 105 || currentLetter === 111 || currentLetter === 117) {
//     inputRandom.style.color = '#a8323e';
//   } else {
//     inputRandom.style.color = '#32a836';
//   }
// };
// Array
var vocales = [97, 101, 105, 111, 117];
function checkLetter(event){
  const currentLetter = event.keyCode;
  if (vocales.indexOf(currentLetter) === -1) {
    inputRandom.style.color = '#32a836';
  } else {
    inputRandom.style.color = '#a8323e';
  }
};

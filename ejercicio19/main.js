// Al hacer click sobre el botón de Guardar salta un alert
document.querySelector(".save").addEventListener("click", saveData);

function saveData() {
  alert('Se han guardado los datos');
};

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

inputRandom.addEventListener('keypress', checkLetter);
function checkLetter(event){
  const currentLetter = event.which;
  if (currentLetter === 97 || currentLetter === 101 || currentLetter === 105 || currentLetter === 111 || currentLetter === 117) {
    inputRandom.style.color = '#a8323e';
  } else {
    inputRandom.style.color = '#32a836';
  }
};

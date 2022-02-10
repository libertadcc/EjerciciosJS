// var animal = prompt('¿Cuál es tu animal favorito?');
// var element = document.getElementById("resultado");

// if (animal === 'ocelote') {
//     element.style.color = "green";
//     element.innerHTML = "Correcto!";
//     document.getElementById("foto").classList.remove('hide');
// } else {
//     element.innerHTML = "Ese no :(";
//     element.style.color = "red";
// }



var boton = document.getElementById('myBtn');

boton.addEventListener('click', showMessage);

function showMessage(){
    console.log('has hecho click');
}
 
var input = document.getElementById('cajita');
input.addEventListener('keypress', function(event){
    console.log(event);
    document.getElementById('result').innerHTML += `<p>La tecla ${event.code} tiene el código ${event.keyCode}</p>`;
});






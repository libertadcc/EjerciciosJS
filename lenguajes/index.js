function add() {
    var elemento = document.createElement("li");
    // Opt1
    // var texto = document.createTextNode("JavaScript");
    // elemento.appendChild(texto);
    
    // Opt2
    elemento.innerHTML = 'JavaScript';

    var lista = document.getElementById("lista");
    lista.appendChild(elemento);

    // var nuevoElemento = "<li>Texto de prueba</li>";
    lista.innerHTML = lista.innerHTML // + nuevoElemento;
}
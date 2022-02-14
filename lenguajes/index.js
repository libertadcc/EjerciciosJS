function add() {
    var elemento = document.createElement("li");
    // Opt1
    // var texto = document.createTextNode("JavaScript");
    // elemento.appendChild(texto);
    
    // Opt2
    elemento.innerHTML = 'JavaScript';
    // elemento = <li>JavaScript</li>
    
    var lista = document.getElementById("lista");
    lista.appendChild(elemento);
}
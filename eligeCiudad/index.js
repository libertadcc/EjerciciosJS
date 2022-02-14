function getCity() {
    var currentCity = document.getElementById("selCity").value;
    if (currentCity != '') {
        document.getElementById("result").innerHTML = "La ciudad seleccionada es: " + currentCity;
        
        var sel = document.getElementById("selCity");
        var text = sel.options[sel.selectedIndex].text;
        console.log('texto', text);
    } else {
        document.getElementById("result").innerHTML = '';
    }
}
function getCity() {
    var currentCity = document.getElementById("selCity").value;
    if (currentCity != ''){
        document.getElementById("result").innerHTML = "La ciudad seleccionada es: " + currentCity;
    } else {
        document.getElementById("result").innerHTML = '';
    }
}
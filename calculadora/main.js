function squareNumber(num) {
  var squaredNumber = num * num;
  return 'El resultado de elevar al cuadrado el número ' + num + ' es ' + squaredNumber;
}

function halfOf(num) {
  var half = num / 2;
  return 'La mitad de ' + num + ' es ' + half;
}

function areaOfCircle(radius) {
  var squared = radius * radius;
  var area = Math.PI * squared;
  return 'El área del círculo con un radio de ' + radius + ' es ' + area;
}

function sumar(num1, num2) {
  let total = num1 + num2;
  return `El valor de la suma es ${total}`
}

var squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", function () {
  var num = document.getElementById("square-input").value;
  document.getElementById("solution").innerHTML = squareNumber(num);
});

var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", function () {
  var num = document.getElementById("half-input").value;
  document.getElementById("solution").innerHTML = halfOf(num);
});


var areaButton = document.getElementById("area-button");
areaButton.addEventListener("click", function () {
  var num = document.getElementById("area-input").value;
  document.getElementById("solution").innerHTML = areaOfCircle(num);
});



var sumarButton = document.getElementById('sumar-button');
sumarButton.addEventListener('click', function () {
  var num1 = document.getElementById('sum1').value;
  num1 = parseInt(num1);
  var num2 = document.getElementById('sum2').value;
  num2 = parseInt(num2);
  console.log(num1)
  document.getElementById("solution").innerHTML = sumar(num1, num2);
})


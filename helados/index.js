var topping = prompt('Elige un topping');

let precioBase = 1.9;
let oreo = 1;
let kitkat = 1.5;
let brownie = 0.75;
let lacasitos = 0.95;

let total = 0;

if (topping === 'oreo') {
    total = precioBase + oreo;
    alert(`Serán ${total} €`);
} else if (topping === 'kitkat') {
    total = precioBase + kitkat;
    alert(`Serán ${total} €`);
} else if (topping === 'brownie') {
    total = precioBase + brownie;
    alert(`Serán ${total} €`);
} else if (topping === 'lacasitos') {
    total = precioBase + lacasitos;
    alert(`Serán ${total} €`);
} else {
    alert(`No tenemos ese topping, serán ${precioBase} €`);
}
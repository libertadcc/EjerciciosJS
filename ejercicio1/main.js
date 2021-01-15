'use strict';

const volumen = 16 * 23 * 13;
console.log(volumen, 'cm3');

const area = 2*(16 * 23 + 16 * 13 + 23 * 13);
console.log(area, 'cm2');


// Calculador de vólumenes y áreas generales
const lado = 16;
const ancho = 13;
const base = 23;

const volumen2 = lado * base * ancho;
console.log(volumen2, 'cm3');

const area2 = 2*(lado * base + lado * ancho + base * ancho);
console.log(area2, 'cm2');

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const longerMonths = months
  .filter(month => month.length > 7)
  .map(eachMonth => eachMonth.toUpperCase());

console.log(longerMonths);

const numberOfMonths = longerMonths.length;
console.log(`Solo ${numberOfMonths} meses`);
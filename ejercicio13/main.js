const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const longerMonths = months.filter(function(month ) {
    return month.length > 7
  })
  .map(function(eachMonth) {
    return eachMonth.toUpperCase();
  });

console.log(longerMonths);

const numberOfMonths = longerMonths.length;
console.log(`Solo ${numberOfMonths} meses`);
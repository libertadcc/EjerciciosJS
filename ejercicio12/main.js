const esri = ['Environmental', 'Systems', 'Research', 'Institute'];

const longest = esri.reduce((acc, current) => {
  if (acc.length > current.length) {
    return acc
  } else {
    return current
  }
});

console.log(`La palabra más larga es ${longest}`);

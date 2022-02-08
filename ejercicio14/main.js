const users = [
  {username: 'ppc90', age: 30, premium: false},
  {username: 'lu65', age: 24, premium: true},
  {username: 'maria3', age: 36, premium: false},
  {username: 'abc123', age: 20, premium: false},
  {username: 'sergio58', age: 26, premium: true}
];


users.map(function(user) {
  if (user.premium) {
    console.log('El usuario ' + user.username + ' es premium');
  }
});

let usersNoPrem = users.filter(function(objeto) {
  return !objeto.premium;
});

console.log('userNoPrem', usersNoPrem);














// users.map(user => {
//   if (user.premium) {
//     console.log(`${user.username} tiene cuenta premium`)
//   }
// });

// const isNotPremium = users.filter(user => !user.premium);
// console.log(isNotPremium);





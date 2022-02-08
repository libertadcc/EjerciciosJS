const heros = [
    {name: 'Spider-man'},
    {name: 'Thor'},
    {name: 'Black Panther'},
    {name: 'Captain Marvel'},
    {name: 'Silver Surfer'}
];

let orderHeros = heros.map(function(hero, index) {
    let aux = {id: index, hero: hero.name}
    return aux
});
console.log('order', orderHeros)
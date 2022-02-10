const esri = "esri";
let newEsri = esri[0].toUpperCase() + esri.substring(1);

console.log('newEsri', newEsri);

const mySentence = "environmental systems research institute";

const words = mySentence.split(" ");
let wordsArray = words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");

console.log(wordsArray);


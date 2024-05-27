// BONUS 1: SNACK 5
// Abbiamo questa lista di articoli di moda:
// name        type      color
// Poppy       tshirt    red
// Jumping     occhiali  blue
// CrissCross  scarpe    black
// Jenny       borsa     pink
// Questi articoli sono inseriti in un array di oggetti.
// Dobbiamo attaccare a ognuno un cartellino position con una lettera dell'alfabeto generata casualmente e inserire gli oggetti così modificati in un nuovo array di oggetti.
// BONUS 2
// Stampare in pagina oltre che in console!

function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

const fashionArticle = [
    {
        name: 'Poppy',
        type: 'tshirt',
        color: 'red'
    },
    {
        name: 'Jumping',
        type: 'occhiali',
        color: 'blue'
    },
    {
        name: 'CrissCross',
        type: 'scarpe',
        color: 'black'
    },
    {
        name: 'Jenny',
        type: 'borsa',
        color: 'pink'
    }
];

let newFashionArticle = [];


fashionArticle.forEach(() => {
    const obj = {name: 'Poppy', type: 'tshirt', color: 'red'};
    const newObj = {...obj, position: 0};
    console.log(newObj);
})

fashionArticle.forEach((article) => {
    article.position = generateRandomLetter();
    newFashionArticle.push(article);
})

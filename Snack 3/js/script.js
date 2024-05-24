// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

// Snack 3 scomponimento problema
// creo un array di oggetti
// assegno ad ogni oggetto rappresentante una bici i valori di nome e peso
// creo una variabile composta solo dal peso delle bici
// estraggo dalla variabile il valore minore e lo stampo in console


const bicycle = [
    {
        nome: 'Bianchi',
        peso: 6
    },
    {
        nome: 'Look',
        peso: 7
    },
    {
        nome: 'Willier Triestina',
        peso: 9
    },
    {
        nome: 'Pinarello',
        peso: 8
    },
    {
        nome: 'Colnago',
        peso: 10
    },
    {
        nome: 'Cervelo S5',
        peso: 5
    }
];

let weight = [];

bicycle.forEach((bici) => {
    weight.push(bici.peso)
});

const minWeight = Math.min(...weight);
console.log(`Il peso minore è ${minWeight}`);
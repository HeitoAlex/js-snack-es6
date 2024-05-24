// SNACK 4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Snack4
// creo un array di squadre e per ognuna definisco le proprietà nome, punti fatti, falli subiti
// compilo i nomi delle squadre e imposto 0 nelle altre 2 proprietà
// creo un ciclo for each che assegni alle proprietà con 0 un valore random 
// con un altro ciclo for each estraggo in un nuovo array solo i nomi e i falli subiti e li stampo in console



const footballTeams = [
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Palermo',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Udinese',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Panathinaikos',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Atletico Madrid',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Sambenedettese',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Benfica',
        puntiFatti: 0,
        falliSubiti: 0
    }
];


footballTeams.forEach((footballTeam) => {
    footballTeam.puntiFatti = Math.floor((Math.random() * 100) +1);
    footballTeam.falliSubiti = Math.floor((Math.random() * 100) +1);
    
})

footballTeams.forEach((element) => {
    const {nome, falliSubiti} = element;
    console.log(nome, falliSubiti);
});


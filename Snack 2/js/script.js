// Questo è l'elenco degli studenti:
// Id  Name                Grades
// 213 Giuseppina della Rovere 78
// 110 Paola Cortellessa       96
// 250 Andrea Mantegna         48
// 145 Gaia Borromini          74
// 196 Luigi Grimaldello       68
// 102 Piero della Francesca   50
// 120 Francesca da Polenta    84


const studentList = [
    {
        id: 213,  
        name: 'Giuseppina della Rovere',               
        grades: 78
    },
    {
        id: 110,  
        name: 'Paola Cortellessa',               
        grades: 96
    },
    {
        id: 250,  
        name: 'Andrea Mantegna',               
        grades: 48
    },
    {
        id: 145,  
        name: 'Gaia Borromini',               
        grades: 74
    },
    {
        id: 196,  
        name: 'Luigi Grimaldello',               
        grades: 68
    },
    {
        id: 102,  
        name: 'Piero della Francesca',               
        grades: 50
    },
    {
        id: 120,  
        name: 'Francesca da Polenta',               
        grades: 84
    }
];

// let upperCaseList = [];


// for (i = 0; i < studentList.length; i++){
//     studentList.name.toUpperCase()
//     upperCaseList.push(studentList.name)
// }



const voteAndIdList = studentList.filter((element) => {
    if (element.grades > 70 && element.id > 120){
        return true
        
    }
})

const voteList = studentList.filter((element) => {
    if (element.grades > 70){
        return true
        
    }
})


console.log(upperCaseList)
console.log(voteAndIdList)
console.log(voteList)
// Creare un array di oggetti di squadre da calcio
// l'unica proprietà da compilare sarà il nome, il resto sarà settato a 0
const soccerTeams = [
    {
        name: "Juventus",
        score: 0,
        foulPlay: 0,
    },
    {
        name: "Milan",
        score: 0,
        foulPlay: 0,
    },
    {
        name: "Inter",
        score: 0,
        foulPlay: 0,
    },
    {
        name: "Roma",
        score: 0,
        foulPlay: 0,
    },
    {
        name: "Palermo",
        score: 0,
        foulPlay: 0,
    },
];

let newFullTeams = [];
let nameAndFoulPlays = [];

// Tramite un for-each generare dei numeri random al posto degli 0
soccerTeams.forEach((team) => {
    const newScore = Math.floor(Math.random() * 10) + 1;
    const newFoulPlay = Math.floor(Math.random() * 10) + 1;

    // Inserisco in un array tutti i nuovi valori delle squadre
    newFullTeams.push({
        name: team.name,
        score: newScore,
        foulPlay: newFoulPlay,
    });

    // Inserisco in un nuovo array solo nomi e falli subiti
    nameAndFoulPlays.push({
        name: team.name,
        foulPlay: newFoulPlay,
    });
});

// Stampare il tutto in console
console.log(newFullTeams);
console.log(nameAndFoulPlays);
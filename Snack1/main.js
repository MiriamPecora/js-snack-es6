// Creare un array di oggetti contenenti nome e peso di bici da corsa
const racingBikes = [
    {
        name: "BMC Teammachine",
        weight: 6,
    },
    {
        name: "Colnago C64",
        weight: 7,
    },
    {
        name: "Specialized Roubaix Comp",
        weight: 8,
    },
    {
        name: "Cannondale CAAD13 Disc 105",
        weight: 9,
    },
    {
        name: "Lightweight Urgestalt",
        weight: 4,
    },
    {
        name: "Factor O2 VAM",
        weight: 5,
    },
];

let lighterBikeKgs = racingBikes[0].weight;
let lighterBikeName = racingBikes[0].name;
const kg = "chilogrammi";
const div = document.getElementById("print_bike");

// Tramite for-each e istruzione condizionale if(), calcolare la bici col peso minore
let heaviestBike = racingBikes.forEach((element) => {

    if(element.weight < lighterBikeKgs) {
        lighterBikeKgs = element.weight;
        lighterBikeName = element.name;
    };
    
});
console.log(lighterBikeKgs);

// Stampare a schermo la bici più leggera tramite template literal
let h2 = document.createElement("h2");
h2.textContent = `La bici più leggera è la ${lighterBikeName} con un peso di ${lighterBikeKgs} ${kg}`;
div.append(h2);
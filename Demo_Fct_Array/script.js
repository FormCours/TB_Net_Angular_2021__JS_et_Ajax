const tabEntier = [5, 3, 2, 42, 6, 1, 13];
console.log(`Initial: ${tabEntier.join(' > ')}`);

//  - map
// Renvoi une copie de la collection transformé 
const multiByTwo = function(nb) {
    return nb * 2;
}

const r1 = tabEntier.map(nb => multiByTwo(nb))
console.log(`Multi 2: ${r1.join(' > ')}`);

const r2 = tabEntier.map(nb => nb ** 2)
console.log(`Pow 2: ${r2.join(' > ')}`);

const r3 = tabEntier.map((value, index) => {
    return `L'index ${index} contient ${value}`;
})
console.log(r3);


//  - filter
// Renvoi une copie de le la collection filtré
const r4 = tabEntier.filter(
    nb => Math.floor(nb / 2) * 2 === nb
)
console.log(`Filtre Div 2: ${r4.join(' > ')}`);

// Arrondi Mathematique  : 
//  • Math.round(2.2)  -> 2
//  • Math.round(2.8)  -> 3

// Arrondi vers le bas   :
//  • Math.floor(2.2)  -> 2
//  • Math.floor(2.8)  -> 2

// Arrondi vers le haut  : 
//  • Math.ceil(2.2)  -> 3
//  • Math.ceil(2.8)  -> 3

const r5 = tabEntier.filter(
    (value, index) => value > index
)
console.log(`Demo index: ${r5.join(' > ')}`);


let people = [
    { id: 1, firstname: 'Riri', lastname: 'Duck'},
    { id: 2, firstname: 'Fifi', lastname: 'Duck'},
    { id: 3, firstname: 'Zaza', lastname: 'Vanderquack'},
    { id: 4, firstname: 'Gontran', lastname: 'Bonheur'}
]

// Utilisation du filter pour faire un remove
people = people.filter(p => p.id !== 2)
console.log(people);


//  - reduce
// Reduire une collection sous la forme d'un objet
// a l'aide d'une fonction d'accumulation
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const products = [
    { id: 1, name: 'Chocobo', price: 49.99 },
    { id: 2, name: 'Pomme', price: 2.5 },
    { id: 4, name: 'Une chaussette', price: 9.99 },
    { id: 5, name: 'Des chocotoffs', price: 4.49},
    { id: 6, name: 'Eau', price: 0.89 }
];

const prixTotal = products.reduce(
    (total, current) => total + current.price,
    0
)
console.log(`Le prix total est de ${prixTotal}`);

// let prixTotal2 = 0;
// for(const current of products) {
//     prixTotal2 = prixTotal2 + current.price
// }
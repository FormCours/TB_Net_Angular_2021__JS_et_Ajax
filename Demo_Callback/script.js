// Demo des Callbacks
/*
const demoCallback = (message, cb) => {

    const result = prompt(message)

    if(result && result !== "") {

        if(cb && typeof(cb) === "function") {
            // Appel du callback
            cb(result);
        }
    }
}

demoCallback("Entrer une valeur", function(val) {
    console.log(`La valeur est ${val}`);
});
*/


// Quel est la dif entre "for in" et "for of" ?

// - for in : 
// Utilise l'index au format "string"
// Capable de parcourir les collections et les objets
//  Peut obtenir les propriétées ou le contenu

// - for of : 
// Dispo depuis 2015 (ES6+)
// Ne fonctionne que sur les iterables (array, map, set, ...)



// Création d'une fonction qui permet de filter une collection
const numbers = [4, 25, 42, 13, 18, 22, 21, 9, 19, 5, 6, 42];

// - Fct qui recup les paires
const filterCallback = (collection, cbFilter) => {
    const results = [];
    for (const element of collection)  {
        if(cbFilter(element)) {
            results.push(element);
        }
    }
    return results
}

const isEven = (nb) => {
    return nb % 2 === 0;
}

const divisibleBy = (nb, div) => nb % div === 0;

const r1 = filterCallback(numbers, isEven);
console.log(r1);

const r2 = filterCallback(numbers, (nb) => nb % 3 === 0)
console.log(r2);

const r3 = filterCallback(numbers, (nb) => divisibleBy(nb, 5))
console.log(r3);
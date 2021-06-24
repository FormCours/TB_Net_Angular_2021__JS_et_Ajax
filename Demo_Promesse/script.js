const demoPromesse = function(nb1, nb2) {
    // Création de la promesse
    return new Promise((resolve, reject) => {
        // Bloc de code a executer
        console.log("Debut du code !");

        setTimeout(() => {
            if(!isNaN(nb1) && !isNaN(nb2)) {
                const resultat = nb1 + nb2;

                // Renvoi du resultat via la promesse
                resolve(resultat);
            }
            else {
                reject("Bad value !");
            }

        }, 1000);
        console.log("Fin du code !");
    })
}

demoPromesse(40, 2).then((res) => {
    console.log(`Le resultat est ${res}`);
}).catch(error => {
    console.log(error);
}).then(() => {
    console.log("Ceci est toujours executé !");
});

demoPromesse(25, undefined).then((res) => {
    console.log(`Le resultat est ${res}`);
}, reject => {
    console.log(reject);
});

console.log("Bonjour");

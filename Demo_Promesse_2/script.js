"use strict";

const addition = (nb1, nb2) => {
    return new Promise((resolve, reject) => {
        if(isNaN(nb1) || isNaN(nb2) )
            reject('Bad Values !')

        setTimeout(() => {
            resolve(nb1 + nb2);
        },1000)
    });
}

const multiByTwo = (nb) => {
    return new Promise((resolve, reject) => {
        if(isNaN(nb))
            reject('Bad Value !')

        setTimeout(() => {
            resolve(nb * 2);
        },1000)
    });
}

const val1 = 10;
const val2 = 11;

// addition(val1, val2)
//     .then(nb => {
//         console.log(`Aprés l'addition : ${nb}`);
//         return multiByTwo(nb)
//     })
//     .then(v => {
//         console.log(`Aprés la multiplication : ${v}`);
//     })

// const fct = async function(){
//     const r1 = await addition(val1, val2);
//     console.log(`Aprés l'addition : ${r1}`);

//     const r2 = await multiByTwo(r1);
//     console.log(`Aprés la multiplication : ${r2}`);
// }
// fct();



addition(val1, "Hello")
    .then(nb => {
        console.log(`Aprés l'addition : ${nb}`);
        return multiByTwo(nb)
    })
    .then(v => {
        console.log(`Aprés la multiplication : ${v}`);
    })
    .catch(e => {
        console.log('Il y a eu un probleme');
    })


const fct = async function(){
    try {
        const r1 = await addition(val1, "Hello");
        console.log(`Aprés l'addition : ${r1}`);

        const r2 = await multiByTwo(r1);
        console.log(`Aprés la multiplication : ${r2}`);
    }
    catch(e){
        console.log('Il y a eu un probleme');
    }
 }
fct();
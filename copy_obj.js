const getSuperHero = (name, alterEgoName, isVillain, age) => {
    return {
        name,
        alterEgoName,
        isVillain,
        age,
    };
}

const updateSuperHero = (superHero, keyName, keyVal) => {
    // 1. copy the superHero object
    const copiedObject = {...superHero};

    // 2. update COPIED object with keyName
    copiedObject[keyName] = keyVal;

    // 3. return copied object
    return copiedObject;
}

const parker = getSuperHero('Spiderman', 'Peter Parker', false, 18)
const newSuperHero = updateSuperHero(parker, 'likesSpiders', false);
console.log(newSuperHero); // has name, alterEgoName, isVillain, age, likesSpidrs
console.log(parker); // has name, alterEgoName, isVillain, age THATS IT
/*
    console.log(newSuperHero); // has name, alterEgoName, isVillain, age, likesSpidrs
    console.log(parker); // has name, alterEgoName, isVillain, age THATS IT
*/


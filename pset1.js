/*
    @func getSuperHero
    @param {string} name
    @param {string} alterEgoName
    @param {boolean} isVillain
    @param {number} age
    @returns {object}
    @desc - takes in the params and returns an object
            that describes superhero
    @example - 
        getSuperHero('Batman', 'Bruce Wayne', false, 31);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
*/

const getSuperHero = (name, alterEgoName, isVillain, age) => {
    return {
        name,
        alterEgoName,
        isVillain,
        age,
    };
}
/*

const getSuperHero = (name, alterEgoName, isVillain, age) => 
    ({name,alterEgoName,isVillain,age,});

*/

const parker = getSuperHero('Spiderman', 'Peter Parker', false, 18)
console.log(parker)

/*
    TEST CASES:
        getSuperHero('Spiderman', 'Peter Parker', false, 18)
        EXPECT: {
            'name': 'Spiderman',
            'alterEgoName': 'Peter Parker',
            'isVillain': false,
            'age': 18,
        }
*/

/*
    @func updateSuperHero
    @param {object} superHero
    @param {string} keyName
    @param {anything} keyValue
    returns {object}
    @desc - takes an existing superhero object
            and adds a new property to it
            
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, 'likesBats', true);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            likesBats: true
        }
*/
const updateSuperHero = (superHero, keyName, keyVal) => {
    superHero[keyName] = keyVal 
    return superHero;
}
console.log(
    'parker',
    Object.keys(parker)
); // name, alterEgoName, isVillain, age
console.log('calling updateSuperHero with `likesSpiders` property')
const newSuperHeroLol = updateSuperHero(parker, 'likesSpiders', false);
console.log(
    'newSuperHeroLol',
    Object.keys(newSuperHeroLol)
); // name, alterEgoName, isVillain, age, likesSpiders
console.log(
    'parker',
    Object.keys(parker)
); // name, alterEgoName, isVillain, age, likesSpiders
console.log('calling updateSuperHero with `isAwesome` property')
updateSuperHero(newSuperHeroLol, 'isAwesome', true)
console.log(
    'newSuperHeroLol',
    Object.keys(newSuperHeroLol)
); // name, alterEgoName, isVillain, age, likesSpiders, isAwesome
console.log(
    'parker',
    Object.keys(parker)
); // name, alterEgoName, isVillain, age, likesSpiders, isAwesome
/*
    TEST CASE:
    const parker = {
        'name': 'Spiderman',
        'alterEgoName': 'Peter Parker',
        'isVillain': false,
        'age': 18,
    };
    updateSuperHero(parker, 'likesSpiders', false);
    assert parker.likesSpiders === false
    // BECAUSE we are asserting the INITIAL parker object
    // have the `likesSpiders` property, we are saying
    // that we expect the original object to be mutated

*/

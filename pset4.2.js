/*
    @func addObjs
    @param {object} obj1
    @param {object} obj2
    @returns {object}
    @desc - add two objects
    @example -
        const obj1 = {
          'a': 1,
          'b': 2,
          'c': 3,
        }
        const obj2 = {
          'd': 1,
          'e': 1,
          'f': 1,
          'a': 0,
        }
        addObjs(obj1, obj2);
        {
          'a': 0,
          'b': 2,
          'c': 3,
          'd': 1,
          'e': 1,
          'f': 1,
        }
*/

/*
const addObjs = (obj1, obj2) => {
    const sumObj = {};
    const keyGetter = (obj) => {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const currentKey = keys[i];
            sumObj[currentKey] = obj[currentKey]
        }
    }

    keyGetter(obj1);
    keyGetter(obj2);

    return sumObj;
}
*/

/*
const addObjs = (obj1, obj2) => {
    const sumObj = {};

    const keys1 = Object.keys(obj1);
    for (let i = 0; i < keys1.length; i++) {
        sumObj[keys1[i]] = obj1[keys1[i]];
    }

    const keys2 = Object.keys(obj2);
    for (let i = 0; i < keys2.length; i++) {
        sumObj[keys2[i]] = obj2[keys2[i]];
    }

    return sumObj;
}
*/


/*
const addObjs = (obj1, obj2) => {
    const sumObj = {};

    // create an array of our two input objects
    const objs = [obj1, obj2];
    // loop through the array of TWO objects
    for (let i = 0; i < objs.length; i++) {
        const currentObj = objs[i];

        const keys = Object.keys(currentObj);
        for (let j = 0; j < keys.length; j++) {
            const currentKey = keys[j];
            sumObj[currentKey] = currentObj[currentKey];
        }
    }

    return sumObj;
}
*/

const copyObj = (obj) => {
    const obj_cpy = {}
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        obj_cpy[keys[i]] = obj[keys[i]];
    }

    return obj_cpy;
}

/*
const addObjs = (obj1, obj2) => {
    const sumObject = copyObj(obj1);

    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        sumObj[keys[i]] = obj[keys[i]];
    }

    return sumObj;
};
*/

const addObjs = (obj1, obj2) => {
    return {...obj1, ...obj2}
};

const obj1 = {
  'a': 1,
  'b': 2,
  'c': 3,
}
const obj2 = {
  'd': 1,
  'e': 1,
  'f': 1,
  'a': 0,
}
console.log(addObjs(obj1, obj2));
/*
    TEST:
    const obj1 = {
      'a': 1,
      'b': 2,
      'c': 3,
    }
    const obj2 = {
      'd': 1,
      'e': 1,
      'f': 1,
      'a': 0,
    }
    addObjs(obj1, obj2);
    {
      'a': 0,
      'b': 2,
      'c': 3,
      'd': 1,
      'e': 1,
      'f': 1,
    }
*/

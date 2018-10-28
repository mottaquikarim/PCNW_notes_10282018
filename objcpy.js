const copyObj = (obj) => {
    const obj_cpy = {}
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        obj_cpy[keys[i]] = obj[keys[i]];
    }

    return obj_cpy;
}

const obj = {
    'name': 1,
    'age': 2,
    'title': 3,
}
const copiedObj = copyObj(obj);
// test 1
console.log('obj is: ', obj)
console.log('copiedObj is: ', copiedObj);

// test 2
copiedObj.test = 'test';
copiedObj.name.c.d = 2;
console.log('obj is: ', obj)
console.log('copiedObj is: ', copiedObj);

delete copiedObj.test
console.log(copiedObj)


/*
    TESTs:
    const obj = {
        'name': 1,
        'age': 2,
        'title': 3,
    }
    const copiedObj = copyObj(obj);

    1. both the obj and copiedObj the same keys AND values
    2. updating copiedObj with a new property does NOT add the same property to the original object
*/

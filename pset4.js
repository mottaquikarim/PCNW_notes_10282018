const copyObj = (obj) => {
    const obj_cpy = {}
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        obj_cpy[keys[i]] = obj[keys[i]];
    }

    return obj_cpy;
}

/*
    @func cpyProps
    @param {object} obj
    @returns {object}
    @desc - for each key in object, create a NEW key with "_cpy" appended to it (same value)
    @example -
        const obj = {
          'a': 1,
          'b': 2,
          'c': 3,
        }
        cpyProps(obj);
        {
          'a': 1,
          'a_cpy': 1,
          'b': 2,
          'b_cpy': 2,
          'c': 3,
          'c_cpy': 3,
        }
*/
const cpyProps = obj => {
    const newObj = {};
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        newObj[keys[i]] = obj[keys[i]];
        newObj[keys[i] + '_cpy'] = obj[keys[i]];
    }

    return newObj;
}

const obj = {
  'a': 1,
  'b': 2,
  'c': 3,
}
console.log(cpyProps(obj));
/*
{
  'a': 1,
  'a_cpy': 1,
  'b': 2,
  'b_cpy': 2,
  'c': 3,
  'c_cpy': 3,
}
*/

/*
    TEST
    GIVEN:
    const obj = {
      'a': 1,
      'b': 2,
      'c': 3,
    }
    cpyProps(obj);
    EXPECT:
    {
      'a': 1,
      'a_cpy': 1,
      'b': 2,
      'b_cpy': 2,
      'c': 3,
      'c_cpy': 3,
    }
*/

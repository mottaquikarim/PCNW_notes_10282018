/*
    WHAT IS AN OBJECT?

        - a list of variables under a namespace
        - a pair of values: key / value
        - a javascript datatype
*/

const dawg2 = {}

const dawg = {};

dawg.name = 'Rocky';
dawg.breed = 'pitbull';
dawg.isMale = true;

dawg.greet = () => {
    return 'woof';
}
dawg.siblings = [dawg2]

const fbUser = (fN, lN, id_, pw, dob, gender) => {
    const u = {
        //'id_': id_,
        // dob: dob,
        id_,
        dob,
        gender,
        pw,
    };
    // computed property
    u.fullName = [fN, lN].join(' ');
    u.firstName = fN;
    u.lastName = lN;

    u.idType = id_.includes('@') ? 'EMAIL': 'MOBILE';
    u.age = Math.floor(Date.now() - new Date(dob).getTime())
    u.posts = [];
    const constants = {
        MILLISECONDS: 1000,
        SECONDS: 60,
        MINUTES: 60,
        HOURS: 24,
        DAYS: 7,
        WEEKS: 52, // note the trailing comma fam
    }

    u.createPost = (msg, photos) => {
        return fbPost(msg, photos);
    }
    u.getAgeInYears = () => {
        return Math.floor(u.age / (constants.MILLISECONDS * 60 * 60 * 24 * 7 * 52))
    }

    return u;
}
// fN, lN, id_, pw, dob, gender
console.log(fbUser('taq', 'karim', 'taqqui.karim@pursuit.org', 'asdfasdfa', 'August 2, 1990 06:55:00', 'male'))







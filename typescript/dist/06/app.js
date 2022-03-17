"use strict";
const e1 = {
    name: 'Xavier',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('xavier', 'max');
result.split(' ');
const fetchedUserData = {
    id: 'u1',
    name: 'max',
};
console.log(fetchedUserData.job.title);

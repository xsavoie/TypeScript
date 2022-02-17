"use strict";
// explicitely define object and keys
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Xavier',
//   age: 30,
//   hobbies: ['Cooking', 'Reading'],
//   role: [2, 'dev'], // tuple
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// can also change value of enum
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR };
const person = {
    name: 'Xavier',
    age: 30,
    hobbies: ['Cooking', 'Reading'],
    role: Role.ADMIN
};
// person.role.push('admin'); // push works for tuple to TS doesnt flag it
// person.role[1] = 10; // generates error because of role typing
// let favoriteActivities: string[];
let favoriteActivities;
favoriteActivities = ['Cooking', 1];
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toString());
    // console.log(hobby.map()) // error because map is not available on strings
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}

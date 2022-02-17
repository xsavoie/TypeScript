"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Xavier',
    age: 30,
    hobbies: ['Cooking', 'Reading'],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ['Cooking', 1];
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toString());
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}

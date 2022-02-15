// explicitely define object and keys
// const person: {
//   name: string
//   age: number
// } = {
var person = {
    name: 'Xavier',
    age: 30,
    hobbies: ['Cooking', 'Reading'],
    role: [2, 'dev']
};
person.role.push('admin');
person.role[1] = 10;
// let favoriteActivities: string[];
var favoriteActivities;
favoriteActivities = ['Cooking', 1];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toString());
    // console.log(hobby.map()) // error because map is not available on strings
}

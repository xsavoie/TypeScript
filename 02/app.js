// explicitely define object and keys
// const person: {
//   name: string
//   age: number
// } = {
var person = {
    name: "Xavier",
    age: 30,
    hobbies: ['Cooking', 'Reading']
};
// let favoriteActivities: string[];
var favoriteActivities;
favoriteActivities = ['Cooking', 1];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toString());
}

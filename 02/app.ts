// explicitely define object and keys
// const person: {
//   name: string
//   age: number
// } = {
  const person = {
  name: "Xavier",
  age: 30,
  hobbies: ['Cooking', 'Reading']
};

// let favoriteActivities: string[];
let favoriteActivities: any[];
favoriteActivities = ['Cooking', 1]

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toString());
  // console.log(hobby.map()) // error because map is not available on strings
}
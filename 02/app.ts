// explicitely define object and keys
// const person: {
//   name: string
//   age: number
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Xavier',
  age: 30,
  hobbies: ['Cooking', 'Reading'],
  role: [2, 'dev'], // tuple
};

person.role.push('admin');
// person.role[1] = 10;

// let favoriteActivities: string[];
let favoriteActivities: any[];
favoriteActivities = ['Cooking', 1];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toString());
  // console.log(hobby.map()) // error because map is not available on strings
}

"use strict";
let addNum;
addNum = (n1, n2) => {
    return n1 + n2;
};
class testPerson {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1;
user1 = new testPerson();
user1.greet('Hi there, I am ');
console.log(user1);

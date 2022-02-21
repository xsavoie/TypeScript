"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe();

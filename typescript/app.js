"use strict";
// tsc --init --> creates tsconfig.json file
// can now use tsc command to compile all ts files in dir OR tsc -w to watch all
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Click');
});

"use strict";
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('Click' + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'test'));
}

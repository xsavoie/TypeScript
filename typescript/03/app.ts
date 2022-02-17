// tsc --init --> creates tsconfig.json file
// can now use tsc command to compile all ts files in dir OR tsc -w to watch all

const button = document.querySelector('button');

function clickHandler(message: string) {
  console.log('Click' + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'test'));
}

// test

/**
 * Let's make a calculator 🧮
 */

type Check = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate(opt: Check, a: number, b: number): number{
    switch(opt){
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        case 'remainder':
            return a % b;
        default:
            throw new Error('unknown error');
    }
}
 console.log(calculate('add', 1, 3)); // 4
 console.log(calculate('substract', 3, 1)); // 2
 console.log(calculate('multiply', 4, 2)); // 8
 console.log(calculate('divide', 4, 2)); // 2
 console.log(calculate('remainder', 5, 2)); // 1

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/**
 * Let's make a game 🕹
 */

type Control = 'up' | 'down' | 'left' | 'right';
const position = { x: 0, y: 0 }
function move(command: Control) {
    switch(command){
        case 'up':
            position.y++;
            break;
        case 'down':
            position.y--;
            break;
        case 'left':
            position.x--;
            break;
        case 'right':
            position.x++;
            break;
        default:
            break;
    }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/**
 ** Print Loading State
*/
type LoadingState = {
    state: 'loading';
};

type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
};

type FailState = {
    state: 'fail';
    reason: string;
};

type ResourceLoadState = LoadingState | SuccessState | FailState;

function printLoginState(input: ResourceLoadState) {
    switch(input.state){
        case 'loading':
            console.log(`👀 loading...`);
            break;
        case 'success':
            console.log(`😃 loaded`);
            break;
        case 'fail':
            console.log(`😱 no network`);
            break;
        default:
            break;
    }
}

printLoginState({ state: 'loading' }); // 👀 loading...
printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
  